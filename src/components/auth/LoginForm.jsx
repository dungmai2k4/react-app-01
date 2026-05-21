import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { login } from "./service/auth";

export default function LoginForm({ onSwitch }) {
  const [form, setForm] = useState({
    userName: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
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
      const res = await login(form);

      setSuccess("Login success!");

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

    } catch (err) {
      const data = err.response?.data;

      if (data?.userName || data?.password) {
        setErrors(data);
      } else if (data?.message) {
        setErrors({ general: data.message });
      } else {
        setErrors({ general: "Login failed" });
      }
    }
  };

  return (
    <>
      {success && <p className="text-success">{success}</p>}
      {errors.general && <p className="text-danger">{errors.general}</p>}

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

      <Button
        onClick={handleSubmit}
        variant="success"
        className="w-100 mt-3"
      >
        Login
      </Button>

      <Button
        variant="link"
        className="text-decoration-underline mt-2 p-0"
        onClick={onSwitch}
      >
        Go Register
      </Button>
    </>
  );
}