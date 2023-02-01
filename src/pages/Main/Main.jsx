import React, { useReducer } from "react";
import "./Main.css";

const Main = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return state + 1;
    } else if (action.type === "decrement") {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="main">
      <div>
        <p>{state}</p>
        <div>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "increment" })}
            style={{ marginLeft: "15px" }}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
