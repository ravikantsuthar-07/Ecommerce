import React from "react";
// import logo from "../assets/logo.png";
// import { FaShoppingCart, FaUser, FaQuestionCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-white shadow-sm py-3">
            <div className="container d-flex align-items-center justify-content-between">
                {/* Logo */}
                <div className="d-flex align-items-center">
                    {/* <img src={logo} alt="KSO Logo" width="100" /> */}
                </div>

                {/* Search Bar */}
                <div className="flex-grow-1 mx-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="form-control rounded-pill px-3"
                    />
                </div>

                {/* Icons */}
                <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center gap-1 text-secondary">
                        {/* <FaUser /> <span>My Account</span> */}
                    </div>
                    <div className="d-flex align-items-center gap-1 text-secondary">
                        {/* <FaQuestionCircle /> <span>Help</span> */}
                    </div>
                    <div className="position-relative">
                        {/* <FaShoppingCart size={20} /> */}
                        <span className="badge bg-warning text-dark position-absolute top-0 start-100 translate-middle rounded-pill">
                            0
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
