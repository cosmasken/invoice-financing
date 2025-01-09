import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNetwork } from './NetworkContext'; // Import the NetworkProvider context

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const { network, networkClient } = useNetwork(); // Access the current network and client
  const [wallet, setWallet] = useState(null);  // Store the current wallet

  useEffect(() => {
    if (networkClient) {
      // If networkClient is set (either xrpClient or ethClient), initialize wallet logic
      const initializeWallet = async () => {
        if (network === 'xrp') {
          const walletData = networkClient.createWallet();  // Using xrpClient's createWallet method
          setWallet(walletData);  // Set the wallet object to state
        } else {
          // For Ethereum or other networks, implement respective logic
          // Example: const walletData = ethClient.createWallet();
        }
      };
      initializeWallet();
    }
  }, [network, networkClient]);

  const sendXRP = async (fromSecret, toAddress, amount) => {
    if (network === 'xrp' && networkClient) {
      const result = await networkClient.sendXRP(fromSecret, toAddress, amount);
      return result;
    }
    // Add logic for sending other types of currency (e.g., Ethereum) if necessary
  };

  const mintInvoice = async (amount) => {
    if (network === 'xrp' && networkClient) {
      const result = await networkClient.mintInvoice(amount);
      return result;
    }
  };

  return (
    <WalletContext.Provider value={{ wallet, sendXRP, mintInvoice }}>
      {children}
    </WalletContext.Provider>
  );
};

WalletProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
