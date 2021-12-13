import React from "react";
import "./Login.style.css";
interface Props {
  closeModal: any;
}

const Login = ({ closeModal }: Props) => {
  return (
    <main className="modal">
      <div className="login">
        <h2>Sign in 🌵 </h2>
        <hr />
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />

        <button>Login</button>
      </div>
      <button className="modal-close-button" onClick={() => closeModal(false)}>
        <h4>X</h4>
      </button>
    </main>
  );
};

export default Login;
