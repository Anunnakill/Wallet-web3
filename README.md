# Wallet

## Introduction

The wallet provider is a plug-in that integrates various blockchain wallet APIs to connect to Dapp (send transactions, personal signatures, deploy contracts).

Now integrated Metamask, Walletconnect, Walletlink, Portis.

Other wallets are being supported one after another (Walletconnect protocol has been adopted by dozens of popular wallets).

The src directory is the source code implementation of the plug-in, and the lib directory is the compiled file (ES2021).

The UI self-service interface has not been provided, and it needs to be implemented by itself (because it is only built with JS, I want to apply it in any JS environment, not in the specified framework).

Support TS, comes with type declaration file.✅

If you feel unsatisfied with the writing, you can modify and build it yourself.😊

## Code Repository

[https://github.com/Anunnakill/Wallet](https://github.com/Anunnakill/Wallet)

## Installation

### npm

```bash
npm i --save blockchain-wallet-provider
```

### yarn

```bash
yarn add blockchain-wallet-provider
```

## Usage

### ES6

```javascript
import Wallet from "blockchain-wallet-provider";
```

```javascript
// The first parameter: Wallet to use.
// metamask or walletconnect or walletlink or portis (Note that the initial letter is lowercase).

// The second parameter: Network to use.
// If it is an Ethereum wallet, you can choose mainnet or ropsten.
// If it is a wallet of another chain, do not need to fill in.
// return { web3, wallet, account, login, logout }
const wallet = new Wallet("metamask", "mainnet");

// Use try catch
try {
  // The login method is an async function.
  await wallet.login();

  // If the authorized login is successful:👇

  // web3 object (instantiated).
  console.log(wallet.web3);

  // Wallet provider.
  console.log(wallet.wallet);

  // Currently authorized account address.
  console.log(wallet.account);

  //
} catch (err) {
  // Catch all exception errors here.
  // If the authorization login fails.
  // web3: {}
  // account: ""
}
```

### Methods

```bash
login()
```

Authorized login (Async function).

```javascript
await wallet.login();
```

```bash
logout()
```

Log out (the browser metamask plug-in needs to be manually disconnected).

```javascript
await wallet.logout();
```

### Events

```bash
onAccountsChanged(callBack)
```

The wallet monitors account changes.

```javascript
wallet.onAccountsChanged(account => {
  // New account
  console.log(account);
});
```

```bash
onChainChanged(callBack)
```

The wallet monitors network changes.

```javascript
wallet.onChainChanged(chainId => {
  // New network
  console.log(chainId);
});
```

### ❗️❗️Official events support

[Walletconnect:] onAccountsChanged(), onChainChanged()
[Metamask:] onAccountsChanged(), onChainChanged()
[Portis:] onAccountsChanged()
[Walletlink:] No (The official has not provided any monitoring events.)

## Supported Wallets & Integrations

1. [Portis](https://portis.io)
2. [Metamask](https://metamask.io)
3. [Walletlink](https://walletlink.org)
4. [Walletconnect](https://walletconnect.com)
