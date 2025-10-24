import React from "react";

const NavBar = () => {
    const menuItems = [
        "Home",
        "About Us",
        "Products Category",
        "List of Spices",
        "Latest Offer",
        "1 kg Special Offer",
        "Gift Boxes",
        "Blog",
        "Corporate Gift Boxes",
        "Millets",
    ];

    return (
        <nav className="bg-yellow-600 text-white">
            <div className="max-w-7xl mx-auto flex justify-center space-x-8 py-3 text-sm font-medium">
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="hover:text-yellow-200 transition-colors duration-200"
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
