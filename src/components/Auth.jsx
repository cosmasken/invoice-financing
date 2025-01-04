import { useState } from 'react';
import { ethers } from 'ethers';

const Auth = () => {
  const [step, setStep] = useState('options'); // 'options', 'otp', 'success'
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [inputType, setInputType] = useState(''); // 'email' or 'phone'
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [timer, setTimer] = useState(0);

  // Handle MetaMask connection
  const handleMetaMask = async () => {
    setLoading(true);
    try {
      if (!window.ethereum) throw new Error('MetaMask not installed');
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setLoading(false);
      setStep('success');
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  // Handle WalletConnect connection
  const handleWalletConnect = async () => {
    setLoading(true);
    try {
      if (!window.ethereum) throw new Error('MetaMask not installed');
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setLoading(false);
      setStep('success');
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  // Start OTP resend timer
  const startTimer = () => {
    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Send OTP
  const sendOtp = () => {
    if (inputType === 'email' && !email) {
      setError('Please enter your email.');
      return;
    }
    if (inputType === 'phone' && !phone) {
      setError('Please enter your phone number.');
      return;
    }

    setError('');
    setLoading(true);
    setTimeout(() => {
      setGeneratedOtp('392529'); // Static OTP for demo
      setLoading(false);
      startTimer();
      setStep('otp'); // Move to OTP verification step
    //   alert(`Your OTP is 392529`); // Replace with real OTP API
    }, 1000);
  };

  // Verify OTP
  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setStep('success');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-light">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        {step === 'options' && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up / Login</h2>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={handleMetaMask}
            >
              Connect with MetaMask
            </button>
            <button
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={handleWalletConnect}
            >
              Connect with WalletConnect
            </button>
            <button
              className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setStep('emailPhone')}
            >
              Login with Email/Phone
            </button>
          </>
        )}

        {step === 'emailPhone' && (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login with Email/Phone</h2>
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Select Login Method</label>
            <select
                className="w-full border rounded px-3 py-2"
                value={inputType}
                onChange={(e) => setInputType(e.target.value)}
            >
                <option value="">Choose</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
            </select>
            </div>
            {inputType === 'email' && (
            <input
                type="email"
                placeholder="Enter your email"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            )}
            {inputType === 'phone' && (
            <input
                type="text"
                placeholder="Enter your phone number"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-4"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            )}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={sendOtp}
            disabled={loading || timer > 0}
            >
            {loading
                ? 'Sending OTP...'
                : timer > 0
                ? `Resend OTP in ${timer}s`
                : 'Get OTP'}
            </button>
        </>
        )}

        {step === 'otp' && (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enter OTP</h2>
            <input
            type="text"
            placeholder="Enter OTP"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={verifyOtp}
            >
            Verify OTP
            </button>
        </>
        )}

        {step === 'success' && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-700 mb-6">You have successfully signed up/logged in.</p>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert('Proceeding to account setup')}
            >
              Proceed to Account Setup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
