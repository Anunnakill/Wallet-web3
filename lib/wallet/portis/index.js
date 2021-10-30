import Web3 from "web3";
import PortisProvider from "@portis/web3";
class Portis {
    constructor(network) {
        // 初始化
        this.web3 = {};
        this.wallet = {};
        this.account = "";
        // 初始化钱包
        this.wallet = new PortisProvider("62b0690f-8942-4a25-902b-02a6c77ba9e0", network || "mainnet", {});
    }
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
        }
        catch (error) {
            throw error;
        }
    }
    async logout() {
        await this.wallet.logout();
    }
    // 钱包监听账号变化
    onAccountsChanged(callBack) {
        this.wallet.onActiveWalletChanged(callBack);
    }
    // 钱包监听网络变化
    onChainChanged(callBack) { }
}
export default Portis;
