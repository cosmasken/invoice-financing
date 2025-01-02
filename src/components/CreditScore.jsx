import { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useInvoiceStore from '../stores/invoiceStore';

const CreditScore = () => {
  const {creditScore } = useInvoiceStore();
  const [mycreditScore, setMyCreditScore] = useState(670);

  useEffect(() => {
    // Simulate fetching the credit score, in real case this would be fetched or computed
    const fetchedScore = creditScore; // Assuming `totalValue` directly represents the credit score
    setMyCreditScore(fetchedScore);
  }, [creditScore]);

  // Calculate percentage of the score relative to a maximum (1000 in this case)
  const percentage = (mycreditScore / 1000) * 100;

  // Conditional styling based on the credit score
  const getColor = (score) => {
    if (score < 600) return { path: '#FF0000', text: '#FF0000' }; // Red for poor
    if (score < 700) return { path: '#FFAA00', text: '#FFAA00' }; // Yellow for fair
    return { path: '#4CAF50', text: '#4CAF50' }; // Green for good
  };

  const { path, text } = getColor(mycreditScore);

  return (
    <div className="credit-score">
      <h3 className="text-xl font-semibold mb-4">Credit Score</h3>
      <div className="flex justify-center items-center">
        <div className="w-24 h-24">
          <CircularProgressbar
            value={percentage}
            text={`${mycreditScore}`}
            strokeWidth={10}
            styles={{
              path: {
                stroke: path, // Dynamic color for the path
              },
              trail: {
                stroke: '#d6d6d6', // Light gray for the background trail
              },
              text: {
                fill: text, // Dynamic color for the text
                fontSize: '16px',
                fontWeight: 'bold',
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
