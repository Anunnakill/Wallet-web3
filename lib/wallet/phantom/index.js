import * as Web3 from "@solana/web3.js";
class Phantom {
    constructor() {
        // 初始化
        this.web3 = {};
        this.wallet = {};
        this.account = "";
        // 插件钱包功能提供者
        const Window = globalThis;
        this.wallet = Window.phantom?.solana;
    }
    // 钱包执行账号登录
    async login() {
        try {
            // 授权
            const res = await this.wallet.request({ method: "connect" });
            // 默认账号
            this.account = res.publicKey.toString();
            // web3实例
            this.web3 = Web3;
            // 授权过程完毕
        }
        catch (error) {
            throw error;
        }
    }
    // 钱包执行账号退出
    async logout() {
        await this.wallet.request({ method: "disconnect" });
    }
    // 钱包监听账号变化
    onAccountsChanged(callBack) { }
    // 钱包监听网络变化
    onChainChanged(callBack) { }
}
export default Phantom;
