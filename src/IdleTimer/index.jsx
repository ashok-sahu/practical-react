import React, { useRef, useState } from "react";
import IdelTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");
const IdleTimer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);
  const IdelTimerRef = useRef(null);
  const sessionTimeOutRef = useRef(null)
  const OnIdel = () => {
    sessionTimeOutRef.current = setTimeout(Logout,5000)
    console.log("user id idle");
    setOpen(!open);
  };
  const stayActive = () =>{
      setOpen(false)
      console.log('user is active');
      clearTimeout(sessionTimeOutRef.current)
  }
  const Logout = () => {
      setOpen(false)
      clearTimeout(sessionTimeOutRef.current)
      setIsLoggedIn(!isLoggedIn)
      console.log('user is logged out');
  }
  return (
    <div>
      {isLoggedIn ? <h2>hello kanha</h2> : <h2>hello ashok</h2>}
      <Modal isOpen={open}>
        <h2>you have beenidle for a while!</h2>
        <p>you will be logged out soon</p>
        <div>
          <button onClick={Logout}>log me out</button>
          <button onClick={stayActive}>keep me signed in</button>
        </div>
      </Modal>
      <IdelTimer
        ref={IdelTimerRef}
        timeout={5 * 1000}
        onIdle={OnIdel}
      ></IdelTimer>
    </div>
  );
};

export default IdleTimer;
