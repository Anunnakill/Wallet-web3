import waxio from "./wallet/waxio";
import portis from "./wallet/portis";
import phantom from "./wallet/phantom";
import metamask from "./wallet/metamask";
import fortmatic from "./wallet/fortmatic";
import walletlink from "./wallet/walletlink";
import walletconnect from "./wallet/walletconnect";

class Wallet {
  // 当前注册的钱包
  public use: string;

  // 全部支持的钱包
  public wallets: any = {
    waxio,
    portis,
    phantom,
    metamask,
    fortmatic,
    walletlink,
    walletconnect,
  };

  constructor(name: string, config?: object) {
    // 初始化
    this.use = name;

    // 替换默认类的实例对象
    return new this.wallets[this.use](config);
  }
}

export default Wallet;
