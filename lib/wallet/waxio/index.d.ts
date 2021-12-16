declare class Waxio {
    web3: any;
    wallet: any;
    account: any;
    constructor({ pubKeys, rpcEndpoint, userAccount, tryAutoLogin, }: any);
    login(): Promise<void>;
    logout(): Promise<void>;
    onAccountsChanged(callBack: Function): void;
    onChainChanged(callBack: Function): void;
}
export default Waxio;
