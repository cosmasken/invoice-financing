import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
// import { xrpClient, ethClient } from '../networks';
import { xrpClient } from '../networks/xrp/xrpClient';
// import { ethClient } from '../networks/eth/ethClient';

const NetworkContext = createContext();

export const useNetwork = () => useContext(NetworkContext);

export const NetworkProvider = ({ children }) => {
  const [network, setNetwork] = useState('xrp'); // Default network (can be dynamic)

 // const networkClient = network === 'xrp' ? xrpClient : ethClient;
 const networkClient = 'xrp';

  return (
    <NetworkContext.Provider value={{ network, setNetwork, networkClient }}>
      {children}
    </NetworkContext.Provider>
  );
};

NetworkProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
