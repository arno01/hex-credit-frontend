import {Injectable} from '@angular/core';
import Web3 from 'web3';
import {Observable} from 'rxjs';

const IS_PRODUCTION = location.protocol === 'https:';

@Injectable({
  providedIn: 'root'
})
export class MetamaskService {

  private metaMaskWeb3: any;

  constructor() {
    this.providers = {};
    this.providers.metamask = Web3.givenProvider;
    this.metaMaskWeb3 = window['ethereum'];
    this.Web3 = new Web3(this.providers.metamask);
  }

  private providers;
  private Web3;

  public getContract(abi, address) {
    return new this.Web3.eth.Contract(abi, address);
  }

  public getBalance(address) {
    return this.Web3.eth.getBalance(address);
  }

  public getBlock() {
    return this.Web3.eth.getBlock('latest');
  }

  public getAccounts() {
    const usedNetworkVersion = IS_PRODUCTION ? 1 : 3;
    const net = usedNetworkVersion === 1 ? 'mainnet' : 'ropsten';
    const isValidMetaMaskNetwork = (observer) => {
      const networkVersion = Number(this.metaMaskWeb3.networkVersion);
      if (usedNetworkVersion !== networkVersion) {
        observer.error({
          code: 2,
          msg: 'Please choose ' + net + ' network in Metamask.'
        });
        return false;
      }
      return true;
    };

    const onAuth = (observer, account) => {
      observer.next({
        account,
        network: net
      });
    };

    return new Observable((observer) => {

      if (this.metaMaskWeb3 && this.metaMaskWeb3.isMetaMask) {
        if (!isValidMetaMaskNetwork(observer)) {
          return;
        }

        this.metaMaskWeb3.on('accountsChanged', (accounts) => {
          if (isValidMetaMaskNetwork(observer)) {
            onAuth(observer, accounts[0]);
          }
        });

        if (!this.metaMaskWeb3.selectedAddress) {
          this.metaMaskWeb3.enable().then((accounts) => {
            onAuth(observer, accounts[0]);
          }, () => {
            observer.error({
              code: 3,
              msg: 'Not authorized'
            });
          });
        } else {
          onAuth(observer, this.metaMaskWeb3.selectedAddress);
        }
      } else {
        observer.error({
          code: 1,
          msg: 'Metamask extension is not found. You can install it from <a href="https://metamask.io" target="_blank">metamask.io</a>'
        });
      }
      return {
        unsubscribe() {}
      };
    });
  }
}
