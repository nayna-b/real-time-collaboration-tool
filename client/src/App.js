import React, { useEffect, useState } from 'react';
import { getUsers } from './services/api';

function App() {
  const [users, setUsers] = useState([]); // State to store users

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers(); // Call the API
      setUsers(data); // Store the data in state
    };
    fetchUsers();
  }, []); // Empty array ensures this runs only once

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li> // Display each user's name
        ))}
      </ul>
    </div>
  );
}

export default App;
