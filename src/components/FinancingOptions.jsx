import PropTypes from 'prop-types';
import useInvoiceStore from '../stores/invoiceStore';

const FinancingOptions = ({ selectedInvoice }) => (
  <div className="bg-white shadow-card rounded-lg p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Financing Options</h2>
    {selectedInvoice ? (
      <div>
        <p className="text-gray-600 mb-2">Invoice Amount: ${selectedInvoice.amount.toLocaleString()}</p>
        <p className="text-gray-600 mb-2">Financing Fee: 2%</p>
        <p className="text-gray-600 mb-4">Total Payout: ${(selectedInvoice.amount * 0.98).toLocaleString()}</p>
        <div className="flex space-x-4">
          <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-button hover:bg-blue-700">
            Finance Now
          </button>
          <button className="bg-neutral-medium text-white px-6 py-2 rounded-lg shadow-button hover:bg-neutral-dark">
            View Details
          </button>
        </div>
      </div>
    ) : (
      <p className="text-gray-600">Select an invoice to see financing options</p>
    )}
  </div>
);

  
FinancingOptions.propTypes = {
  selectedInvoice: PropTypes.shape({
    amount: PropTypes.number.isRequired,
  }),
};

export default FinancingOptions;