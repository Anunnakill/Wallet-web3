interface Options {
    appName: string;
    darkMode: boolean;
    appLogoUrl: string;
    network: "mainnet" | "ropsten";
}
declare class Walletlink {
    web3: any;
    wallet: any;
    account: any;
    constructor({ appName, darkMode, appLogoUrl, network }: Options);
    login(): Promise<void>;
    logout(): Promise<void>;
    onAccountsChanged(callBack: Function): void;
    onChainChanged(callBack: Function): void;
}
export default Walletlink;
