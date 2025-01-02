import SummaryCard from "./SummaryCard";
import { FiDollarSign, FiClock, FiPieChart } from 'react-icons/fi';
import PropTypes from 'prop-types';
import useInvoiceStore from '../stores/invoiceStore';
const DashboardSummary = ({ invoices }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SummaryCard 
        title="Total Outstanding" 
        value={`$${invoices.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}`}
        icon={<FiDollarSign className="w-6 h-6" />}
        color="bg-blue-500"
      />
      <SummaryCard 
        title="Average Time to Pay" 
        value="15 days"
        icon={<FiClock className="w-6 h-6" />}
        color="bg-green-500"
      />
      <SummaryCard 
        title="Financing Rate" 
        value="2.5%"
        icon={<FiPieChart className="w-6 h-6" />}
        color="bg-purple-500"
      />
    </div>
  );
  DashboardSummary.propTypes = {
    invoices: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
  export default DashboardSummary;