import React from "react";
import "./Modal.style.css";
import Login from "../Login/Login";
import Cart from '../Cart/Cart'

const Modal = () => {

  return (
    <main className="modal">
      <Cart/>
      <Login/>
    </main>
  )
  
};

export default Modal;
