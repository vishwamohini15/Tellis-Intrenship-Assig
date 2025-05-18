import React, { useState, useEffect, useCallback } from 'react';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
    const [homePrice, setHomePrice] = useState(300000);
    const [downPayment, setDownPayment] = useState(60000);
    const [interestRate, setInterestRate] = useState(6.5);
    const [loanLength, setLoanLength] = useState(30);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [propertyTax, setPropertyTax] = useState(265);  // Monthly
    const [homeownersInsurance, setHomeownersInsurance] = useState(132); // Monthly
    const [hoaFees, setHoaFees] = useState(132);        // Monthly
    const locationZip = "302002"; //atlanta

    const calculateMonthlyPayment = useCallback(
      () => {
        const principal = homePrice - downPayment;
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = loanLength * 12;

        if (monthlyRate === 0) {
            setMonthlyPayment(principal / numberOfPayments);
            return;
        }
        const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
        const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
        const basePayment = numerator / denominator;

        if(isNaN(basePayment)){
          setMonthlyPayment(0);
        }
        else{
          setMonthlyPayment(basePayment.toFixed(2));
        }
    }, [homePrice, downPayment, interestRate, loanLength]);

    useEffect(() => {
        calculateMonthlyPayment();
    }, [homePrice, downPayment, interestRate, loanLength, propertyTax, homeownersInsurance, hoaFees, calculateMonthlyPayment]);

    const totalMonthlyPayment = () => {
        return (
            parseFloat(monthlyPayment || 0) +
            parseFloat(propertyTax || 0) +
            parseFloat(homeownersInsurance || 0) +
            parseFloat(hoaFees || 0)
        ).toFixed(2);
    };


    return (
        <div className="mortgage-calculator-container">
            <h1 className="calculator-title">Mortgage Calculator</h1>
            <p className="calculator-description">
                Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI).
                Get the whole picture and calculate your total monthly payment.
            </p>

            <div className="input-section">
                <div className="input-group">
                    <label htmlFor="homePrice">Home price ($)</label>
                    <input
                        type="number"
                        id="homePrice"
                        value={homePrice}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                        min="0"
                        placeholder="Home Price"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="downPayment">Down payment ($)</label>
                    <input
                        type="number"
                        id="downPayment"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        min="0"
                        placeholder="Down Payment"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="interestRate">Interest rate (%)</label>
                    <input
                        type="number"
                        id="interestRate"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        min="0"
                        step="0.01"
                        placeholder="Interest Rate"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="loanLength">Length of loan (years)</label>
                    <input
                        type="number"
                        id="loanLength"
                        value={loanLength}
                        onChange={(e) => setLoanLength(Number(e.target.value))}
                        min="1"
                        step="1"
                        placeholder="Loan Length"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="propertyTax">Property Tax ($/mo)</label>
                    <input
                        type="number"
                        id="propertyTax"
                        value={propertyTax}
                        onChange={(e) => setPropertyTax(Number(e.target.value))}
                        min="0"
                        placeholder="Property Tax"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="homeownersInsurance">Homeowners Insurance ($/mo)</label>
                    <input
                        type="number"
                        id="homeownersInsurance"
                        value={homeownersInsurance}
                        onChange={(e) => setHomeownersInsurance(Number(e.target.value))}
                        min="0"
                        placeholder="Home Insurance"
                    />
                </div>
                 <div className="input-group">
                    <label htmlFor="hoaFees">HOA Fees ($/mo)</label>
                    <input
                        type="number"
                        id="hoaFees"
                        value={hoaFees}
                        onChange={(e) => setHoaFees(Number(e.target.value))}
                        min="0"
                        placeholder="HOA Fees"
                    />
                </div>
                <div className="input-group">
                  <label>Location Zip</label>
                  <p className='location-zip'>{locationZip}</p>
                </div>
                <button onClick={calculateMonthlyPayment} className="calculate-button">
                    Calculate your monthly payment
                </button>

            </div>

            <div className="payment-section">
                <div className="monthly-payment">
                    Total Monthly Payment: ${totalMonthlyPayment()} /mo
                </div>
                <div className="payment-breakdown">
                    <h3>Monthly Payment Breakdown</h3>
                    <div className='breakdown-row'>
                      <p>Principal & Interest</p>
                      <p>${monthlyPayment || 0} </p>
                    </div>
                    <div className='breakdown-row'>
                      <p>Property Taxes</p>
                       <p>${propertyTax}</p>
                    </div>
                    <div className='breakdown-row'>
                      <p>Homeowners Insurance</p>
                      <p>${homeownersInsurance}</p>
                    </div>
                    <div className='breakdown-row'>
                      <p>HOA Fees</p>
                      <p>${hoaFees}</p>
                    </div>
                </div>
            </div>

            <div className="explanation-section">
                <h3>How does this mortgage calculator help me?</h3>
                <p>
                    When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget...
                </p>
            </div>

            <div className="formula-section">
                <h3>Formula for calculating your debt-to-income (DTI) ratio:</h3>
                {/* Placeholder for the DTI formula image  */}
                <div className="formula-image-placeholder">
                    [Image of DTI Formula]
                </div>
                <p>DTI = (Total Monthly Debt Payments / Gross Monthly Income) * 100</p>
            </div>

            <div className="tips-section">
                <h3>How to use this mortgage calculator?</h3>
                 {/* Placeholder for the usage tips image */}
                <div className="tips-image-placeholder">
                    [Image of Calculator Tips]
                </div>
                <p>
                    Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments...
                </p>
            </div>
        </div>
    );
};

