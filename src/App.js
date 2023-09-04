import { useState } from "react";
import { Menu } from "antd";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { USERS, CATS, NEW_CAT, MENU_ITEMS } from "./constants";

const defaultMenuItemKey = MENU_ITEMS[0].key;

export function App() {
  const [users, setUsers] = useState(USERS);
  const [cats, setCats] = useState(CATS);
  const [activeExample, setActiveExample] = useState(defaultMenuItemKey);
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

  const addNewCat = () => {
    const newCats = cats.concat({ id: cats.length + 1, ...NEW_CAT });
    setCats(newCats);
  }

  const renderExample = () => {
    if (activeExample === "randomizedUsersList") {
      return (
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
      );
    }

    return (
      <div>
        <div>
          {cats.map((animal) => (
            <div className="cat" key={animal.id}>
              <img className="cat-avatar" src={animal.avatar} alt="avatar" />
              <span className="cat-name">{animal.name}</span>
            </div>
          ))}
        </div>
        <button onClick={addNewCat}>Add new cat</button>
      </div>
    );
  };

  return (
    <div className="app">
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={defaultMenuItemKey}
        mode="vertical"
        items={MENU_ITEMS}
        onClick={(menuItem) => setActiveExample(menuItem.key)}
      />

      <div className="example-box">{renderExample()}</div>
    </div>
  );
}
