import { useState } from 'react';

const SecuritySettings = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handlePasswordChange = () => {
    if (password === confirmPassword) {
      alert('Password updated successfully.');
    } else {
      alert('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-light p-6">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Security Settings</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Change Password</h3>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <button
              onClick={handlePasswordChange}
              className="mt-4 bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark"
            >
              Update Password
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Two-Factor Authentication</h3>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={twoFactorEnabled}
                onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className="w-5 h-5"
              />
              <span className="text-gray-600">Enable Two-Factor Authentication</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
