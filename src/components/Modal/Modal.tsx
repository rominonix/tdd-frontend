import React from "react";
import "./Modal.style.css";
import Login from "../Login/Login";
// import Cart from '../Cart/Cart'
interface Props {
  closeModal: any;
  
}


const Modal = () => {

  return (
    <main className="modal" >
       {/* <div className="modal-close-button">
            <button onClick={() => closeModal(false)}>X</button>
          </div> */}
      {/* <Cart/> */}
      <Login closeModal={undefined} />
    </main>
  )
  
};

export default Modal;
