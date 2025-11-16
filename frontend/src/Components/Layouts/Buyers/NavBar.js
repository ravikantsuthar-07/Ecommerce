import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light sticky-top shadow-sm py-2">
            <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-2">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                    <a href="/" className="navbar-brand fw-bold text-success fs-4 mb-0">
                        Logo
                    </a>
                </div>

                <form className="flex-grow-1 mx-3 d-none d-md-block">
                    <div className="input-group">
                        <span className="input-group-text bg-light border-secondary">
                            <i className="fa-solid fa-magnifying-glass text-secondary"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control bg-light border-secondary text-white"
                            placeholder="Search for products"
                            aria-label="Search"
                        />
                    </div>
                </form>

                {/* Right side: Icons */}
                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-light p-1">
                        <i className="fa-solid fa-gear text-dark fs-5"></i>
                    </button>
                    <a
                        href="/buyer/auth/login"
                        className="text-success text-decoration-none fw-medium"
                    >
                        Login
                    </a>
                    <button className="btn btn-light position-relative p-1">
                        <i className="fa-solid fa-cart-shopping text-dark fs-5"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            0
                        </span>
                    </button>
                </div>

                {/* Mobile Search */}
                <div className="w-100 mt-2 d-md-none">
                    <div className="input-group">
                        <span className="input-group-text bg-light border-secondary">
                            <i className="fa-solid fa-magnifying-glass text-secondary"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control bg-light border-secondary text-white"
                            placeholder="Search for products"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
