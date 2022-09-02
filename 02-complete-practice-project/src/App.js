import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };
  console.log(usersList);
  return (
    <div>
      <AddUser onUserAdd={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
