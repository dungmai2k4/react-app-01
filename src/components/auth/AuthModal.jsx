import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { login, register } from "./service/auth";

export default function AuthModal({ show, handleClose }) {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({ userName: "", password: "" });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setErrors({});
    setSuccess("");

    if (!form.userName || !form.password) {
      setErrors({
        general: "All fields are required!"
      });
      return;
    }

    try {
      if (isLogin) {
        const res = await login(form);
        setSuccess("Login success!");

        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
      } else {
        await register(form);
        setSuccess("Register success! Please login.");
        setIsLogin(true);
      }

      setTimeout(() => {
        setSuccess("");
        setErrors({});
        // handleClose();
      }, 3000);

    } catch (err) {
      const data = err.response?.data;

      // 1. validation field errors
      if (data?.userName || data?.password) {
        setErrors(data);
      }
      // 2. global error (like username exists)
      else if (data?.message) {
        setErrors({ general: data.message });
      }
      // 3. fallback
      else {
        setErrors({ general: "Login/Register failed" });
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? "Login" : "Register"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {success && <p className="text-success">{success}</p>}
        {errors.general && <p className="text-danger">{errors.general}</p>}

        {/* USERNAME */}
        <Form.Control
          placeholder="Username"
          name="userName"
          value={form.userName}
          onChange={handleChange}
          className="mb-1"
          isInvalid={!!errors.userName}
        />
        {errors.userName && (
          <small className="text-danger">{errors.userName}</small>
        )}

        {/* PASSWORD */}
        <Form.Control
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="mt-2 mb-1"
          isInvalid={!!errors.password}
        />
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}

        <Button onClick={handleSubmit} variant={isLogin ? "success" : "primary"} className="w-100 mt-3">
          {isLogin ? "Login" : "Register"}
        </Button>

        <Button
          variant="link"
          className="text-decoration-underline mt-2 p-0"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsLogin(!isLogin);
            setErrors({});
            setSuccess("");
          }}
        >
          {isLogin ? "Go Register" : "Go Login"}
        </Button>
      </Modal.Body>
    </Modal>
  );
}