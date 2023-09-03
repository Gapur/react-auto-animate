import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { USERS } from "./constants";

export function App() {
  const [users, setUsers] = useState(USERS);
  const [parent] = useAutoAnimate();

  const randomizeUsersList = () => {
    let allItems = [...USERS];
    
    const randomizedUsers = [];
    for (let i = 0; i < USERS.length; i++) {
      const randomIndex = Math.floor(Math.random() * allItems.length);
      const [randomUser] = allItems.splice(randomIndex, 1);
      randomizedUsers.push(randomUser);
    }
    
    setUsers(randomizedUsers);
  };

  return (
    <div className="app">
      <div className="users-box">
        <div className="users" ref={parent}>
          {users.map((user) => (
            <div className="user" key={user.id}>
              <img className="user-avatar" src={user.avatar} alt="avatar" />
              <span className="user-full-name">{user.fullName}</span>
            </div>
          ))}
        </div>
        <button onClick={randomizeUsersList}>Randomize</button>
      </div>
    </div>
  );
}
