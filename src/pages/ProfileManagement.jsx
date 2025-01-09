import { useState } from 'react';

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!profile.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!profile.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!profile.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Enter a valid email address.';
    if (!profile.phone.match(/^\d{10,15}$/)) newErrors.phone = 'Enter a valid phone number.';
    if (editMode && profile.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Profile Management</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm text-neutral-dark">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={profile.firstName}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.firstName ? 'border-red-500' : ''}`}
              placeholder="Enter your first name"
              disabled={!editMode}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm text-neutral-dark">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={profile.lastName}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Enter your last name"
              disabled={!editMode}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-neutral-dark">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email address"
              disabled={!editMode}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-neutral-dark">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="Enter your phone number"
              disabled={!editMode}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          {editMode && (
            <div>
              <label htmlFor="password" className="block text-sm text-neutral-dark">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={profile.password}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-md ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Enter a new password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          )}
          <div className="mt-4 flex space-x-4">
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-primary text-white p-2 rounded-md w-full"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-neutral-light text-neutral-dark p-2 rounded-md w-full"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="bg-secondary text-white p-2 rounded-md w-full"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;
