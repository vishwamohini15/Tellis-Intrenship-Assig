import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MortgageCalculator from './pages/MortgageCalculator';
import Start from './pages/Start';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<MortgageCalculator />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;
