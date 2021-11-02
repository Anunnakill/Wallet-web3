import Web3 from "web3";
import PortisProvider from "@portis/web3";

class Portis {
  public web3: any;
  public wallet: any;
  public account: any;

  constructor({ dappId, network, config = {} }: any) {
    // 初始化
    this.web3 = {};
    this.wallet = {};
    this.account = "";

    // 初始化钱包
    this.wallet = new PortisProvider(dappId, network, config);
  }

  public async login() {
    try {
      // 授权
      await this.wallet.provider.enable();

      // web3实例
      this.web3 = new Web3(this.wallet.provider);

      // 默认账号
      const [account] = await this.web3.eth.getAccounts();

      this.account = account;

      // 授权过程完毕
    } catch (error: any) {
      throw error;
    }
  }

  public async logout() {
    await this.wallet.logout();
  }

  // 钱包监听账号变化
  public onAccountsChanged(callBack: Function) {
    this.wallet.onActiveWalletChanged(callBack);
  }

  // 钱包监听网络变化
  public onChainChanged(callBack: Function) {}
}

export default Portis;
