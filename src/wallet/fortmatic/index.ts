import Web3 from "web3";
import FortmaticProvider from "fortmatic";

class Fortmatic {
  public web3: any;
  public wallet: any;
  public account: any;

  constructor({ apiKey, network }: any) {
    // 初始化
    this.web3 = {};
    this.wallet = {};
    this.account = "";

    // 初始化钱包
    this.wallet = new FortmaticProvider(apiKey, network);
  }

  // 钱包执行账号登录
  public async login() {
    try {
      // 授权
      await this.wallet.user.login();

      // web3实例
      this.web3 = new Web3(this.wallet.getProvider());

      // 默认账号
      const [account] = await this.web3.eth.getAccounts();

      this.account = account;

      // 授权过程完毕
    } catch (error: any) {
      throw error;
    }
  }

  // 钱包执行账号退出
  public async logout() {
    await this.wallet.user.logout();
  }

  // 钱包监听账号变化
  public onAccountsChanged(callBack: Function) {}

  // 钱包监听网络变化
  public onChainChanged(callBack: Function) {}
}

export default Fortmatic;
