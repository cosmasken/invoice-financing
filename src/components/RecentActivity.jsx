import useInvoiceStore from '../stores/invoiceStore';
const RecentActivity = () => (
    <div className=" shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-2">
        <div className="bg-gray-100 p-2 rounded-lg">
        <li className="text-sm">Invoice #1234 financed</li>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg">
        <li className="text-sm">New customer added: ABC Corp</li>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg">
        <li className="text-sm">Payment received for Invoice #9876</li>
        </div> 
      </ul>
    </div>
  );
  
export default RecentActivity;