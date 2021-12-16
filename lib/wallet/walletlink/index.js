import Web3 from "web3";
import config from "./config.json";
import WalletlinkProvider from "walletlink";
class Walletlink {
    constructor({ appName, darkMode, appLogoUrl, network }) {
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
        this.wallet = init.makeWeb3Provider(config[network].http, config[network].id);
    }
    // 钱包执行账号登录
    async login() {
        try {
            // 授权
            await this.wallet.enable();
            // web3实例
            this.web3 = new Web3(this.wallet);
            // 默认账号
            const [account] = await this.web3.eth.getAccounts();
            this.account = account;
            // 授权过程完毕
        }
        catch (error) {
            throw error;
        }
    }
    // 钱包执行账号退出
    async logout() {
        await this.wallet.close();
    }
    // 钱包监听账号变化
    onAccountsChanged(callBack) { }
    // 钱包监听网络变化
    onChainChanged(callBack) { }
}
export default Walletlink;
