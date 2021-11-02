declare class Portis {
    web3: any;
    wallet: any;
    account: any;
    constructor({ dappId, network, config }: any);
    login(): Promise<void>;
    logout(): Promise<void>;
    onAccountsChanged(callBack: Function): void;
    onChainChanged(callBack: Function): void;
}
export default Portis;
