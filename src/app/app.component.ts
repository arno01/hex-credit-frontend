import { Component, ViewChild, EventEmitter, NgZone } from '@angular/core';
import { Contract } from './models/contract/contract';
import { MetamaskService } from './services/web3/web3.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import BigNumber from 'bignumber.js';

const DaysPerMonth = 30;
const periodsGroups = 2;

class Deposit {
  public totalAmount: BigNumber;
  public usedAmount: BigNumber;
  public freeAmount: BigNumber;

  public endDate: number;
  public leftDays: number;
  public passedDays: number;
  public gracePeriod: number;
  public gracePeriodEndDate: number;
  public leftGracePeriod: number;
  public commission: number;
  public state: string;
  public id: string;

  public credits: Credit[];

  private modal: MatDialogRef<any>;

  constructor(
    private depositParams,
    private contractOptions,
    private contract,
    private dialog: MatDialog
  ) {
    this.createParams();
  }

  private createParams() {
    const now: number = new Date().getTime();

    console.log(this.depositParams);
    // Amounts
    this.totalAmount = new BigNumber(this.depositParams.totalAmount).div(10 ** 18);
    this.freeAmount = new BigNumber(this.depositParams.freeAmount).div(10 ** 18);


    this.usedAmount = this.depositParams.credits.reduce((currVal, credit) => {
      return currVal.plus(credit.totalAmount);
    }, new BigNumber(0)).div(10 ** 18);

    // Dates and periods
    const depositPeriod = parseInt(this.depositParams.maxDays, 10) * this.contractOptions.secondsInDay;
    this.gracePeriod = parseInt(this.contractOptions.lockPeriod, 10);
    const createdAt = this.depositParams.createdAt * 1000;

    this.endDate = createdAt + depositPeriod;
    this.leftDays = Math.max(0, this.endDate - now) / this.contractOptions.secondsInDay;
    this.passedDays = (now - createdAt) / this.contractOptions.secondsInDay;
    this.leftGracePeriod = this.gracePeriod - this.passedDays;
    this.gracePeriodEndDate = createdAt + this.gracePeriod * this.contractOptions.secondsInDay;

    // Round days
    this.passedDays = Math.round(this.passedDays);
    this.leftDays = Math.round(this.leftDays);

    // States
    this.id = this.depositParams.id;
    const gracePeriodState = this.passedDays < this.leftGracePeriod;

    this.commission = !this.usedAmount.isZero() ? this.contractOptions.feeDeposit / 100 : 0;

    this.state = gracePeriodState ? 'gracePeriod' :
      !this.freeAmount.isZero() ? !this.usedAmount.isZero() ? 'withdrawWithFee' : 'withdrawWithZero' : 'empty';

    this.credits = this.depositParams.credits.map(creditParams => new Credit(creditParams, this.contractOptions));
  }

  private updateDeposit() {
    return this.contract.getLqPools(this.id).then((depositParams) => {
      this.depositParams = depositParams;
      this.createParams();
    });
  }

  public openModal(modalTemplate) {
    this.modal = this.dialog.open(modalTemplate, {
      width: '540px',
      panelClass: 'custom-dialog-container'
    });
    this.updateDeposit().then((res) => {});
  }


  public withdrawFromPoolWithFee() {
    this.contract.withdrawFromPoolWithFee(this.id).then(() => {
      this.modal.close();
      this.updateDeposit().then((res) => {});
    });
  }

}

class Credit {
  public totalAmount: BigNumber;
  public creditAmount: BigNumber;
  public hexWithdrawAmount: BigNumber;

  public expiryDate: number;
  public leftDays: number;
  public state: string;
  public id: string;

  private modal: MatDialogRef<any>;

  constructor(
    private creditParams,
    private contractOptions,
    private contract?,
    private dialog?
  ) {
    this.createParams();
  }

  private createParams() {
    const now: number = new Date().getTime();
    this.expiryDate = this.creditParams.expireTime * 1000;

    this.leftDays = Math.max(0, Math.round((this.expiryDate - now) / this.contractOptions.secondsInDay));
    this.hexWithdrawAmount = new BigNumber(this.creditParams.hexLockedAmount).div(Math.pow(10, this.contractOptions.tokenDecimals));
    this.creditAmount = new BigNumber(this.creditParams.totalAmount).div(Math.pow(10, 18));
    this.id = this.creditParams.id;

    const creditExpired =
      parseInt(this.contractOptions.blockInfo.timestamp, 10) > parseInt(this.creditParams.expireTime, 10);

    this.state = (!creditExpired && this.creditParams.status === '0') ? 'refill' :
      (this.creditParams.status === '2' && creditExpired) ? 'withdraw' : !creditExpired ? 'locked' : 'liquidate';
  }

