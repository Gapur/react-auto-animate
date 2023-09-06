import { useState } from "react";
import { Button } from "antd";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { USERS } from "./constants";

export function RandomizedUsersList() {
  const [users, setUsers] = useState(USERS);

  const [parent] = useAutoAnimate();

  const randomizeUsersList = () => {
    let newUsersList = [...users];

    const randomizedUsers = [];
    for (let i = 0; i < USERS.length; i++) {
      const randomIndex = Math.floor(Math.random() * newUsersList.length);
      const [randomUser] = newUsersList.splice(randomIndex, 1);
      randomizedUsers.push(randomUser);
    }

    setUsers(randomizedUsers);
  };

  return (
    <div className="example">
      <div className="users" ref={parent}>
        {users.map((user) => (
          <div className="user" key={user.id}>
            <img className="user-avatar" src={user.avatar} alt="avatar" />
            <span className="user-full-name">{user.fullName}</span>
          </div>
        ))}
      </div>
      <Button type="primary" onClick={randomizeUsersList}>
        Randomize
      </Button>
    </div>
  );
}
