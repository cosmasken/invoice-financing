import { useNavigate } from 'react-router-dom';

const LogoutConfirmation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token here
    navigate('/login');
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-lg font-semibold mb-4 text-primary">Confirm Logout</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700"
          >
            Logout
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
