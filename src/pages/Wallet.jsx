import React, { useState } from 'react';
import { xrpClient } from '../networks/xrp/xrpClient';
import swalalert from '../components/SwalAlert'; // Assuming reusable SwalAlert component exists

// Static Data for Currencies and Networks
const currencies = [
  { name: 'HBAR', networks: ['Hedera Mainnet', 'Hedera Testnet'] },
  { name: 'XRP', networks: ['XRP Ledger'] },
];

const Wallet = () => {
  const [walletOption, setWalletOption] = useState(''); // "recover" or "create"
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [seedPhrase, setSeedPhrase] = useState('');
  const [wallets, setWallets] = useState([]);

  const handleAddWallet = () => {
    if (selectedCurrency && selectedNetwork) {
      const newWallet = {
        id: Date.now(),
        currency: selectedCurrency,
        network: selectedNetwork,
        address: `${selectedCurrency.toLowerCase()}_${Date.now().toString(36)}`,
        balance: Math.random().toFixed(2), // Static balance example
      };
      setWallets([...wallets, newWallet]);
      swalalert('Wallet Added Successfully', 'success');
    }
  };

  const handleRecoverWallet = () => {
    if (seedPhrase.trim() === '') {
      swalalert('Please provide a valid seed phrase.', 'error');
      return;
    }
    const recoveredWallet = {
      id: Date.now(),
      currency: selectedCurrency,
      network: selectedNetwork,
      address: `${selectedCurrency.toLowerCase()}_recovered_${Date.now().toString(36)}`,
      balance: Math.random().toFixed(2),
    };
    setWallets([...wallets, recoveredWallet]);
    swalalert('Wallet Recovered Successfully', 'success');
  };

  const xrpTest = () => {
    const wallet = xrpClient.getWalletFromSecret();
    console.log(wallet.classicAddress);

    const balance = xrpClient.checkBalance(wallet.classicAddress);
    console.log('balance is', balance);
    swalalert(`XRP Wallet Created: ${wallet.classicAddress}`, 'info');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral.light">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Wallets</h2>

        {/* Wallet Flow Selector */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Select Option</label>
          <select
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            value={walletOption}
            onChange={(e) => setWalletOption(e.target.value)}
          >
            <option value="">-- Select Option --</option>
            <option value="recover">Recover Wallet</option>
            <option value="create">Create New Wallet</option>
          </select>
        </div>

        {/* Conditional Inputs */}
        {walletOption === 'recover' && (
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Seed Phrase</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
              value={seedPhrase}
              onChange={(e) => setSeedPhrase(e.target.value)}
              placeholder="Enter your seed phrase here..."
            />
            <button
              onClick={handleRecoverWallet}
              className="mt-4 bg-primary text-white px-6 py-2 rounded-lg shadow-button hover:bg-blue-700"
              disabled={!selectedCurrency || !selectedNetwork}
            >
              Recover Wallet
            </button>
          </div>
        )}

        {walletOption === 'create' && (
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Generated Seed Phrase</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
              value="example seed phrase here" // Placeholder
              readOnly
            />
            <button
              className="mt-4 bg-primary text-white px-6 py-2 rounded-lg shadow-button hover:bg-blue-700"
              onClick={xrpTest}
            >
              Create XRP Wallet
            </button>
          </div>
        )}

        {/* Wallet List */}
        {wallets.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Wallets</h3>
            <ul className="space-y-4">
              {wallets.map((wallet) => (
                <li
                  key={wallet.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-800 font-medium">
                      {wallet.currency} ({wallet.network})
                    </p>
                    <p className="text-gray-600 text-sm">Address: {wallet.address}</p>
                    <p className="text-gray-600 text-sm">Balance: {wallet.balance} {wallet.currency}</p>
                  </div>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-button hover:bg-red-700"
                    onClick={() =>
                      setWallets(wallets.filter((w) => w.id !== wallet.id))
                    }
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-600">No wallets added yet. Add one to get started!</p>
        )}
      </div>
    </div>
  );
};

export default Wallet;
