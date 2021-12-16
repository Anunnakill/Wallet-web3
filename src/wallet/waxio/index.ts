import * as waxjs from "@waxio/waxjs/dist";

class Waxio {
  public web3: any;
  public wallet: any;
  public account: any;

  constructor({
    pubKeys,
    rpcEndpoint,
    userAccount,
    tryAutoLogin = true,
  }: any) {
    // 初始化
    this.web3 = {};
    this.wallet = {};
    this.account = "";

    // 初始化钱包
    this.wallet = new waxjs.WaxJS({
      pubKeys,
      rpcEndpoint,
      userAccount,
      tryAutoLogin,
    });
  }

  public async login() {
    try {
      // 授权
      const account = await this.wallet.login();

      // 默认账号
      this.account = account;

      // 授权过程完毕
    } catch (error: any) {
      throw error;
    }
  }

  // 钱包监听程序退出
  public async logout() {}

  // 钱包监听账号变化
  public onAccountsChanged(callBack: Function) {}

  // 钱包监听网络变化
  public onChainChanged(callBack: Function) {}
}

export default Waxio;
