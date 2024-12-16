import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://<IP_DE_LA_API>:8080/users/${id}`, {
        name,
        email,
        age: parseInt(age),
      });
      alert('Usuario actualizado con éxito');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Actualizar Usuario</h2>
      <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Edad" value={age} onChange={(e) => setAge(e.target.value)} />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default UpdateUser;
