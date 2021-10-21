declare class Metamask {
    web3: any;
    wallet: any;
    account: any;
    constructor(network?: string);
    login(): Promise<void>;
    logout(): Promise<void>;
}
export default Metamask;
