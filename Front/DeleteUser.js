import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://<IP_DE_LA_API>:8080/users/${id}`);
      alert('Usuario eliminado');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Eliminar Usuario</h2>
      <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default DeleteUser;
