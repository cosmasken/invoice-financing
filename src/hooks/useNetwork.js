import { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const useNetwork = () => {
  const { network, setNetwork, networkClient } = useContext(NetworkContext);

  const mintInvoice = async (invoiceData) => {
    if (network === 'xrp') {
      return networkClient.mintNFT(invoiceData); // XRP minting logic
    }
    // Add Ethereum or other network minting logic
  };

  return { network, mintInvoice };
};

export default useNetwork;
