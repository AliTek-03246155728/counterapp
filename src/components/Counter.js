import React from "react";

function Counter(props) {
  return (
    <div className="counter-box">
      <h2>Counter Value: {props.count}</h2>

      <div className="buttons">
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;