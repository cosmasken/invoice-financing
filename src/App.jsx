import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth"; // Replace with your actual auth hook
import Dashboard from "./pages/Dashboard";
import FinancierDashboard from "./pages/FinancierDashboard";
import OnboardingForm from "./pages/OnboardingForm";

const App = () => {
  const { user, isAuthenticated, isFirstTime } = useAuth(); // Replace with your auth state logic
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth"); // Redirect to authentication page if not logged in
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Optionally, you can add a loading spinner here
  }

  if (isFirstTime) {
    return <OnboardingForm />;
  }

  if (user.type === "financier") {
    return <FinancierDashboard />;
  }

  return <Dashboard />;
};

export default App;
