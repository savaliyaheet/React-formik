import React, { useState, useEffect } from "react";

function TestComponent2({ name }) {
  console.log("Test Component 2 rendered");
  return <div>TestComponent2 {name}</div>;
}

export default React.memo(TestComponent2);
