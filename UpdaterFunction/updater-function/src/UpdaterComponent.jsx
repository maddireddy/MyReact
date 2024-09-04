/*
In React, the updater function is used to update the state in a functional component. 
This function is returned by the useState hook and allows you to set a new state value. 
The updater function can be called with either a new state value or a function that takes 
the previous state and returns the new state.

*/
import React, { useState } from 'react';

const UpdaterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UpdaterComponent;
