/*
The useEffect hook in React is used to handle side effects in your functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM. Here’s a quick overview of how to use it:
Basic Usage
The useEffect hook takes two arguments:
A function that contains the side effect.
An optional dependency array that determines when the effect should run.
*/

import React,{useState, useEffect} from "react";

function UseEffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs after every render
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
  
    // Cleanup function
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default UseEffectComponent;
