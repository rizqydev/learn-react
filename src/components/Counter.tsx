import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  console.log("Counter rendered");

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}