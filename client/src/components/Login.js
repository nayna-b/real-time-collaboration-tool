import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Ensure axios is imported

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // To capture and display error message
  const navigate = useNavigate();  // Hook for programmatic navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (response.data.token) {
        // Save the token to localStorage
        localStorage.setItem('token', response.data.token);
        
        // Redirect to dashboard page using react-router's navigate hook
        navigate('/dashboard');  // Use navigate for routing within React
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid credentials or server error.');  // Display error message
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
    </div>
  );
}

export default Login;
