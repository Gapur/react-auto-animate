import { useState } from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { CATS, generateNewCat } from "./constants";

export function CatsList() {
  const [cats, setCats] = useState(CATS);

  const [parent] = useAutoAnimate();

  const addNewCat = () => {
    const updatedCats = cats.concat(generateNewCat());
    setCats(updatedCats);
  };

  const deleteCat = (catId) => {
    const filteredCats = cats.filter((cat) => cat.id !== catId);
    setCats(filteredCats);
  };

  return (
    <div className="example">
      <div className="cats" ref={parent}>
        {cats.map((cat, idx) => (
          <div className="cat" key={cat.id}>
            <div className="cat-info">
              <img className="cat-avatar" src={cat.avatar} alt="avatar" />
              <span className="cat-name">{cat.name}</span>
            </div>
            <Button
              shape="circle"
              className="delete-button"
              onClick={() => deleteCat(cat.id)}
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
}
