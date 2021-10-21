declare class Walletlink {
    web3: any;
    wallet: any;
    account: any;
    constructor(network: "mainnet" | "ropsten");
    login(): Promise<void>;
    logout(): Promise<void>;
    onAccountsChanged(callBack: Function): void;
    onChainChanged(callBack: Function): void;
}
export default Walletlink;
