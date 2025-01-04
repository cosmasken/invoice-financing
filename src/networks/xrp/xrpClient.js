import { Client } from 'xrpl';

export const xrpClient = new Client('wss://s.altnet.rippletest.net:51233'); // Testnet

// Connect to the XRP network
export const connectXRP = async () => {
  await xrpClient.connect();
};

export const createWallet = async () => {
  const fund_result = await client.fundWallet()
  const wallet = fund_result.wallet
}

//   // Create a wallet and fund it with the Testnet faucet:
//   const fund_result = await client.fundWallet()
//   const test_wallet = fund_result.wallet
  // Create a wallet and fund it with the Testnet faucet

// Disconnect from the network
export const disconnectXRP = async () => {
  await xrpClient.disconnect();
};
