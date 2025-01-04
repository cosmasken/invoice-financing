const FinancingRequests = () => (
    <div className="bg-white shadow-card rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Financing Requests</h2>
      <div className="space-y-4">
        {/* Financing Request List */}
        {[1, 2, 3].map((request) => (
          <div key={request} className="flex justify-between items-center border-b py-2">
            <div className="text-gray-600">Request #{request}</div>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-button hover:bg-green-700">
                Approve
              </button>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-button hover:bg-red-700">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default FinancingRequests;
  