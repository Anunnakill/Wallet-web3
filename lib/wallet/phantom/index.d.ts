declare class Phantom {
    web3: any;
    wallet: any;
    account: any;
    constructor();
    login(): Promise<boolean>;
    logout(): Promise<any>;
    onAccountsChanged(callBack: Function): void;
    onChainChanged(callBack: Function): void;
}
export default Phantom;
