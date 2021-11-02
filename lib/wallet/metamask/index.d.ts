declare class Metamask {
    web3: any;
    wallet: any;
    account: any;
    constructor();
    login(): Promise<void>;
    logout(): Promise<void>;
    onAccountsChanged(callBack: Function): void;
    onChainChanged(callBack: Function): void;
}
export default Metamask;
