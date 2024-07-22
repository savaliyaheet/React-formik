import React, { useState } from "react";
import { ChildA } from "./ContextChildren";

export const CountContext = React.createContext();
const ContextProvider = CountContext.Provider;

function ContextParent() {
  const [count, setCount] = useState(0);
  console.log("Context Parent Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Click</button>
      <ContextProvider value={count}>
        <ChildA />
      </ContextProvider>
    </div>
  );
}

export default ContextParent;
