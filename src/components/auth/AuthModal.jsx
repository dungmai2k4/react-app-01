import { Modal } from "react-bootstrap";
import { useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthModal({ show, handleClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {isLogin ? "Login" : "Register"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body key={isLogin ? "login" : "register"}>
        {isLogin ? (
          <LoginForm onSwitch={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitch={() => setIsLogin(true)} />
        )}
      </Modal.Body>
    </Modal>
  );
}