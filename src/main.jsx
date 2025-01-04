import { StrictMode } from 'react'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import Auth from './components/Auth.jsx'
import OnboardingForm from './components/OnboardingForm.jsx'
import FinancierDashboard from './FinancierDashboard.jsx'
import Wallet from './components/Wallet.jsx'
import InvoicePage from './components/InvoicePage.jsx'
import NotFound from './components/NotFound.jsx'

createRoot(document.getElementById('root')).render(

<StrictMode>
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<OnboardingForm />}/>
          <Route index element={<OnboardingForm />} />
          <Route path="financier-dashboard" element={<FinancierDashboard />} />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="wallet" element={<Wallet />} />
          <Route path="auth" element={<Auth />}/>
          <Route path="invoices" element={<InvoicePage />}/>
          <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
</StrictMode>
)
