import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../../Contexts/authContext';
import { Link, useNavigate } from 'react-router-dom';

const AdminAuthLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                    token: data.token
                });
                // Save only the auth payload (user + token)
                localStorage.setItem('auth', JSON.stringify({ user: data.user, token: data.token }));
                navigate("/admin/dashboard");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message || 'Login failed');
        }
    }
    return (
        <div className="auth-wrapper">
            <div className="auth-wrapper-right">
                <form id="form-id" onSubmit={handleAdminAuthLogin} method="post">

                    <div className="auth-header">
                        <div className="mb-5">
                            <div className="auth-wrapper-right-logo">
                                <img src="{{ $logo }}" alt="{{ translate('logo') }}" />
                            </div>
                            <h2 className="title">sign in</h2>
                            <div>Welcome Back</div>
                            <p className="mb-0">Want to login your branches?
                                <Link to={`/branch/auth/login`}>
                                    Branch Login
                                </Link>
                            </p>
                            <span className="badge badge-soft-info mt-2">(Admin or employee signin)</span>
                        </div>
                    </div>

                    <div className="js-form-message form-group">
                        <label className="input-label text-capitalize"
                            htmlFor="signinSrEmail">Your Email</label>

                        <input type="email" className="form-control form-control-lg" name="email" id="signinSrEmail"
                            tabIndex={1} placeholder="email@address.com" aria-label="email@address.com"
                            required data-msg="Please enter a valid email address." onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="js-form-message form-group">
                        <label className="input-label" htmlFor="signupSrPassword" tabIndex={0}>
                            <span className="d-flex justify-content-between align-items-center">
                                Password
                            </span>
                        </label>

                        <div className="input-group input-group-merge">
                            <input type="password" className="js-toggle-password form-control form-control-lg"
                                name="password" id="signupSrPassword" placeholder="8+ characters required"
                                aria-label="8+ characters required" required onChange={(e) => setPassword(e.target.value)} />
                            <div id="changePassTarget" className="input-group-append">
                                <button type='button' className="input-group-text" >
                                    <i id="changePassIcon" className="tio-visible-outlined"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox d-flex align-items-center">
                            <input type="checkbox" className="custom-control-input" id="termsCheckbox"
                                name="remember" />
                            <label className="custom-control-label text-muted m-0" htmlFor="termsCheckbox">
                                Reminder me
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-block btn--primary">login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminAuthLogin
