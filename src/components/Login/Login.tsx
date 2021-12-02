import React from "react";
import "./Login.style.css";

const Login = () => {
  return (
    <main className="login">
        <button>X</button>
      <h2>Sign in 🌵 </h2>
      <hr />
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />

      <button>Login</button>
    </main>
  );
};

export default Login;
