import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OnboardingForm from './components/OnboardingForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OnboardingForm />
  </StrictMode>,
)
