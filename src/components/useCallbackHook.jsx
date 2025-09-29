import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered"); // to track renders
  return <button onClick={onClick}>Increment</button>;
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // ✅ useCallback keeps function reference stable
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <Child onClick={increment} />

      <button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
        Toggle Theme
      </button>
    </div>
  );
}

export default UseCallbackExample;
