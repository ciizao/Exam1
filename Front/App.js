import React from 'react';
import CreateUser from './components/CreateUser';
import ReadUsers from './components/ReadUsers';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

const App = () => {
  return (
    <div>
      <h1>CRUD de Usuarios</h1>
      <CreateUser />
      <ReadUsers />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
};

export default App;
