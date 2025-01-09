import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-light">
      <div className="bg-white shadow-card rounded-lg p-8 w-full max-w-md text-center">
        <img
          src="/public/vite.svg"
          alt="Not Found Illustration"
          className="w-32 h-32 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for pages..."
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Redirect to Home */}
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-button mb-4"
        >
          Go Back Home
        </button>

        {/* Helpful Links */}
        <div>
          <a
            href="/dashboard"
            className="block text-blue-500 hover:underline mb-2"
          >
            Dashboard
          </a>
          {/* <a
            href="/auth"
            className="block text-blue-500 hover:underline"
          >
            Login
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
