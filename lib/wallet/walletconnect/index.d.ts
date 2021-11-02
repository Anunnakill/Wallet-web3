declare class Walletconnect {
    web3: any;
    wallet: any;
    account: any;
    constructor({ rpc }?: any);
    login(): Promise<void>;
    logout(): Promise<void>;
    onAccountsChanged(callBack: Function): void;
    onChainChanged(callBack: Function): void;
}
export default Walletconnect;
