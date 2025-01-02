import { create } from 'zustand';

const useInvoiceStore = create((set) => ({
  invoices: [], // Initially empty invoices array
  addInvoice: (invoice) => set((state) => ({
    invoices: [...state.invoices, invoice],
  })),
  setInvoices: (invoices) => set({ invoices }), // Set all invoices at once
}));

export default useInvoiceStore;