  private updateCredit() {
    this.contract.getCredits(this.id).then((creditParams) => {
      this.creditParams = creditParams;
      this.createParams();
    });
  }

  public refillCredit() {
    this.contract.payCredit(this.id, this.creditAmount.times(Math.pow(10, 18))).then((result) => {
      this.modal.close();
      this.updateCredit();
    });
  }


  public withdrawCredit() {
    this.contract.liquidateCredit(this.id).then((result) => {
      this.modal.close();
      this.updateCredit();
    });
  }

  public openModal(modalTemplate) {
    this.modal = this.dialog.open(modalTemplate, {
      width: '540px',
      panelClass: 'custom-dialog-container'
    });
    this.updateCredit();
  }



}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @ViewChild('creditForm', {static: false}) public creditForm;
  @ViewChild('loanModalTemplate', {static: false}) loanModalTemplate;
  @ViewChild('depositModalTemplate', {static: false}) depositModalTemplate;

  public openedDeposit: any;
  public openedCredit: any;

  public transactionInProgress: boolean;

  public txError: boolean;
  public txSuccess: boolean;

  public creditFormData: {
    coin?: string;
    amount?: string;
    period?: any;
  };

  public formTimes: any;
  public metaMaskAuth = false;
  private contract: any;
  private allPeriodsList: any[] = [];
  public metaMaskError: string;
  public userAddress: string;
  public balances: any[];
  public network: string;
  public contractOptions: {
    loansPeriods: any[];
    CDPPeriods: any[];
    minHexLoan: string;
    minWeiCDP: string;
    minValues: any;
    hexPrice: BigNumber;
    tokenDecimals: number;
    feeLoan: number;
    feeDeposit: number;
    loanShare: number;
    chainLeftTime: number;
    lockPeriod: number;
    blockInfo: any;
  };

  public deposits: any[];
  public credits: any[];

  public totalVolume: any;

  public onChangeCoinEmitter: EventEmitter<any>;

  public coinsDecimals: {
    ETH: number;
    HEX: number;
  };

  constructor(
    private web3Service: MetamaskService,
    private dialog: MatDialog,
    private ngZone: NgZone
  ) {
    this.onChangeCoinEmitter = new EventEmitter();
    this.creditFormData = {};
    this.formTimes = [];
    this.getMetaMaskAccount(true);
  }


  private checkPeriods(periodsLists) {
    const concatAndSortPeriods = (periods) => {
      const newPeriods = Array.prototype.concat.apply([], periods).map((onePeriod) => {
        onePeriod.value = onePeriod.time / DaysPerMonth;
        return onePeriod;
      }).reduce((val, item) => {
        const inArray = val.find((newItem) => newItem.time === item.time);
        if (inArray) {
          inArray.available.push(item.available);
          inArray.index[item.available] = item.index;
        } else {
          const indexes = {};
          indexes[item.available] = item.index;
          item.available = [item.available];
          item.index = indexes;
          val.push(item);
        }
        return val;
      }, []);
      newPeriods.sort((a, b) => {
        return a.time > b.time ? 1 : -1;
      }).forEach((period) => {
        period.disabled = true;
      });
      return newPeriods;
    };

    const groupByLines = (periods) => {
      let currGroupIndex = -1;
      const groupedPeriods = [];
      periods.forEach((period, index) => {
        const periodsLines = periods.length / periodsGroups;
        if (!(index % periodsLines)) {
          currGroupIndex++;
        }
        groupedPeriods[currGroupIndex] = groupedPeriods[currGroupIndex] || [];
        groupedPeriods[currGroupIndex].push(period);
        this.allPeriodsList.push(period);
      });
      return groupedPeriods;
    };


    this.formTimes = groupByLines(concatAndSortPeriods(periodsLists));

  }


  public changeCoin() {
    this.allPeriodsList.forEach((period) => {
      period.disabled = !period.available.includes(this.creditFormData.coin) || null;
      if (period === this.creditFormData.period && period.disabled) {
        delete this.creditFormData.period;
      }
    });
    setTimeout(() => {
      this.onChangeCoinEmitter.emit('');
    });
  }


  private getLqPools() {
    this.contract.getLqPoolsByOwner().then((res) => {
      this.deposits = res.map((depositParams: any) => {
        return new Deposit(depositParams, this.contractOptions, this.contract, this.dialog);
      });
      this.ngZone.run(() => {});
    });
  }

  private getCredits() {
    this.contract.getCreditsByOwner().then((res) => {
      this.credits = res.map((creditParams: any) => {
        return new Credit(creditParams, this.contractOptions, this.contract, this.dialog);
      });
      this.ngZone.run(() => {});
    });
  }

  private getAccountInfo() {
    this.getLqPools();
    this.getCredits();
    this.contract.getAccountBalances().then((res) => {
      res.forEach((balance) => {
        balance.decimalsValue = new BigNumber(balance.value).div(Math.pow(10, this.coinsDecimals[balance.coin]));
      });
      this.balances = res;
    });
  }

  private getContractOptions() {
    return this.contract.getContractOptions().then((result: any) => {
      this.contractOptions = result;
      this.contractOptions.minValues = {
        HEX: result.minHexLoan,
        ETH: result.minWeiCDP
      };
      this.coinsDecimals = {
        ETH: 18,
        HEX: result.tokenDecimals
      };
      this.checkPeriods([
        result.loansPeriods,
        result.CDPPeriods
      ]);
    });
  }

  private getTotalInfo() {
    this.contract.getTotalInfo(
      this.contractOptions.CDPPeriods.length,
      this.contractOptions.loansPeriods.length
    ).then((results: any) => {
      results.totalHexStaked = new BigNumber(results.totalHexStaked).div(Math.pow(10, this.contractOptions.tokenDecimals));
      results.totalHexStakedByPeriod.map((oneVal) => {
        oneVal.value = new BigNumber(oneVal.value).div(Math.pow(10, this.contractOptions.tokenDecimals));
        oneVal.months = this.contractOptions.loansPeriods[oneVal.index].value;
        return oneVal.value;
      }).sort((a, b) => {
        return a > b ? 1 : -1;
      });

      results.totalEthAvailable = new BigNumber(results.totalEthAvailable).div(Math.pow(10, 18));
      results.totalEthAvailableByPeriod.map((oneVal) => {
        oneVal.value = new BigNumber(oneVal.value).div(Math.pow(10, 18));
        oneVal.months = this.contractOptions.CDPPeriods[oneVal.index].value;
        return oneVal.value;
      }).sort((a, b) => {
        return a > b ? 1 : -1;
      });

      this.totalVolume = results;
      console.log(this.totalVolume);
    });
  }

  private onAuthMetaMask() {
    if (!this.contractOptions) {
      this.contract = new Contract(this.network, this.web3Service);
      this.getContractOptions().then(() => {
        this.getAccountInfo();
        this.getTotalInfo();
      });
    } else {
      this.getAccountInfo();
    }

  }


  public getMetaMaskAccount(ignoreErrors?) {
    this.web3Service.getAccounts().subscribe((result: any) => {
      this.metaMaskAuth = true;
      this.userAddress = result.account;
      this.network = result.network;
      this.metaMaskError = '';
      this.onAuthMetaMask();
    }, (err) => {
      this.metaMaskAuth = false;
      this.metaMaskError = !ignoreErrors ? err.msg : '';
    });
  }


  public createTransaction() {
    let method;
    switch (this.creditFormData.coin) {
      case 'ETH':
        method = this.contract.addLiquidityPool(
          this.creditFormData.amount,
          this.creditFormData.period.index.ETH
        ).then((result) => {
          this.getLqPools();
          return result;
        });
        break;
      case 'HEX':
        method = this.contract.approveHEXTokens(
          this.creditFormData.amount,
          this.creditFormData.period.index.HEX
        ).then((result) => {
          this.getCredits();
          return result;
        });
        break;
    }

    if (method) {
      this.transactionInProgress = true;
      method.then(() => {
        this.txSuccess = true;
        this.creditFormData = {};
      }, () => {
        this.txError = true;
      }).finally(() => {
        this.transactionInProgress = false;
        setTimeout(() => {
          this.txSuccess = false;
          this.txError = false;
        }, 3000);
      });
    }
  }

  public openLoanModal(credit) {
    this.openedCredit = credit;
    credit.openModal(this.loanModalTemplate);
  }

  public openDepositModal(deposit) {
    this.openedDeposit = deposit;
    deposit.openModal(this.depositModalTemplate);
  }

  get creditAmount() {
    const fee =
      new BigNumber(this.creditFormData.amount).times(this.contractOptions.feeLoan / 100);
    const totalAmount =
      new BigNumber(this.creditFormData.amount).minus(fee);

    return totalAmount.times(this.contractOptions.loanShare / 100).div(this.contractOptions.hexPrice).dp(8).toString(10);
  }
  get creditFee() {
    return new BigNumber(this.creditFormData.amount).div(Math.pow(10, this.contractOptions.tokenDecimals))
      .times(this.contractOptions.feeLoan / 100).dp(8).toString(10);
  }



}
