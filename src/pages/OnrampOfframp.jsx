import { useState } from 'react';

const OnrampOfframp = () => {
  const [tab, setTab] = useState('onramp'); // Switch between onramp and offramp
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    if (!amount) {
      newErrors.amount = 'Amount is required.';
    } else if (isNaN(amount) || parseFloat(amount) <= 0) {
      newErrors.amount = 'Please enter a valid positive number.';
    }
    if (!walletAddress) newErrors.walletAddress = 'Wallet address is required.';
    if (!paymentMethod) newErrors.paymentMethod = 'Please select a payment method.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      alert(
        tab === 'onramp'
          ? 'Funds added to wallet successfully!'
          : 'Funds withdrawn from wallet successfully!'
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral.light">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {tab === 'onramp' ? 'Onramp Funds' : 'Offramp Funds'}
        </h2>

        {/* Tab Selector */}
        <div className="flex space-x-4 justify-center mb-6">
          <button
            onClick={() => setTab('onramp')}
            className={`${
              tab === 'onramp' ? 'bg-primary text-white' : 'bg-white text-primary'
            } p-2 rounded-md border`}
          >
            Onramp
          </button>
          <button
            onClick={() => setTab('offramp')}
            className={`${
              tab === 'offramp' ? 'bg-primary text-white' : 'bg-white text-primary'
            } p-2 rounded-md border`}
          >
            Offramp
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm text-neutral.dark">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter amount"
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
          </div>

          <div>
            <label htmlFor="walletAddress" className="block text-sm text-neutral.dark">
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter wallet address"
            />
            {errors.walletAddress && (
              <p className="text-red-500 text-sm">{errors.walletAddress}</p>
            )}
          </div>

          <div>
            <label htmlFor="paymentMethod" className="block text-sm text-neutral.dark">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select payment method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Crypto">Crypto</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="bg-secondary text-white p-2 rounded-md w-full"
          >
            {tab === 'onramp' ? 'Add Funds' : 'Withdraw Funds'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnrampOfframp;
