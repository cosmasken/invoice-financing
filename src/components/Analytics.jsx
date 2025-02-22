import PropTypes from 'prop-types';
import useInvoiceStore from '../stores/invoiceStore';
const Analytics = ({ invoices }) => {
  const { totalValue } = useInvoiceStore();
    return (
      <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
        <h2 className="text-xl font-semibold mb-4">Analytics</h2>
        <div className="space-y-4">
          <div className="bg-blue-100 p-3 rounded-md">
            <p className="text-sm text-blue-800">Total Invoices</p>
            <p className="text-2xl font-bold">{invoices.length}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-md">
            <p className="text-sm text-green-800">Total Value</p>
            <p className="text-2xl font-bold">
            ${totalValue.toLocaleString()}
              {/* ${invoices.reduce((sum, invoice) => sum + invoice.amount, 0).toLocaleString()} */}
            </p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-md">
            <p className="text-sm text-yellow-800">Avg. Processing Time</p>
            <p className="text-2xl font-bold">2.5 days</p>
          </div>
        </div>
      </div>
    );
  };

  Analytics.propTypes = {
    invoices: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
  export default Analytics;