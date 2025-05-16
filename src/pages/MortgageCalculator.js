import React, { useState } from 'react';
import Footer from '../components/Footer';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
  const [price, setPrice] = useState('');
  const [down, setDown] = useState('');
  const [rate, setRate] = useState('');
  const [payment, setPayment] = useState('');

  const calculate = () => {
    const loan = price - down;
    const monthlyRate = rate / 100 / 12;
    const calculatedPayment = loan * monthlyRate;
    setPayment(calculatedPayment.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h2>Mortgage Calculator</h2>
      <input type="number" placeholder="Home Price" onChange={(e) => setPrice(Number(e.target.value))} />
      <input type="number" placeholder="Down Payment" onChange={(e) => setDown(Number(e.target.value))} />
      <input type="number" placeholder="Interest Rate (%)" onChange={(e) => setRate(Number(e.target.value))} />
      <button onClick={calculate}>Calculate</button>
      {payment && <p>Estimated Monthly Payment: ${payment}</p>}
      <Footer />
    </div>
  );
};

export default MortgageCalculator;
