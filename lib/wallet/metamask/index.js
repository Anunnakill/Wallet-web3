import Web3 from "web3";
class Metamask {
    constructor(network) {
        // 初始化
        this.web3 = {};
        this.wallet = {};
        this.account = "";
        // metamask内置提供者
        const Window = globalThis;
        const ethereum = Window.ethereum;
        // 有可能被其他提供者覆盖
        this.wallet = ethereum.providers?.[1] || ethereum;
    }
    async login() {
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
        }
        catch (error) {
            throw error;
        }
    }
    async logout() { }
    // 钱包监听账号变化
    onAccountsChanged(callBack) {
        this.wallet.on("accountsChanged", ([account]) => callBack(account));
    }
    // 钱包监听网络变化
    onChainChanged(callBack) {
        this.wallet.on("chainChanged", callBack);
    }
}
export default Metamask;
