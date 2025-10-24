import React from "react";
// import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    {/* <img src={logo} alt="KSO Logo" className="w-20 h-auto" /> */}
                </div>

                {/* Search Bar */}
                <div className="flex-grow max-w-xl mx-6">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-yellow-400"
                    />
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-600">
                        {/* <User className="w-5 h-5" /> */}
                        <span>My Account</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-600">
                        {/* <HelpCircle className="w-5 h-5" /> */}
                        <span>Customer Help</span>
                    </div>
                    <div className="relative cursor-pointer hover:text-yellow-600">
                        {/* <ShoppingCart className="w-5 h-5" /> */}
                        <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full px-1">
                            0
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
