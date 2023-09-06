import { useState } from "react";
import { Menu } from "antd";

import { MENU_ITEMS } from "./constants";
import { RandomizedUsersList } from "./RandomizedUsersList";
import { CatsList } from './CatsList';

const defaultMenuItemKey = MENU_ITEMS[0].key;

export function App() {
  const [activeExample, setActiveExample] = useState(defaultMenuItemKey);

  const renderExample = () => {
    if (activeExample === "randomizedUsersList") {
      return <RandomizedUsersList />;
    }
    return <CatsList />;
  };

  return (
    <div className="app">
      <Menu
        style={{ width: 256, height: "100vh" }}
        defaultSelectedKeys={defaultMenuItemKey}
        mode="vertical"
        items={MENU_ITEMS}
        onClick={(menuItem) => setActiveExample(menuItem.key)}
      />

      <div className="content">{renderExample()}</div>
    </div>
  );
}
