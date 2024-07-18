import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Remote Application</h1>
      <h1>Button: {count}</h1>
      <button
        style={{ background: "#2563eb" }}
        onClick={() => setCount(count + 1)}
      >
        Inc
      </button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
};
