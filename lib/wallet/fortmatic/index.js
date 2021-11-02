import Web3 from "web3";
import FortmaticProvider from "fortmatic";
class Fortmatic {
    constructor({ apiKey, network }) {
        // 初始化
        this.web3 = {};
        this.wallet = {};
        this.account = "";
        // 初始化钱包
        this.wallet = new FortmaticProvider(apiKey, network);
    }
    async login() {
        try {
            // 授权
            await this.wallet.user.login();
            // web3实例
            this.web3 = new Web3(this.wallet.getProvider());
            // 默认账号
            const [account] = await this.web3.eth.getAccounts();
            this.account = account;
            // 授权过程完毕
        }
        catch (error) {
            throw error;
        }
    }
    async logout() {
        await this.wallet.user.logout();
    }
    // 钱包监听账号变化
    onAccountsChanged(callBack) { }
    // 钱包监听网络变化
    onChainChanged(callBack) { }
}
export default Fortmatic;
