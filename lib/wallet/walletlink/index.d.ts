declare class Walletlink {
    web3: any;
    wallet: any;
    account: any;
    constructor(network: "mainnet" | "ropsten");
    login(): Promise<void>;
    logout(): Promise<void>;
}
export default Walletlink;
