import axios from 'axios';

// Update the API URL to point to the authentication routes
const API_URL = 'http://localhost:5000/api/auth'; // <-- Use '/auth' for registration and login

// Function to register a user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // Return the response from the backend
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Throw the error to handle it in the component
  }
};

// Function to log in a user
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; // Return the response from the backend
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error; // Throw the error to handle it in the component
  }
};


// Function to get users
export const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users');
    return response.data; // Return the response from the backend
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Throw the error to handle it in the component
  }
};


