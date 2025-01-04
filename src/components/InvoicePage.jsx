import  { useState } from 'react';
import FinancingOptions from './FinancingOptions';
import FinanceNowModal from './FinanceNowModal';
import InvoiceDetailsModal from './InvoiceDetailsModal';

const InvoicePage = () => {
  const [selectedInvoice, setSelectedInvoice] = useState({
    id: 'INV123',
    date: '2024-01-01',
    dueDate: '2024-01-15',
    description: 'Web development services',
    amount: 1000,
  });

  const [isFinanceModalOpen, setIsFinanceModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const openFinanceModal = () => {
    setIsFinanceModalOpen(true);
  };

  const openDetailsModal = () => {
    setIsDetailsModalOpen(true);
  };

  const closeFinanceModal = () => {
    setIsFinanceModalOpen(false);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
  };

  return (
    <div>
      <FinancingOptions
        selectedInvoice={selectedInvoice}
        onOpenFinanceModal={openFinanceModal}
        onOpenDetailsModal={openDetailsModal}
      />

      {isFinanceModalOpen && (
        <FinanceNowModal selectedInvoice={selectedInvoice} onClose={closeFinanceModal} />
      )}

      {isDetailsModalOpen && (
        <InvoiceDetailsModal selectedInvoice={selectedInvoice} onClose={closeDetailsModal} />
      )}
    </div>
  );
};

export default InvoicePage;
