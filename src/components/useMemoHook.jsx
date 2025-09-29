import React, { useState, useMemo } from "react";

function UseMemoHook() {
  const [number, setNumber] = useState(5);
  const [theme, setTheme] = useState("light");

  // Fake expensive function
  const slowFunction = (num) => {
    console.log("Slow function running...");
    for (let i = 0; i < 1000000000; i++) { } // fake delay
    return num * 2;
  };

  // ✅ useMemo → runs only when "number" changes
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>Result: {doubleNumber}</p>

      <button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
        Toggle Theme
      </button>
    </div>
  );
}

export default UseMemoHook;
