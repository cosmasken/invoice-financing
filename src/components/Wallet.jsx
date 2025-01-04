import React, { useState } from 'react';

// Static Data for Networks and Currencies
const currencies = [
  { name: 'HBAR', networks: ['Hedera Mainnet', 'Hedera Testnet'] },
  { name: 'XRP', networks: ['XRP Ledger'] },
];

const Wallet = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [wallets, setWallets] = useState([]);

  // Function to handle wallet creation
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
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral.light">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
    <div className="bg-white shadow-card rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Wallets</h2>

      {/* Wallet Creation Section */}
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Select Currency</label>
          <select
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            value={selectedCurrency}
            onChange={(e) => {
              setSelectedCurrency(e.target.value);
              setSelectedNetwork('');
            }}
          >
            <option value="">-- Select Currency --</option>
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCurrency && (
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Select Network</label>
            <select
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
              value={selectedNetwork}
              onChange={(e) => setSelectedNetwork(e.target.value)}
            >
              <option value="">-- Select Network --</option>
              {currencies
                .find((currency) => currency.name === selectedCurrency)
                .networks.map((network) => (
                  <option key={network} value={network}>
                    {network}
                  </option>
                ))}
            </select>
          </div>
        )}

        <button
          onClick={handleAddWallet}
          className="bg-primary text-white px-6 py-2 rounded-lg shadow-button hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!selectedCurrency || !selectedNetwork}
        >
          Add Wallet
        </button>
      </div>

      {/* Wallets List Section */}
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
    </div>
  );
};

export default Wallet;
