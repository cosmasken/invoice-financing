import PropTypes from 'prop-types';

const FinancingOptions = ({ selectedInvoice, onOpenFinanceModal, onOpenDetailsModal }) => (
  <div className="flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Financing Options</h2>
      {selectedInvoice ? (
        <div>
          <p className="text-gray-600 mb-2">Invoice Amount: ${selectedInvoice.amount.toLocaleString()}</p>
          <p className="text-gray-600 mb-2">Financing Fee: 2%</p>
          <p className="text-gray-600 mb-4">Total Payout: ${(selectedInvoice.amount * 0.98).toLocaleString()}</p>
          <div className="flex space-x-4">
            <button
              className="bg-primary text-white px-6 py-2 rounded-lg shadow-button hover:bg-blue-700"
              onClick={onOpenFinanceModal}
            >
              Finance Now
            </button>
            <button
              className="bg-neutral-medium text-white px-6 py-2 rounded-lg shadow-button hover:bg-neutral-dark"
              onClick={onOpenDetailsModal}
            >
              View Details
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Select an invoice to see financing options</p>
      )}
    </div>
  </div>
);

FinancingOptions.propTypes = {
  selectedInvoice: PropTypes.shape({
    amount: PropTypes.number.isRequired,
  }),
  onOpenFinanceModal: PropTypes.func.isRequired,
  onOpenDetailsModal: PropTypes.func.isRequired,
};

export default FinancingOptions;
