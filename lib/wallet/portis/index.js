import Web3 from "web3";
import PortisProvider from "@portis/web3";
class Portis {
    constructor({ dappId, network, config = {} }) {
        // 初始化
        this.web3 = {};
        this.wallet = {};
        this.account = "";
        // 初始化钱包
        this.wallet = new PortisProvider(dappId, network, config);
    }
    // 钱包执行账号登录
    async login() {
        try {
            // 授权
            await this.wallet.provider.enable();
            // web3实例
            this.web3 = new Web3(this.wallet.provider);
            // 默认账号
            const [account] = await this.web3.eth.getAccounts();
            this.account = account;
            // 授权过程完毕
            return true;
        }
        catch (error) {
            throw error;
        }
    }
    // 钱包执行账号退出
    async logout() {
        return await this.wallet.logout();
    }
    // 钱包监听账号变化
    onAccountsChanged(callBack) {
        this.wallet.onActiveWalletChanged(callBack);
    }
    // 钱包监听网络变化
    onChainChanged(callBack) { }
}
export default Portis;
