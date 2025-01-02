import { useState } from 'react';
import RecentActivity from './components/RecentActivity';
import DashboardSummary from './components/DashboardSummary';
import Analytics from './components/Analytics';
import FinancingOptions from './components/FinancingOptions';
import InvoiceList from './components/InvoiceList';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';

const InvoiceFinancingApp = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="max-w-4xl w-full px-6">
      <Navbar />
      <div className="flex-grow flex justify-center">
        <div className="container max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <DashboardSummary invoices={invoices} />
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <InvoiceList 
                  invoices={invoices} 
                  onSelectInvoice={setSelectedInvoice} 
                  onNewInvoice={() => setShowNewInvoiceModal(true)}
                />
                <FinancingOptions selectedInvoice={selectedInvoice} />
              </div>
            </div>
            <div>
              <Analytics invoices={invoices} />
              <RecentActivity className="mt-8" />
            </div>
          </div>
        </div>
      </div>
      {showNewInvoiceModal && (
        <NewInvoiceModal onClose={() => setShowNewInvoiceModal(false)} />
      )}
    </div>
    </div>
  );
};

const NewInvoiceModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">New Invoice</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customer">
            Customer
          </label>
          <input 
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" 
            id="customer" 
            type="text" 
            placeholder="Customer name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input 
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" 
            id="amount" 
            type="number" 
            placeholder="Invoice amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
            Due Date
          </label>
          <input 
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" 
            id="dueDate" 
            type="date"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Create Invoice
          </button>
        </div>
      </form>
    </div>
  </div>
);

NewInvoiceModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default InvoiceFinancingApp;
