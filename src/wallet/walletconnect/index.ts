import Web3 from "web3";
import rpc from "./rpc.json";
import WalletConnectProvider from "@walletconnect/web3-provider";

class Walletconnect {
  public web3: any;
  public wallet: any;
  public account: any;

  constructor(network?: string) {
    // 初始化
    this.web3 = {};
    this.wallet = {};
    this.account = "";

    // 初始化钱包
    this.wallet = new WalletConnectProvider({ rpc });
  }

  public async login() {
    try {
      // 授权
      const [account] = await this.wallet.enable();

      // 默认账号
      this.account = account;

      // web3实例
      this.web3 = new Web3(this.wallet);

      // 授权过程完毕
    } catch (error: any) {
      throw error;
    }
  }

  public async logout() {
    await this.wallet.disconnect();
  }

  // 钱包监听账号变化
  public onAccountsChanged(callBack: Function) {
    this.wallet.on("accountsChanged", ([account]: string[]) =>
      callBack(account),
    );
  }

  // 钱包监听网络变化
  public onChainChanged(callBack: Function) {
    this.wallet.on("chainChanged", callBack);
  }
}

export default Walletconnect;
