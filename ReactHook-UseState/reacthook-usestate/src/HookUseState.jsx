import { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}
export default Count;
