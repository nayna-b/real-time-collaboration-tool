import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);  // To handle errors from backend validation

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token);  // Debugging token retrieval
    
    if (!token) {
      console.log("No token found. Redirecting to login...");
      // If no token, redirect to login page
      navigate('/');
    } else {
      // If a token exists, verify it with the backend
      const verifyToken = async () => {
        try {
          console.log("Sending token to backend for validation...");
          const response = await axios.get('http://localhost:5000/api/user/me', {
            headers: {
              Authorization: `Bearer ${token}`,  // Send token in Authorization header
            },
          });
          console.log("Backend response:", response);  // Check if the backend responds correctly

          if (response.status !== 200) {
            console.log("Invalid token response, redirecting to login...");
            setError('Token verification failed.');
            navigate('/');  // Redirect if token is not valid
          }
        } catch (error) {
          console.error("Error verifying token:", error);
          setError('Invalid or expired token. Please log in again.');
          navigate('/');  // Redirect if token is not valid or expired
        }
      };

      verifyToken();
    }
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>  // Display error if token is invalid
      ) : (
        <p>Welcome to the dashboard!</p>  // Content shown if token is valid
      )}
    </div>
  );
}

export default Dashboard;
