import { useState } from 'react';
import useInvoiceStore from '../stores/invoiceStore';
import { Link } from 'react-router-dom';

const OnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [details, setDetails] = useState('');
  const { setAccountType: setStoreAccountType } = useInvoiceStore();

  // const navigate = useNavigate(); // Hook to navigate between routes

  // const proceed = () => {
  //   // Navigate to the dashboard
  //   navigate('/dashboard');
  // };

  const handleNextStep = () => {
    if (step === 1) {
      // Save the account type to the store
      setStoreAccountType(accountType);
    }
    setStep(step + 1);
  };

  const handlePreviousStep = () => setStep(step - 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral.light">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Account Setup</h2>

        {step === 1 && (
          <div className="space-y-4">
            <div className="bg-primary/10 p-3 rounded-md">
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
            </div>

            <div className="mt-4">
              <button
                onClick={handleNextStep}
                disabled={!accountType}
                className="bg-secondary text-white p-2 rounded-md w-full"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="bg-secondary/10 p-3 rounded-md">
              <p className="text-sm text-secondary">
                {accountType === 'Financier' ? 'Enter Your Finance Details' : 'Enter Your Invoice Details'}
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm text-neutral.dark">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm text-neutral.dark">Type of Business</label>
                  <input
                    type="text"
                    id="businessType"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your type of business"
                  />
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm text-neutral.dark">Additional Details</label>
                  <textarea
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Provide additional details"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex space-x-4">
              <button onClick={handlePreviousStep} className="bg-neutral.light text-neutral.dark p-2 rounded-md w-full">
                Previous
              </button>
              <button
                onClick={handleNextStep}
                disabled={!companyName || !businessType || !details}
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
              onClick={() => alert('Proceeding to dashboard')}
              className="bg-primary text-white p-2 rounded-md w-full"
            >
              <Link to="/products"> Go to Dashboard</Link>
             
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingForm;
