import Web3 from "web3";

class Metamask {
  public web3: any;
  public wallet: any;
  public account: any;

  constructor(network?: string) {
    // 初始化
    this.web3 = {};
    this.wallet = {};
    this.account = "";

    // metamask内置提供者
    const Window: any = globalThis;
    const ethereum = Window.ethereum;

    // 有可能被其他提供者覆盖
    this.wallet = ethereum.providers?.[1] || ethereum;
  }

  public async login() {
    try {
      // 授权
      const [account] = await this.wallet.request({
        method: "eth_requestAccounts",
      });

      // 默认账号
      this.account = account;

      // web3实例
      this.web3 = new Web3(this.wallet);

      // 授权过程完毕
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async logout() {}
}

export default Metamask;
