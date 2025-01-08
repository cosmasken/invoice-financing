import { useState } from 'react';
import useInvoiceStore from '../stores/invoiceStore';
import { Link } from 'react-router-dom';

const OnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState({});
  const { setAccountType: setStoreAccountType } = useInvoiceStore();

  const validateStep2 = () => {
    const newErrors = {};
    if (!companyName) newErrors.companyName = 'Company name is required.';
    if (!businessType) newErrors.businessType = 'Please select a business type.';
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Enter a valid email address.';
    if (!details) newErrors.details = 'Additional details are required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 2 && !validateStep2()) return;
    if (step === 1) setStoreAccountType(accountType);
    setStep(step + 1);
  };

  const handlePreviousStep = () => setStep(step - 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-light">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Account Setup</h2>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm text-primary">Select Account Type</p>
            <div className="flex space-x-4 justify-center">
              <button
                onClick={() => setAccountType('Financier')}
                className={`${
                  accountType === 'Financier' ? 'bg-primary text-white' : 'bg-white text-primary'
                } p-2 rounded-md border`}
              >
                Financier
              </button>
              <button
                onClick={() => setAccountType('Seller')}
                className={`${
                  accountType === 'Seller' ? 'bg-primary text-white' : 'bg-white text-primary'
                } p-2 rounded-md border`}
              >
                Seller of Invoice
              </button>
            </div>
            <button
              onClick={handleNextStep}
              disabled={!accountType}
              className="bg-secondary text-white p-2 rounded-md w-full"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm text-neutral-dark">Company Name</label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={`w-full p-2 border rounded-md ${errors.companyName ? 'border-red-500' : ''}`}
                placeholder="Enter your company name"
                autoComplete="organization"
              />
              {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
            </div>
            <div>
              <label htmlFor="businessType" className="block text-sm text-neutral-dark">Type of Business</label>
              <select
                id="businessType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className={`w-full p-2 border rounded-md ${errors.businessType ? 'border-red-500' : ''}`}
              >
                <option value="">Select</option>
                <option value="Retail">Retail</option>
                <option value="Retail">Food</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Service">Service</option>
              </select>
              {errors.businessType && <p className="text-red-500 text-sm">{errors.businessType}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-neutral-dark">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Enter your email"
                autoComplete="email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="details" className="block text-sm text-neutral-dark">Additional Details</label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Provide additional details"
                className={`w-full p-2 border rounded-md ${errors.details ? 'border-red-500' : ''}`}
              />
              {errors.details && <p className="text-red-500 text-sm">{errors.details}</p>}
            </div>
            <div className="mt-4 flex space-x-4">
              <button onClick={handlePreviousStep} className="bg-neutral-light text-neutral-dark p-2 rounded-md w-full">
                Previous
              </button>
              <button
                onClick={handleNextStep}
                className="bg-secondary text-white p-2 rounded-md w-full"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-4">
            <p className="text-xl font-semibold">Account Setup Complete!</p>
            <button
              className="bg-primary text-white p-2 rounded-md w-full"
            >
              <Link to="/">Go to Dashboard</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingForm;
