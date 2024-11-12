import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect running on every re-render");
  });

  /* If we provide an empty dependency array, the effect will run only on the mount phase */
  useEffect(() => {
    console.log("Effect running only on mount phase");
  }, []);

  useEffect(() => {
    console.log("Effect running on re-render if count is updated");
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
