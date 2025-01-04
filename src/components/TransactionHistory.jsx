const TransactionHistory = () => (
    <div className="bg-white shadow-card rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Transaction History</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((transaction) => (
          <div key={transaction} className="flex justify-between items-center border-b py-2">
            <div className="text-gray-600">Transaction #{transaction}</div>
            <div className="text-gray-600">Amount: ${transaction * 1000}</div>
            <div className="text-gray-600">Status: Completed</div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default TransactionHistory;
  