import portis from "./wallet/portis";
import metamask from "./wallet/metamask";
import walletlink from "./wallet/walletlink";
import walletconnect from "./wallet/walletconnect";

class Wallet {
  // 当前注册的钱包
  public use: string;

  // 全部支持的钱包
  public wallets: any = {
    portis,
    metamask,
    walletlink,
    walletconnect,
  };

  constructor(init: string) {
    // 初始化
    this.use = init;

    // 替换默认类的实例对象
    return new this.wallets[this.use]();
  }
}

export default Wallet;
