import PropTypes from 'prop-types';
import useInvoiceStore from '../stores/invoiceStore';
const SummaryCard = ({ title, value, icon, color }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex sm:flex-row items-center cursor-pointer">
      <div className={`${color} text-white p-3 rounded-full mr-4`}>
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-sm font-semibold whitespace-nowrap">{value}</p>
      </div>
    </div>
  );

  SummaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
  };
  
  export default SummaryCard;