export default MortgageCalculator;




















// import React, { useState } from 'react';
// import Footer from '../components/Footer';
// import './MortgageCalculator.css';
// import Header from '../components/Header';

// const MortgageCalculator = () => {
//   const [homePrice, setHomePrice] = useState(300000);
//   const [downPayment, setDownPayment] = useState(60000);
//   const [interestRate, setInterestRate] = useState(6.5);
//   const [loanLength, setLoanLength] = useState(30);
//   const [monthlyPayment, setMonthlyPayment] = useState(2145.96);

//   const calculateMonthlyPayment = () => {
//     const principal = homePrice - downPayment;
//     const monthlyRate = interestRate / 100 / 12;
//     const numberOfPayments = loanLength * 12;
//     const payment =
//       (principal * monthlyRate) /
//       (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
//     setMonthlyPayment(payment.toFixed(2));
//   };

//   return (
//     <div className="mortgage-calculator">

//     <Header></Header>

//       {/* Section 1: Calculator */}
//       <section className="calc-section">
//         <h2>Mortgage calculator</h2>
//         <p>
//           Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). 
//           Get the whole picture and calculate your total monthly payment.
//         </p>

//         <div className="calc-inputs">
//           <label>Home price ($)</label>
//           <input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} />
          
//           <label>Down payment ($)</label>
//           <input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />

//           <label>Interest rate (%)</label>
//           <input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />

//           <label>Length of loan (years)</label>
//           <input type="number" value={loanLength} onChange={(e) => setLoanLength(Number(e.target.value))} />

//           <button onClick={calculateMonthlyPayment}>Calculate</button>

//           <div className="monthly-payment">
//             Monthly Payment: ${monthlyPayment}/mo
//           </div>
//         </div>
//       </section>

//       {/* Section 2: Monthly Breakdown */}
//       <section className="breakdown-section">
//         <h3>Monthly Payment Breakdown</h3>
//         <div className="breakdown-item">Principal & Interest: ${monthlyPayment}</div>
//         <div className="breakdown-item">Property Taxes: $265</div>
//         <div className="breakdown-item">Homeowners Insurance: $132</div>
//         <div className="breakdown-item">HOA Fees: $132</div>
//         <div className="breakdown-item">Utilities: $100</div>
//       </section>

//       {/* Section 3: Explanation */}
//       <section className="explanation-section">
//         <h3>How does mortgage calculator help me?</h3>
//         <p>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget...</p>
//       </section>

//       {/* Section 4: Formula */}
//       <section className="formula-section">
//         <h3>Formula for calculating your debt-to-income (DTI) ratio:</h3>
//         <img src="" alt="DTI Formula" className="formula-image" />
//       </section>

//       {/* Section 5: Usage Tips */}
//       <section className="tips-section">
//         <h3>How to use this mortgage calculator?</h3>
//         <p>Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments...</p>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default MortgageCalculator;
