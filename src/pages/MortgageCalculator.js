import React, { useState } from 'react';
import Footer from '../components/Footer';
import './MortgageCalculator.css';
import Header from '../components/Header';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanLength, setLoanLength] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(2145.96);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanLength * 12;
    const payment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="mortgage-calculator">

    <Header></Header>

      {/* Section 1: Calculator */}
      <section className="calc-section">
        <h2>Mortgage calculator</h2>
        <p>
          Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). 
          Get the whole picture and calculate your total monthly payment.
        </p>

        <div className="calc-inputs">
          <label>Home price ($)</label>
          <input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} />
          
          <label>Down payment ($)</label>
          <input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />

          <label>Interest rate (%)</label>
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />

          <label>Length of loan (years)</label>
          <input type="number" value={loanLength} onChange={(e) => setLoanLength(Number(e.target.value))} />

          <button onClick={calculateMonthlyPayment}>Calculate</button>

          <div className="monthly-payment">
            Monthly Payment: ${monthlyPayment}/mo
          </div>
        </div>
      </section>

      {/* Section 2: Monthly Breakdown */}
      <section className="breakdown-section">
        <h3>Monthly Payment Breakdown</h3>
        <div className="breakdown-item">Principal & Interest: ${monthlyPayment}</div>
        <div className="breakdown-item">Property Taxes: $265</div>
        <div className="breakdown-item">Homeowners Insurance: $132</div>
        <div className="breakdown-item">HOA Fees: $132</div>
        <div className="breakdown-item">Utilities: $100</div>
      </section>

      {/* Section 3: Explanation */}
      <section className="explanation-section">
        <h3>How does mortgage calculator help me?</h3>
        <p>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget...</p>
      </section>

      {/* Section 4: Formula */}
      <section className="formula-section">
        <h3>Formula for calculating your debt-to-income (DTI) ratio:</h3>
        <img src="" alt="DTI Formula" className="formula-image" />
      </section>

      {/* Section 5: Usage Tips */}
      <section className="tips-section">
        <h3>How to use this mortgage calculator?</h3>
        <p>Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments...</p>
      </section>

      <Footer />
    </div>
  );
};

export default MortgageCalculator;
