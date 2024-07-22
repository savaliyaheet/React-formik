import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = React.memo(() => {
  console.log("Child A render");
  return (
    <div>
      Child A
      <ChildB />
    </div>
  );
});
export const ChildB = () => {
  console.log("Child B render");
  return (
    <div>
      Child B
      <ChildC />
    </div>
  );
};
export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("Child C render");
  return <div>Child C count- {count}</div>;
};
