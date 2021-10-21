import portis from "./wallet/portis";
import metamask from "./wallet/metamask";
import walletlink from "./wallet/walletlink";
import walletconnect from "./wallet/walletconnect";
var Wallet = /** @class */ (function () {
    function Wallet(init, network) {
        // 全部支持的钱包
        this.wallets = {
            portis: portis,
            metamask: metamask,
            walletlink: walletlink,
            walletconnect: walletconnect,
        };
        // 初始化
        this.use = init;
        // 替换默认类的实例对象
        return new this.wallets[this.use](network);
    }
    return Wallet;
}());
export default Wallet;
