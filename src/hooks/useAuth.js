import { useState, useEffect } from "react";

// Static data simulating authentication
const mockUserData = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  type: "financier", // Can be "financier" or "user"
  firstTime: false,  // Set to true for first-time users
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isFirstTime, setIsFirstTime] = useState(false);

  // Simulate authentication on mount
  useEffect(() => {
    // Simulate a delay for fetching user data
    const authenticate = async () => {
      try {
        // Mock login logic
        const loggedIn = true; // Simulate login status
        if (loggedIn) {
          setIsAuthenticated(true);
          setUser(mockUserData);
          setIsFirstTime(mockUserData.firstTime);
        } else {
          setIsAuthenticated(false);
          setUser(null);
          setIsFirstTime(false);
        }
      } catch (error) {
        console.error("Error during authentication:", error);
      }
    };

    authenticate();
  }, []);

  return {
    isAuthenticated,
    user,
    isFirstTime,
  };
};
