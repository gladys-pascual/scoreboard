import React from "react";
import "./Counter.scss";

const Counter = ({ score, index, scoreChange }) => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => scoreChange(index, -1)}
      >
        {" "}
        -{" "}
      </button>
      <span className="counter-score"> {score}</span>
      <button
        className="counter-action increment"
        onClick={() => scoreChange(index, 1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
