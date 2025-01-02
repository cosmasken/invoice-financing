import PropTypes from 'prop-types';
import useInvoiceStore from '../stores/invoiceStore';

const InvoiceList = ({ invoices, onSelectInvoice, onNewInvoice }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Invoices</h2>
          <button 
            onClick={onNewInvoice}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            New Invoice
          </button>
        </div>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {invoices.map((invoice) => (
            <div 
              key={invoice.id} 
              className="border p-3 rounded-md cursor-pointer hover:bg-gray-50"
              onClick={() => onSelectInvoice(invoice)}
            >
              <p className="font-medium">{invoice.customer}</p>
              <p className="text-sm text-gray-600">${invoice.amount.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Due: {invoice.dueDate}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  InvoiceList.propTypes = {
    invoices: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        customer: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        dueDate: PropTypes.string.isRequired,
      })
    ).isRequired,
    onSelectInvoice: PropTypes.func.isRequired,
    onNewInvoice: PropTypes.func.isRequired,
  };
  
  export default InvoiceList;