const LoanManagement = () => (
    <div className="bg-white shadow-card rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Loan Management</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((loan) => (
          <div key={loan} className="flex justify-between items-center border-b py-2">
            <div className="text-gray-600">Loan #{loan}</div>
            <div className="text-gray-600">Status: Active</div>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-button hover:bg-blue-700">
                View Details
              </button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-button hover:bg-orange-700">
                Adjust Terms
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default LoanManagement;
  