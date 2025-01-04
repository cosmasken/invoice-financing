import PropTypes from 'prop-types';


const InvoiceDetailsModal = ({ selectedInvoice, onClose }) => (
    <div className="flex items-center justify-center min-h-screen bg-neutral-light fixed inset-0 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Invoice Details</h2>
        {selectedInvoice ? (
          <div>
            <p className="text-gray-600 mb-2">Invoice Number: {selectedInvoice.id}</p>
            <p className="text-gray-600 mb-2">Invoice Date: {new Date(selectedInvoice.date).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-4">Due Date: {new Date(selectedInvoice.dueDate).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-2">Description: {selectedInvoice.description}</p>
            <p className="text-gray-600 mb-2">Amount: ${selectedInvoice.amount.toLocaleString()}</p>
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
  
  InvoiceDetailsModal.propTypes = {
    selectedInvoice: PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
    onClose: PropTypes.func.isRequired,
  };
  
  export default InvoiceDetailsModal;
  