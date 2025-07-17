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

    useEffect(() => {
        document.body.classList.add('footer-offset', 'has-navbar-vertical-aside');

        // Skin based styling
        if (skin === 'navbar-dark') {
            document.body.classList.add('navbar-dark');
        } else {
            document.body.classList.remove('navbar-dark');
        }

        // Sidebar mode
        if (sidebarMode === 'mini') {
            document.body.classList.add('navbar-vertical-aside-mini-mode');
        } else {
            document.body.classList.remove('navbar-vertical-aside-mini-mode');
        }

        // Header mode adjustments
        if (headerMode === 'double') {
            document.body.classList.add('header-double');
        } else {
            document.body.classList.remove('header-double');
        }

        // Save to localStorage
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
                skin={skin}
                setSkin={setSkin}
                headerMode={headerMode}
                setHeaderMode={setHeaderMode}
            />

            {/* Sidebar */}
            <AdminSiderBar sidebarMode={sidebarMode} setSidebarMode={setSidebarMode} />

            {/* Main Content */}
            <main id='content' role='main' className="main pointer-event">
                <Toaster />
                {children}
                <Adminfooter />
            </main>
        </>
    );
};

export default AdminLayout;
