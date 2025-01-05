import { StrictMode } from 'react'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Auth from './pages/Auth.jsx'
import OnboardingForm from './pages/OnboardingForm.jsx'
import FinancierDashboard from './pages/OnboardingForm.jsx'
import Wallet from './pages/Wallet.jsx'
import InvoicePage from './pagesInvoicePage.jsx'
import NotFound from './pages/NotFound.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

<StrictMode>
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<App />}/>
          <Route index element={<App />} />
          <Route path="financier-dashboard" element={<FinancierDashboard />} />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="onboarding" element={<OnboardingForm/>}/>
          <Route path="wallet" element={<Wallet />} />
          <Route path="auth" element={<Auth />}/>
          <Route path="invoices" element={<InvoicePage />}/>
          <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
</StrictMode>
)
