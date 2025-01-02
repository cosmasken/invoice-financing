import { FiSettings } from 'react-icons/fi';
import useInvoiceStore from '../stores/invoiceStore';
const Navbar = () => (
  <nav className="bg-white shadow-md py-4 px-6 rounded-lg">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">Pochi Finance</h1>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800 relative group">
          <FiSettings className="w-6 h-6" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Settings
          </span>
        </button>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </nav>
);


export default Navbar;