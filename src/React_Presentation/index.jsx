import React, { useState } from "react";

const ReactPresentation = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
    </div>
  );
};

export default ReactPresentation;
