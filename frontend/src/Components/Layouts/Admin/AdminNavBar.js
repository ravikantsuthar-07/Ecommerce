import React, { useState, useEffect, useRef } from "react";
import { Navbar, Container, Button, Dropdown } from "react-bootstrap";
import ThemeToggle from "./TheamToggle";

const AdminNavbar = ({ toggleSidebar, isCollapsed }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <Navbar
            bg="white"
            expand="lg"
            fixed="top"
            className="shadow-sm py-2 px-3 border-bottom"
            style={{ zIndex: 1050 }}
        >
            <Container fluid className="d-flex align-items-center justify-content-between">
                {/* Sidebar Toggle + Title (mobile adaptive) */}
                <div className="d-flex align-items-center gap-2">
                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={toggleSidebar}
                        className="d-flex align-items-center rounded-circle p-2"
                        style={{
                            width: "36px",
                            height: "36px",
                            justifyContent: "center",
                        }}
                    >
                        {isCollapsed ? (
                            <i className="fa-solid fa-bars"></i>
                        ) : (
                            <i className="fa-solid fa-xmark"></i>
                        )}
                    </Button>

                    <Navbar.Brand
                        className="fw-bold text-primary mb-0 fs-6 d-none d-sm-inline"
                        style={{ letterSpacing: "0.5px" }}
                    >
                        Seller Dashboard
                    </Navbar.Brand>
                </div>

                {/* Right Side Controls */}
                <div
                    className="d-flex align-items-center gap-2 gap-sm-3"
                    ref={dropdownRef}
                >
                    {/* Theme Toggle (hidden text, icon only on mobile) */}
                    <div className="d-flex align-items-center">
                        <ThemeToggle />
                    </div>

                    {/* Profile Dropdown */}
                    <Dropdown
                        align="end"
                        show={isDropdownOpen}
                        onToggle={toggleDropdown}
                    >
                        <Dropdown.Toggle
                            variant="light"
                            id="dropdown-profile"
                            className="d-flex align-items-center border-0 bg-transparent p-0"
                            onClick={toggleDropdown}
                        >
                            <div
                                className="bg-primary bg-opacity-10 p-2 rounded-circle d-flex justify-content-center align-items-center"
                                style={{ width: "36px", height: "36px" }}
                            >
                                <i className="fa-solid fa-user text-primary fs-5"></i>
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                            className="shadow border-0 rounded-3 mt-2 animate__animated animate__fadeIn"
                            style={{
                                minWidth: "180px",
                                backgroundColor: "var(--bs-body-bg)",
                            }}
                        >
                            <Dropdown.Header className="fw-semibold text-center">
                                👋 Welcome, Admin
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#settings">
                                <i className="fa-solid fa-gear me-2 text-muted"></i> Settings
                            </Dropdown.Item>
                            <Dropdown.Item href="#account">
                                <i className="fa-solid fa-user me-2 text-muted"></i> Account
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item
                                href="#logout"
                                className="text-danger fw-semibold"
                            >
                                <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar;
