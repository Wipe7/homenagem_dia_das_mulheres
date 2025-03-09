import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomenagemAvancada from './components/HomenagemAvancada';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homenagem" element={<HomenagemAvancada />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;