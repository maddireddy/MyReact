import { useState } from "react";

function MutipleHooks() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <p>{isEven ? "Even" : "Odd"}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setIsEven(!isEven)}>Toggle Even/Odd</button>
      </div>
    </>
  );
}
export default MutipleHooks;
