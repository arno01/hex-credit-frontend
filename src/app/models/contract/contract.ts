import {MetamaskService} from '../../services/web3/web3.service';
import {ContractConstants} from './constants';
import BigNumber from 'bignumber.js';

export class Contract {
  private contract: any;
  private tokenContract: any;
  private uniswapContract: any;
  private contractInsightParams: any;

  constructor(
    private network: string,
    private web3Service: MetamaskService
  ) {
    console.log(ContractConstants.CONTRACT_ABI);
    this.contract = this.web3Service.getContract(ContractConstants.CONTRACT_ABI, ContractConstants.ADDRESSES[this.network]);
    this.tokenContract = this.web3Service.getContract(ContractConstants.ERC20_ABI, ContractConstants.TOKEN_ADDRESSES[this.network]);
    this.uniswapContract = this.web3Service.getContract(ContractConstants.UNISWAP_ABI, ContractConstants.UNISWAP_ADDRESSES[this.network]);
  }


  private getLoansPeriods() {
    try {
      return this.contract.methods.getHexPeriods().call().then((result) => {
        return {
          key: 'loansPeriods',
          value: result.map((onePeriod, index) => {
            return {
              available: 'HEX',
              time: parseInt(onePeriod, 10),
              index
            };
          })
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private getCDPPeriods() {
    try {
      return this.contract.methods.getEthPeriods().call().then((result) => {
        return {
          key: 'CDPPeriods',
          value: result.map((onePeriod, index) => {
            return {
              available: 'ETH',
              time: parseInt(onePeriod, 10),
              index
            };
          })
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private getMinHexLoan() {
    try {
      return this.contract.methods.minHexLoan().call().then((result) => {
        return {
          key: 'minHexLoan',
          value: result
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private getMinWeiCDP() {
    try {
      return this.contract.methods.minWeiCDP().call().then((result) => {
        return {
          key: 'minWeiCDP',
          value: result
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private getTokenDecimals() {
    try {
      return this.tokenContract.methods.decimals().call().then((result: any) => {
        return {
          key: 'tokenDecimals',
          value: parseInt(result, 10)
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private getLockPeriod() {
    try {
      return this.contract.methods.lockPeriod().call().then((result) => {
        return {
          key: 'lockPeriod',
          value: result
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private getHexPrice() {
    try {
      return this.uniswapContract.methods.getEthToTokenInputPrice((10 ** 18).toString()).call().then((result: any) => {
        return {
          key: 'hexPrice',
          value: new BigNumber(result)
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private getLoanShare() {
    try {
      return this.contract.methods.loanShare().call().then((result) => {
        return {
          key: 'loanShare',
          value: result / 10
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private feeLoan() {
    try {
      return this.contract.methods.feeLoan().call().then((result) => {
        return {
          key: 'feeLoan',
          value: result / 10
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private feeDeposit() {
    try {
      return this.contract.methods.feeDeposit().call().then((result) => {
        return {
          key: 'feeDeposit',
          value: result / 10
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private getBlock() {
    try {
      return this.web3Service.getBlock().then((result) => {
        return {
          key: 'blockInfo',
          value: result
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  private secondsInDay() {
    try {
      return this.contract.methods.secondsInDay().call().then((result) => {
        return {
          key: 'secondsInDay',
          value: result * 1000
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  public getContractOptions() {
    const promises = [
      this.getLoansPeriods(),
      this.getCDPPeriods(),
      this.getMinHexLoan(),
      this.getMinWeiCDP(),
      this.getTokenDecimals(),
      this.getLockPeriod(),
      this.getHexPrice(),
      this.getLoanShare(),
      this.feeLoan(),
      this.feeDeposit(),
      this.getBlock(),
      this.secondsInDay()
    ];
    return Promise.all(promises).then((result) => {
      const returnData: any = {};
      result.forEach((dataItem: any) => {
        console.log(dataItem);
        returnData[dataItem.key] = dataItem.value;
      });
      returnData.chainLeftTime = 0;
      this.contractInsightParams = {...returnData};
      return returnData;
    });
  }

  public approveHEXTokens(amount, periodIndex) {
    const fromAccount = this.contract.givenProvider.selectedAddress;
    return new Promise((resolve, reject) => {
      this.tokenContract.methods.approve(this.contract.options.address, amount).send({
        from: fromAccount
      }).then(() => {
        console.log(amount, periodIndex);
        this.contract.methods.takeCredit(amount, periodIndex).send({
          from: fromAccount
        }).then(resolve, reject);
      }, reject);
    });
  }


  public addLiquidityPool(amount, periodIndex) {
    const fromAccount = this.contract.givenProvider.selectedAddress;
    return this.contract.methods.addToLiquidityPool(periodIndex).send({
      from: fromAccount,
      value: amount
    });
  }

  private getCreditsByLqPoolId(poolId) {
    return this.contract.methods.getCreditsByLqPoolId(poolId).call();
  }

  public getLqPools(id) {
    return this.contract.methods.lqPools(id).call().then((lqPool) => {
      return this.getCreditsByLqPoolId(id).then((creditsIds: string[]) => {
        const creditsPromises = creditsIds.map((creditId) => {
          return this.getCredits(creditId);
        });
        lqPool.id = id;
        return Promise.all(creditsPromises).then((credits) => {
          lqPool.credits = credits;
          return lqPool;
        });
      });
    });
  }

  public getCreditsByOwner() {
    return this.contract.methods.getCreditsByOwner(this.contract.givenProvider.selectedAddress)
      .call().then((result) => {
        const promises = result.map((id) => {
          return this.getCredits(id);
        });
        return Promise.all(promises);
      });
  }


  public getCredits(id) {
    return this.contract.methods.credits(id).call().then((credit) => {
      credit.id = id;
      return credit;
    });
  }

  public getLqPoolsByOwner() {
    return this.contract.methods.getLqPoolsByOwner(this.contract.givenProvider.selectedAddress)
      .call().then((result) => {
        const promises = result.map((id) => {
          return this.getLqPools(id).then((deposit) => {
            deposit.id = id;
            return deposit;
          });
        });
        return Promise.all(promises);
      });
  }


  public withdrawFromPoolWithFee(depositId) {
    return this.contract.methods.withdrawFromPoolWithFee(depositId).send({
      from: this.contract.givenProvider.selectedAddress
    });
  }


  public getAccountBalances() {
    const promises = [
      this.tokenContract.methods.balanceOf(this.contract.givenProvider.selectedAddress).call().then((res) => {
        return {
          coin: 'HEX',
          value: res
        };
      }),
      this.web3Service.getBalance(this.contract.givenProvider.selectedAddress).then((res) => {
        return {
          coin: 'ETH',
          value: res
        };
      })
    ];
    return Promise.all(promises);
  }

  public payCredit(creditId, payValue) {
    return this.contract.methods.payCredit(creditId).send({
      from: this.contract.givenProvider.selectedAddress,
      value: payValue
    });
  }

  public liquidateCredit(creditId) {
    return this.contract.methods.liquidateCredit(creditId).send({
      from: this.contract.givenProvider.selectedAddress
    });
  }


  private getTotalEthAvailable() {
    return this.contract.methods.getTotalEthAvailable().call().then((res) => {
      return {
        key: 'totalEthAvailable',
        val: res
      };
    });
  }

  private getTotalEthAvailableByPeriod(ethPeriod) {
    return this.contract.methods.getTotalEthAvailableByPeriod(ethPeriod).call().then((res) => {
      return {
        key: 'totalEthAvailableByPeriod',
        val: {
          value: res,
          index: ethPeriod
        }
      };
    });
  }

  private getTotalHexStaked() {
    return this.contract.methods.getTotalHexStaked().call().then((res) => {
      return {
        key: 'totalHexStaked',
        val: res
      };
    });
  }

  private getTotalHexStakedByPeriod(hexPeriod) {
    return this.contract.methods.getTotalHexStakedByPeriod(hexPeriod).call().then((res) => {
      return {
        key: 'totalHexStakedByPeriod',
        val: {
          value: res,
          index: hexPeriod
        }
      };
    });
  }

  public getTotalInfo(ethPeriodsCount, hexPeriodsCount) {
    const totalPromises = [
      this.getTotalEthAvailable(),
      this.getTotalHexStaked()
    ];

    for (let k = 0; k < ethPeriodsCount; k++) {
      totalPromises.push(this.getTotalEthAvailableByPeriod(k));
    }

    for (let k = 0; k < hexPeriodsCount; k++) {
      totalPromises.push(this.getTotalHexStakedByPeriod(k));
    }

    return Promise.all(totalPromises).then((results) => {
      const returnValues = {};
      results.forEach((oneResult) => {
        if (oneResult.val.index === undefined) {
          returnValues[oneResult.key] = oneResult.val;
        } else {
          returnValues[oneResult.key] = returnValues[oneResult.key] || [];
          returnValues[oneResult.key][oneResult.val.index] = oneResult.val;
        }
      });
      return returnValues;
    });
  }

}






