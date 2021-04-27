import "./Counter.css";
import { useState } from "react";

import React from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="row center">
      <div className="col s12 m12">
        <h3> Counts: {counter} </h3>
      </div>

      <div className="counter">
        <button
          className="btn waves-effect purple accent-3"
          onClick={() => setCounter(counter + 1)}
        >
          Add
        </button>

        <button
          className="btn waves-effect purple lighten-3"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
