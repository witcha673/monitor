// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ITPage from './pages/ITPage';
import FinancePage from './pages/FinancePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/it" element={<ITPage />} />
        <Route path="/finance" element={<FinancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
