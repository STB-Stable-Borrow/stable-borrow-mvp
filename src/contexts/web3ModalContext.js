import { createContext, useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import { providerOptions } from "xdcpay-connect";
import Web3Modal from "web3modal";

export const Web3ModalContext = createContext({
  connect: () => {},
  disconnect: () => {},
  handleClick: () => {},
  web3: null,
  account: null,
  chainId: null,
  networkId: null,
  connected: false,
  isClicked: false,
});

const Web3ModalProvider = ({ children }) => {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [networkId, setNetworkId] = useState(null);
  const [connected, setConnected] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  //create and save new web3Modal onload
  useEffect(() => {
    const _web3Modal = new Web3Modal({
      cacheProvider: true, // incase there's more than one wallet(no need for cacheProvider)
      providerOptions, // for XDCPay
      disableInjectedProvider: false, //For Metamask
      theme: "dark", // For dark theme todo: customise theme,
    });
    setWeb3Modal(_web3Modal);
  }, []);

  //initialize and save web3 from _provider
  const web3Init = (_provider) => {
    let provider;
    if (typeof _provider === "string") {
      if (_provider.includes("wss")) {
        provider = new Web3.providers.WebsocketProvider(_provider);
      } else {
        provider = new Web3.providers.HttpProvider(_provider);
      }
    } else {
      window.alert(
        "Error while connecting to wallet provider. Try again later"
      );
    }
    const _web3 = new Web3(provider);
    setWeb3(_web3);
    return _web3;
  };

  //clear all saved instances
  const resetConnection = useCallback(() => {
    setWeb3(null);
    setAccount(null);
    setChainId(null);
    setNetworkId(null);
    setConnected(false);
  }, []);

  //handles in-wallet actions
  const subscribeProvider = useCallback(
    async (_provider, _web3) => {
      if (!_provider.on) return;

      _provider.on("close", () => {
        console.log("connection closed");
        resetConnection();
      });
      _provider.on("accountsChanged", async (accounts) => {
        console.log("Account changed");
        setAccount(_web3.utils.toChecksumAddress(accounts[0]));
      });
      _provider.on("chainChanged", async (chainId) => {
        console.log("Chain changed: ", chainId);
        const networkId = await _web3.eth.net.getId();
        setChainId(Number(chainId));
        setNetworkId(Number(networkId));
      });

      _provider.on("networkChanged", async (networkId) => {
        console.log("Network changed: ", networkId);
        const chainId = await _web3.eth.getChainId();
        setChainId(Number(chainId));
        setNetworkId(Number(networkId));
      });
    },
    [resetConnection]
  );

  // connects wallet
  const connect = useCallback(async () => {
    // connect web3modal and get provider
    if (!web3Modal) return;
    const _provider = await web3Modal.connect();
    if (_provider === null) return;
    //initialize web3 with provider
    const _web3 = await web3Init(_provider);
    //monitor wallet actions
    await subscribeProvider(_provider, _web3);
    //saved needed instances
    const account = await _web3.eth.getAccounts()[0]; //first account connected
    const _account = _web3.utils.toChecksumAddress(account[0]); //get address
    const _networkId = await _web3.eth.net.getId(); // get networkid
    const _chainId = await _web3.eth.getChainId(); // get chainid
    setAccount(_account);
    setNetworkId(Number(_networkId));
    setChainId(Number(_chainId));
    setConnected(true);
  }, [web3Modal, subscribeProvider]);

  //   useEffect(() => {
  //     if (web3Modal) {
  //       connect();
  //     }
  //   }, [web3Modal, connect]);

  //disconnects wallet
  const disconnect = useCallback(async () => {
    if (web3 && web3.currentProvider) {
      const _provider = web3.currentProvider;
      if (_provider.close) await _provider.close();
    }
    if (web3Modal) {
      await web3Modal.clearCachedProvider();
    } //clear cachedProvider even if it's not beign used
    resetConnection();
  }, [web3Modal, web3, resetConnection]);

  //handles web3modal popup
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
    console.log("workiiiing");
  };

  return (
    <Web3ModalContext.Provider
      value={{
        connect,
        disconnect,
        handleClick,
        web3,
        account,
        networkId,
        chainId,
        connected,
        isClicked,
      }}
    >
      {children}
    </Web3ModalContext.Provider>
  );
};

export default Web3ModalProvider;
