import React, { useState } from "react";
const initState = {
  username: "Heet",
  password: "Savaliya",
};

function Parent() {
  const [login, setLogin] = useState(initState);
  console.log("Parent rendering");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted values are", login.username, login.password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={login.username}
          onChange={(e) => setLogin({ ...login, username: e.target.value })}
        />
        <input
          type="text"
          name="password"
          id="password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Parent;
