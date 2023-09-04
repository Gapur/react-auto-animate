import { useState } from "react";
import { Menu, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { USERS, CATS, MENU_ITEMS, generateNewCat } from "./constants";

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
    const updatedCats = cats.concat(generateNewCat());
    setCats(updatedCats);
  };

  const deleteCat = (catIdx) => {
    const filteredCats = cats.filter((_, idx) => idx !== catIdx);
    setCats(filteredCats);
  };

  const renderExample = () => {
    if (activeExample === "randomizedUsersList") {
      return (
        <div className="users-box">
          <div className="users" ref={parent}>
            {users.map((user, idx) => (
              <div className="user" key={idx}>
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

    return (
      <div>
        <div>
          {cats.map((animal, idx) => (
            <div className="cat" key={animal.name}>
              <div className="cat-info">
                <img className="cat-avatar" src={animal.avatar} alt="avatar" />
                <span className="cat-name">{animal.name}</span>
              </div>
              <Button
                shape="circle"
                className="delete-button"
                onClick={() => deleteCat(idx)}
                icon={<DeleteOutlined />}
              />
            </div>
          ))}
        </div>
        <Button type="primary" onClick={addNewCat}>
          Add new cat
        </Button>
      </div>
    );
  };

  return (
    <div className="app">
      <Menu
        style={{ width: 256, height: '100vh' }}
        defaultSelectedKeys={defaultMenuItemKey}
        mode="vertical"
        items={MENU_ITEMS}
        onClick={(menuItem) => setActiveExample(menuItem.key)}
      />

      <div className="example-box">{renderExample()}</div>
    </div>
  );
}
