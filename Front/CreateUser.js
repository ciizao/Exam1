import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://<IP_DE_LA_API>:8080/users', {
        name,
        email,
        age: parseInt(age),
      });
      alert('Usuario creado con ID: ' + response.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Usuario</h2>
      <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Edad" value={age} onChange={(e) => setAge(e.target.value)} />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CreateUser;
