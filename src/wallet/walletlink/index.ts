import Web3 from "web3";
import config from "./config.json";
import WalletlinkProvider from "walletlink";

interface Options {
  appName: string;
  darkMode: boolean;
  appLogoUrl: string;
  network: "mainnet" | "ropsten";
}

class Walletlink {
  public web3: any;
  public wallet: any;
  public account: any;

  constructor({ appName, darkMode, appLogoUrl, network }: Options) {
    // 初始化
    this.web3 = {};
    this.wallet = {};
    this.account = "";

    // 初始化钱包
    const init = new WalletlinkProvider({
      appName,
      darkMode,
      appLogoUrl,
    });

    this.wallet = init.makeWeb3Provider(
      config[network].http,
      config[network].id,
    );
  }

  // 钱包执行账号登录
  public async login() {
    try {
      // 授权
      await this.wallet.enable();

      // web3实例
      this.web3 = new Web3(this.wallet);

      // 默认账号
      const [account] = await this.web3.eth.getAccounts();

      this.account = account;

      // 授权过程完毕
      return true;
    } catch (error: any) {
      throw error;
    }
  }

  // 钱包执行账号退出
  public async logout() {
    return await this.wallet.close();
  }

  // 钱包监听账号变化
  public onAccountsChanged(callBack: Function) {}

  // 钱包监听网络变化
  public onChainChanged(callBack: Function) {}
}

export default Walletlink;
