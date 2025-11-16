import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const AdminAuthLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleAdminAuthLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`/api/v1/auth/login`, { email, password });
            if (data?.success) {
                setAuth({
                    ...auth,
                    user: data.user,
                    token: data.token,
                });
                localStorage.setItem("auth", JSON.stringify({ user: data.user, token: data.token }));
                toast.success("Login successful 🎉");
                navigate("/admin/dashboard");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message || "Login failed");
        }
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center vh-100"
            style={{
                background: "linear-gradient(135deg, #eef2ff, #e0e7ff, #f8fafc)",
            }}
        >
            <div
                className="card shadow-lg border-0 rounded-4 p-4"
                style={{ width: "100%", maxWidth: "420px" }}
            >
                <div className="text-center mb-4">
                    <img
                        src="/logo192.png"
                        alt="Logo"
                        className="img-fluid mb-3"
                        style={{ width: "70px", height: "70px" }}
                    />
                    <h3 className="fw-bold text-dark">Admin Sign In</h3>
                    <p className="text-muted small mb-2">
                        Welcome back! Please login to your dashboard.
                    </p>
                    <p className="mb-1 small">
                        Want to login your branch?{" "}
                        <Link to="/branch/auth/login" className="text-primary fw-semibold">
                            Branch Login
                        </Link>
                    </p>
                    <span className="badge bg-light text-secondary">
                        (Admin or Employee Sign-in)
                    </span>
                </div>

                <form onSubmit={handleAdminAuthLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg rounded-3"
                            placeholder="email@address.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-semibold">
                            Password
                        </label>
                        <div className="input-group">
                            <input
                                type={showPass ? "text" : "password"}
                                id="password"
                                className="form-control form-control-lg rounded-start-3"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary rounded-end-3"
                                onClick={() => setShowPass(!showPass)}
                            >
                                <i
                                    className={`fa-solid ${showPass ? "fa-eye-slash" : "fa-eye"}`}
                                ></i>
                            </button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="rememberMe"
                            />
                            <label
                                className="form-check-label text-muted small"
                                htmlFor="rememberMe"
                            >
                                Remember me
                            </label>
                        </div>
                        <Link to="#" className="small text-primary">
                            Forgot password?
                        </Link>
                    </div>

                    <div className="d-grid">
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg fw-semibold rounded-3 shadow-sm"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminAuthLogin;
