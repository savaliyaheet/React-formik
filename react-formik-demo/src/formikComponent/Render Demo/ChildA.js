import React, { useState } from "react";

function ChildA() {
  const [count, setCount] = useState(0);
  console.log("Child A rendering");
  return (
    <div>
      ChildA count -{count}
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

export default ChildA;
