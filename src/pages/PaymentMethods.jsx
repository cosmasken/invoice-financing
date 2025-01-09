import { useState } from 'react';
import SwalAlert from '../components/SwalAlert';

const PaymentMethods = () => {
  const [methods, setMethods] = useState([
    { id: 1, type: 'Visa', details: 'Ending in 1234' },
    { id: 2, type: 'Crypto', details: 'BTC Wallet: xyz123' },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMethodType, setNewMethodType] = useState('');
  const [details, setDetails] = useState('');

  const handleAddMethod = () => {
    if (!newMethodType || !details) {
      SwalAlert({
        variant: 'error',
        title: 'Missing Information',
        text: 'Please select a payment method type and provide details.',
      });
      return;
    }

    const newMethod = {
      id: Date.now(),
      type: newMethodType,
      details,
    };

    setMethods((prev) => [...prev, newMethod]);
    setShowAddForm(false);
    setNewMethodType('');
    setDetails('');

    SwalAlert({
      variant: 'success',
      title: 'Payment Method Added',
      text: `Successfully added ${newMethodType}.`,
    });
  };

  const handleRemoveMethod = (id) => {
    SwalAlert({
      variant: 'warning',
      title: 'Remove Payment Method',
      text: 'Are you sure you want to remove this payment method?',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it',
    }).then((result) => {
      if (result.isConfirmed) {
        setMethods((prev) => prev.filter((method) => method.id !== id));
        SwalAlert({
          variant: 'success',
          title: 'Removed!',
          text: 'Payment method has been removed.',
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-neutral-light p-6">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Manage Payment Methods</h2>
        <div className="space-y-4">
          {methods.map((method) => (
            <div
              key={method.id}
              className="flex justify-between items-center border rounded-md p-4 bg-neutral-100"
            >
              <div>
                <p className="font-semibold">{method.type}</p>
                <p className="text-gray-500">{method.details}</p>
              </div>
              <button
                onClick={() => handleRemoveMethod(method.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          {showAddForm ? (
            <div className="space-y-4 bg-neutral-100 p-4 rounded-md">
              <div>
                <label className="block text-sm text-neutral-dark mb-1">Payment Method Type</label>
                <select
                  value={newMethodType}
                  onChange={(e) => setNewMethodType(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select a payment method</option>
                  <option value="Visa">Visa</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Fiat/Mobile Money">Fiat/Mobile Money</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-neutral-dark mb-1">Details</label>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder={
                    newMethodType === 'Visa'
                      ? 'Enter card details (e.g., last four digits)'
                      : newMethodType === 'Crypto'
                      ? 'Enter wallet address'
                      : 'Enter account or mobile number'
                  }
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="bg-neutral-light text-neutral-dark px-4 py-2 rounded-lg shadow-md w-full"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMethod}
                  className="bg-primary text-white px-4 py-2 rounded-lg shadow-md w-full"
                >
                  Add
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full bg-primary text-white py-2 rounded-lg shadow-md hover:bg-primary-dark"
            >
              Add New Payment Method
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
