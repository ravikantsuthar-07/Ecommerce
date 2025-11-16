import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "./AdminNavBar";
import AsideSidebar from "./AsideSilderBar";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsCollapsed(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const root = document.body;
        if (darkMode) {
            root.classList.add("bg-dark", "text-light");
            root.classList.remove("bg-light", "text-dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.add("bg-light", "text-dark");
            root.classList.remove("bg-dark", "text-light");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <div
            className={`min-vh-100 d-flex flex-column ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
            style={{
                transition: "background 0.4s ease, color 0.4s ease",
                background: darkMode
                    ? "linear-gradient(135deg, #0f0f0f, #1c1c1c)"
                    : "linear-gradient(135deg, #f9f9f9, #ececec)",
                overflowX: "hidden",
            }}
        >
            <AdminNavbar
                toggleSidebar={toggleSidebar}
                isCollapsed={isCollapsed}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <div className="d-flex flex-grow-1 position-relative" style={{ overflow: "hidden" }}>
                <AsideSidebar isCollapsed={isCollapsed} darkMode={darkMode} />

                <main
                    className="flex-grow-1 pt-5 px-sm-3 px-md-4 px-lg-5"
                    style={{
                        marginLeft: isCollapsed ? "50px" : "250px",
                        transition: "margin-left 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                        background: darkMode
                            ? "rgba(255, 255, 255, 0.03)"
                            : "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(12px)",
                        borderRadius: "12px 0 0 0",
                        boxShadow: darkMode
                            ? "0 0 25px rgba(255, 255, 255, 0.05)"
                            : "0 0 20px rgba(0, 0, 0, 0.08)",
                    }}
                >
                    <Container fluid className="p-1 p-sm-4">
                        <div
                            className={`rounded-4 ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}
                            style={{
                                transition: "all 0.3s ease",
                                padding: "1.2rem",
                                minHeight: "calc(100vh - 120px)",
                                boxShadow: darkMode
                                    ? "0 4px 20px rgba(255,255,255,0.05)"
                                    : "0 4px 30px rgba(0,0,0,0.08)",
                            }}
                        >
                            {children}
                        </div>
                    </Container>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
