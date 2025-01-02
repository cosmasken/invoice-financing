import { create } from 'zustand';

const useInvoiceStore = create((set) => ({
  invoices: [], // List of all invoices
  totalValue: 15000, // Total value of invoices
  preferredFinancingRate: 2.5, // Default financing rate (percentage)
  paymentType: 'XRP', // Default payment type (e.g., 'XRP', 'USD', etc.)
  creditScore: 700, // Default credit score of the user
  financingStatus: 'pending', // Status of financing request (e.g., 'pending', 'approved', 'denied')
  
  // Getter and setter for invoices
  addInvoice: (invoice) => set((state) => ({
    invoices: [...state.invoices, invoice],
    totalValue: state.totalValue + invoice.amount, // Update total value when a new invoice is added
  })),
  setInvoices: (invoices) => set({ 
    invoices,
    totalValue: invoices.reduce((sum, invoice) => sum + invoice.amount, 0), // Recalculate total value
  }),

  // Getter and setter for total value of invoices
  setTotalValue: (value) => set({ totalValue: value }),
  
  // Getter and setter for preferred financing rate
  setPreferredFinancingRate: (rate) => set({ preferredFinancingRate: rate }),

  // Getter and setter for payment type
  setPaymentType: (type) => set({ paymentType: type }),

  // Getter and setter for credit score
  setCreditScore: (score) => set({ creditScore: score }),

  // Getter and setter for financing status
  setFinancingStatus: (status) => set({ financingStatus: status }),
}));

export default useInvoiceStore;
