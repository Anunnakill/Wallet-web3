import portis from "./wallet/portis";
import metamask from "./wallet/metamask";
import walletlink from "./wallet/walletlink";
import walletconnect from "./wallet/walletconnect";
class Wallet {
    constructor(init, network) {
        // 全部支持的钱包
        this.wallets = {
            portis,
            metamask,
            walletlink,
            walletconnect,
        };
        // 初始化
        this.use = init;
        // 替换默认类的实例对象
        return new this.wallets[this.use](network);
    }
}
export default Wallet;
