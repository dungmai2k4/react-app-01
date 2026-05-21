import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { register } from "./service/auth";

export default function RegisterForm({ onSwitch }) {
    const [form, setForm] = useState({
        userName: "",
        password: "",
        confirmPassword: ""
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

        if (
            !form.userName ||
            !form.password ||
            !form.confirmPassword
        ) {
            setErrors({
                general: "All fields are required!"
            });
            return;
        }

        try {
            await register({
                userName: form.userName,
                password: form.password,
                confirmPassword: form.confirmPassword
            });

            setSuccess("Register success! Please login.");

        } catch (err) {
            const data = err.response?.data;

            const newErrors = {};

            if (data?.message) {
                newErrors.general = data.message;
            }

            if (data?.passwordMatching) {
                newErrors.confirmPassword =
                    data.passwordMatching;
            }

            if (data?.userName) {
                newErrors.userName = data.userName;
            }

            if (data?.password) {
                newErrors.password = data.password;
            }

            if (Object.keys(newErrors).length === 0) {
                newErrors.general = "Register failed";
            }

            setErrors(newErrors);
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

            <Form.Control
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="mt-2 mb-1"
                isInvalid={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
                <small className="text-danger">
                    {errors.confirmPassword}
                </small>
            )}

            <Button
                onClick={handleSubmit}
                variant="primary"
                className="w-100 mt-3"
            >
                Register
            </Button>

            <Button
                variant="link"
                className="text-decoration-underline mt-2 p-0"
                onClick={onSwitch}
            >
                Go Login
            </Button>
        </>
    );
}