import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AdminHeader from './AdminHeader';
import AdminSiderBar from './AdminSiderBar';
import Adminfooter from './Adminfooter';
import { Toaster } from 'react-hot-toast';

const AdminLayout = ({ children, title, keywords, author, description }) => {
    const [skin, setSkin] = useState(localStorage.getItem('skin') || 'default');
    const [sidebarMode, setSidebarMode] = useState(localStorage.getItem('sidebarMode') || 'default');
    const [headerMode, setHeaderMode] = useState(localStorage.getItem('headerMode') || 'default');
    const [isOpen, setIsOpen] = useState(false);

    // Toggle POS dropdown
    const handleDropdownToggle = () => setIsOpen((prev) => !prev);

    // Sidebar toggle
    const handleClick = () => {
        const isMobile = window.innerWidth <= 768;
        console.log("Window width:", window.innerWidth);

        if (isMobile) {
            // Toggle between closed and default for mobile
            setSidebarMode((prev) => (prev === 'closed' ? 'default' : 'closed'));
        } else {
            // Toggle between mini and default for desktop
            setSidebarMode((prev) => (prev === 'mini' ? 'default' : 'mini'));
        }
    };

    useEffect(() => {
        const body = document.body;
        body.classList.remove(
            'navbar-vertical-aside-mini-mode',
            'navbar-vertical-aside-closed-mode',
            'header-double'
        );

        if (sidebarMode === 'mini') {
            body.classList.add('navbar-vertical-aside-mini-mode');
        } else if (sidebarMode === 'closed') {
            body.classList.add('navbar-vertical-aside-closed-mode');
        }

        if (headerMode === 'double') {
            body.classList.add('header-double');
        }

        if (skin === 'navbar-dark') {
            body.classList.add('navbar-dark');
        } else {
            body.classList.remove('navbar-dark');
        }

        localStorage.setItem('skin', skin);
        localStorage.setItem('sidebarMode', sidebarMode);
        localStorage.setItem('headerMode', headerMode);
    }, [skin, sidebarMode, headerMode]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>

            {/* Header */}
            <AdminHeader
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleClick={handleClick}
                skin={skin}
                setSkin={setSkin}
                headerMode={headerMode}
                setHeaderMode={setHeaderMode}
            />

            {/* Sidebar */}
            <AdminSiderBar
                handleClick={handleClick}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleDropdownToggle={handleDropdownToggle}
                sidebarMode={sidebarMode}
                setSidebarMode={setSidebarMode}
            />

            {/* Main Content */}
            <main id="content" role="main" className="main pointer-event">
                <Toaster />
                {children}
                <Adminfooter />
            </main>
        </>
    );
};

export default AdminLayout;
