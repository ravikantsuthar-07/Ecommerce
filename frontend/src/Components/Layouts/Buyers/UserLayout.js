import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const UserLayout = ({ children }) => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light text-dark">
      <NavBar />

      <main className=" container-lg flex-grow-1">{children}</main>

      <Footer />
    </div>
  );
};

export default UserLayout;
