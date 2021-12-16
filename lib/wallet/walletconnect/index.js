import Web3 from "web3";
import json from "./rpc.json";
import WalletConnectProvider from "@walletconnect/web3-provider";
class Walletconnect {
    constructor({ rpc = {} } = {}) {
        // 初始化
        this.web3 = {};
        this.wallet = {};
        this.account = "";
        // 初始化钱包
        this.wallet = new WalletConnectProvider({
            rpc: {
                ...json,
                ...rpc,
            },
        });
    }
    // 钱包执行账号登录
    async login() {
        try {
            // 授权
            const [account] = await this.wallet.enable();
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
    // 钱包执行账号退出
    async logout() {
        await this.wallet.disconnect();
    }
    // 钱包监听账号变化
    onAccountsChanged(callBack) {
        this.wallet.on("accountsChanged", ([account]) => callBack(account));
    }
    // 钱包监听网络变化
    onChainChanged(callBack) {
        this.wallet.on("chainChanged", callBack);
    }
}
export default Walletconnect;
