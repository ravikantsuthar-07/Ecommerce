import React from 'react'
import NavBar from './NavBar'
import Header from './Header'

const UserLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <NavBar />
            {/* Main content here */}
            <div className="p-6 text-center text-gray-700">
                <h1 className="text-2xl font-bold">Welcome to Kerala Spices Online</h1>
            </div>
        </div>

    )
}

export default UserLayout
