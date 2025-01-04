import PropTypes from 'prop-types';

const FinanceNowModal = ({ selectedInvoice, onClose }) => (
    <div className="flex items-center justify-center min-h-screen bg-neutral-light fixed inset-0 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Financing Now</h2>
        {selectedInvoice ? (
          <div>
            <p className="text-gray-600 mb-2">Invoice Amount: ${selectedInvoice.amount.toLocaleString()}</p>
            <p className="text-gray-600 mb-2">Financing Fee: 2%</p>
            <p className="text-gray-600 mb-4">Total Payout: ${(selectedInvoice.amount * 0.98).toLocaleString()}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-button hover:bg-green-700 mb-4">
              Confirm Financing
            </button>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-button hover:bg-red-700"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No invoice selected</p>
        )}
      </div>
    </div>
  );
  
  FinanceNowModal.propTypes = {
    selectedInvoice: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }),
    onClose: PropTypes.func.isRequired,
  };
  
  export default FinanceNowModal;
  