import { FiSettings } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 rounded-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">Pochi Finance</h1>
        
        {/* Mobile Menu Icon */}
        <button
          className="text-gray-600 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className="w-6 h-6" />
        </button>
        
        {/* Menu (Desktop and Mobile) */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center space-x-4`}
        >
          <button className="text-gray-600 hover:text-gray-800 relative group">
            <FiSettings className="w-6 h-6" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Settings
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer"
              onClick={() => setProfileOpen(!profileOpen)}
            ></div>
            {profileOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-2 w-48">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <button
                  onClick={() => alert("Logout")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
