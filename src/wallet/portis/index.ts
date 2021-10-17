import Web3 from "web3";
import PortisProvider from "@portis/web3";

class Portis {
  public web3: any;
  public wallet: any;
  public account: any;

  constructor(network?: string) {
    // 初始化
    this.web3 = {};
    this.wallet = {};
    this.account = "";

    // 初始化钱包
    this.wallet = new PortisProvider(
      "62b0690f-8942-4a25-902b-02a6c77ba9e0",
      network || "mainnet",
      {},
    );
  }

  public async login() {
    try {
      // 授权
      await this.wallet.provider.enable();

      // web3实例
      this.web3 = new Web3(this.wallet);

      // 默认账号
      const [account] = await this.web3.eth.getAccounts();

      this.account = account;

      // 授权过程完毕
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async logout() {
    await this.wallet.logout();
  }
}

export default Portis;
