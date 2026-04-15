import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  // 🔹 State define
  const [count, setCount] = useState(0);

  // 🔹 Functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <h1>React Counter App</h1>

      {/* 🔹 Props pass ہو رہے ہیں */}
      <Counter 
        count={count} 
        increment={increment} 
        decrement={decrement} 
      />
    </div>
  );
}

export default App;