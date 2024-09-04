import React, { useState } from 'react';

const UpdateItem = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const updateItem = (index) => {
    setItems(items.map((item, i) => (i === index ? `Updated ${item}` : item)));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => updateItem(index)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateItem;
