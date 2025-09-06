import React from 'react'
import { Link } from 'react-router-dom';

const AdminSiderBar = ({ isOpen, handleClick,  handleDropdownToggle}) => {
    return (
        <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered default navbar-vertical-aside-initialized">
            <div className="navbar-vertical-container text-capitalize">
                <div className="navbar-vertical-footer-offset">
                    <div className="navbar-brand-wrapper justify-content-between">

                        <Link className="navbar-brand" to="/admin" aria-label="Front">
                            <img
                                className="w-100 side-logo"
                                src="https://admin.binjalfarm.com/storage/app/public/shop/2025-04-20-6804aabab7259.png"
                                alt="Logo"
                            />
                        </Link>

                        <button
                            type="button"
                            className="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark"
                            onClick={handleClick}
                        >
                            <i className="tio-clear tio-lg" ></i>
                        </button>

                        <div className="navbar-nav-wrap-content-left d-none d-xl-block">
                            <button
                                type="button"
                                className="js-navbar-vertical-aside-toggle-invoker close"
                                onClick={handleClick}
                            >
                                <i className="tio-first-page navbar-vertical-aside-toggle-short-align"></i>
                                <i className="tio-last-page navbar-vertical-aside-toggle-full-align"></i>
                            </button>
                        </div>
                    </div>

                    {/* Sidebar content */}
                    <div className="navbar-vertical-content" id="navbar-vertical-content">
                        <form className="sidebar--search-form">
                            <div className="search--form-group">
                                <button type="button" className="btn"><i className="tio-search"></i></button>
                                <input type="text" className="form-control form--control" placeholder="Search Menu..." />
                            </div>
                        </form>

                        <ul className="navbar-nav navbar-nav-lg nav-tabs">
                            <li className="navbar-vertical-aside-has-menu active show">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" to="/" title="Dashboard">
                                    <i className="tio-home-vs-1-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Dashboard</span>
                                </Link>
                            </li>

                            {/* POS Dropdown */}
                            <li className={`navbar-vertical-aside-has-menu ${isOpen ? "show" : ""}`}>
                                <a
                                    className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                                    href="#!"
                                    title="POS"
                                    onClick={handleDropdownToggle}
                                >
                                    <i className="tio-shopping nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">POS</span>
                                </a>

                                <ul
                                    className={`js-navbar-vertical-aside-submenu nav nav-sub ${isOpen ? "show" : ""}`}
                                    style={{ display: isOpen ? "block" : "none" }}
                                >
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/pos">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">New Sale</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/pos/orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate sidebar--badge-container">
                                                <span>Orders</span>
                                                <span className="badge badge-soft-info badge-pill ml-1">7</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <div className="nav-divider"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AdminSiderBar;
