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
    const [isOpen, setIsOpen] = useState(null);

    const handleDropdownToggle = (menu) => {
        setIsOpen((prev) => (prev === menu ? null : menu));
    };

    const handleClick = () => {
        const isMobile = window.innerWidth <= 768;
        console.log("Window width:", window.innerWidth);

        if (isMobile) {
            setSidebarMode((prev) => (prev === 'closed' ? 'default' : 'closed'));
        } else {
            setSidebarMode((prev) => (prev === 'mini' ? 'default' : 'mini'));
        }
    };

    useEffect(() => {
        const body = document.body;
        const baseClasses = [
            'footer-offset',
            'has-navbar-vertical-aside',
            'navbar-vertical-aside-show-xl',
        ];

        body.className = '';

        body.classList.add(...baseClasses);

        const isMobile = window.innerWidth < 992;

        if (isMobile) {
            if (sidebarMode === 'closed') {
                body.classList.add('navbar-vertical-aside-closed-mode');
            }
        } else {
            if (sidebarMode === 'mini') {
                body.classList.add('navbar-vertical-aside-mini-mode');
            } else if (sidebarMode === 'closed') {
                body.classList.add('navbar-vertical-aside-closed-mode');
            }
        }

        // Header mode
        if (headerMode === 'double') {
            body.classList.add('header-double');
        }

        // Skin mode
        if (skin === 'navbar-dark') {
            body.classList.add('navbar-dark');
        }

        // Save preferences
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
