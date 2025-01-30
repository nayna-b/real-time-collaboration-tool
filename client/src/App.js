import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';       // Corrected import for Login component
import Register from './components/Register'; // Corrected import for Register component
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />        {/* Login Page route */}
        <Route path="/register" element={<Register />} /> {/* Register Page route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;
