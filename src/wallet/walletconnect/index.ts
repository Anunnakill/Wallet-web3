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
      throw new Error(error);
    }
  }

  public async logout() {
    await this.wallet.disconnect();
  }
}

export default Walletconnect;
