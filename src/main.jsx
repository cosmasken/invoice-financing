import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import { WalletProvider } from './context/WalletContext.jsx';
import { NetworkProvider } from './context/NetworkContext.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Auth from './pages/Auth.jsx'
import OnboardingForm from './pages/OnboardingForm.jsx'
import FinancierDashboard from './pages/OnboardingForm.jsx'
import Wallet from './pages/Wallet.jsx'
import InvoicePage from './pages/InvoicePage.jsx'
import NotFound from './pages/NotFound.jsx'
import OnrampOfframp from './pages/OnrampOfframp.jsx';
import LogoutConfirmation from './pages/LogoutConfirmation.jsx'
import Notifications from './pages/Notifications.jsx'
import ProfileManagement from './pages/ProfileManagement.jsx'
import SecuritySettings from './pages/SecuritySettings.jsx'
import PaymentMethods from './pages/PaymentMethods.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NetworkProvider> 
        <WalletProvider> 
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<App />} />
            <Route path="financier-dashboard" element={<FinancierDashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="onboarding" element={<OnboardingForm />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="auth" element={<Auth />} />
            <Route path="invoices" element={<InvoicePage />} />
            <Route path='onramp-offramp' element={<OnrampOfframp/>}/>
            <Route path="logout" element={<LogoutConfirmation />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<ProfileManagement />} />
            <Route path="security" element={<SecuritySettings />} />
            <Route path="payment-methods" element={<PaymentMethods />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WalletProvider>
      </NetworkProvider>
    </BrowserRouter>
  </StrictMode>
);
