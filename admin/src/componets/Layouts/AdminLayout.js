import React from 'react'
import AdminSiderBar from './AdminSiderBar';
import { Helmet } from 'react-helmet'
import AdminHeader from './AdminHeader';
import { Toaster } from 'react-hot-toast';

const AdminLayout = ({ children, title, keywords, author, description }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <AdminHeader />
            <AdminSiderBar />
            <div className="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-mobile-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-none" id="loading">
                            <div className="loader-image">
                                <img width="200" src="https://admin.binjalfarm.com/public/assets/admin/img/loader.gif" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main id='content' role='main' className="main pointer-event">
                <Toaster />
                {children}
            </main>
        </>
    )
}

export default AdminLayout
