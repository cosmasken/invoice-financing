import React from 'react';
import Analytics from '../components/Analytics';
import Navbar from '../components/Navbar';
import FinancingRequests from '../components/FinancingRequests';
import LoanManagement from '../components/LoanManagement';
import TransactionHistory from '../components/TransactionHistory';

const FinancierDashboard = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-light">
    <div className="w-full max-w-6xl p-6">
      <Navbar />
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Financier Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reusable Analytics Component */}
        {/* <div className="col-span-1">
          <Analytics />
        </div> */}

        {/* Financing Requests */}
        <div className="col-span-1">
          <FinancingRequests />
        </div>

        {/* Loan Management */}
        <div className="col-span-1">
          <LoanManagement />
        </div>
      </div>
      {/* Transaction History */}
      <div className="col-span-1">
          <TransactionHistory />
        </div>
    </div>
  </div>
);

export default FinancierDashboard;
