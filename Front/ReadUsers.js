import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://<IP_DE_LA_API>:8080/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.age} años
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadUsers;
