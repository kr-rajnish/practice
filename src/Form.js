import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function check() {
    if (username.trim() === "") {
      console.log("please enter the username");
    }
    if (password.trim() === "") {
      console.log("please enter the password");
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={check}
        // disabled={username.length === 0 && password.length === 0}
      >
        Submit
      </button>
    </div>
  );
}
export default Form;
