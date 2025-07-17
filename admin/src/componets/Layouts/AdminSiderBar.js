import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AdminSiderBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleToggle = () => {
        const body = document.body;
        if (body.classList.contains('navbar-vertical-aside-mini-mode')) {
            body.classList.remove('navbar-vertical-aside-mini-mode');
            body.classList.add('header-double');
        } else {
            body.classList.remove('header-double');
            body.classList.add('navbar-vertical-aside-mini-mode');
        }
    };

    const handleToggleBodyClass = () => {
        const body = document.body;
        const isClosed = body.classList.contains('navbar-vertical-aside-closed-mode');

        if (isClosed) {
            // 🟢 OPEN sidebar - reset body to fully open state
            body.classList.remove(
                'navbar-vertical-aside-closed-mode',
                'navbar-vertical-aside-mini-mode',
                'header-double'
            );
        } else {
            // 🔴 CLOSE sidebar - add closed and mini-mode
            body.classList.add(
                'navbar-vertical-aside-closed-mode',
                'navbar-vertical-aside-mini-mode'
            );
        }
    };


    const handleClick = () => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            handleToggleBodyClass();
        } else {
            handleToggle();
        }
    };



    return (

        <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered default navbar-vertical-aside-initialized">
            <div className="navbar-vertical-container text-capitalize">
                <div className="navbar-vertical-footer-offset">
                    <div className="navbar-brand-wrapper justify-content-between">

                        <Link className="navbar-brand" href="/admin" aria-label="Front">
                            <img className="w-100 side-logo" src="https://admin.binjalfarm.com/storage/app/public/shop/2025-04-20-6804aabab7259.png" alt="Logo" />
                        </Link>

                        <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark" onCanPlay={handleClick}>
                            <i className="tio-clear tio-lg" onClick={handleClick}></i>
                        </button>
                        <div className="navbar-nav-wrap-content-left d-none d-xl-block">
                            <button type="button" className="js-navbar-vertical-aside-toggle-invoker close" onClick={handleClick}>
                                <i className="tio-first-page navbar-vertical-aside-toggle-short-align" data-toggle="tooltip" data-placement="right" title="" data-original-title="Collapse"></i>
                                <i className="tio-last-page navbar-vertical-aside-toggle-full-align"></i>
                            </button>
                        </div>
                    </div>

                    <div className="navbar-vertical-content" id="navbar-vertical-content">
                        <form className="sidebar--search-form">
                            <div className="search--form-group">
                                <button type="button" className="btn"><i className="tio-search"></i></button>
                                <input type="text" className="form-control form--control" placeholder="Search Menu..." id="search-sidebar-menu" />
                            </div>
                        </form>
                        <ul className="navbar-nav navbar-nav-lg nav-tabs">
                            <li className="navbar-vertical-aside-has-menu active show">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" to="/" title="Dashboard">
                                    <i className="tio-home-vs-1-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Dashboard
                                    </span>
                                </Link>
                            </li>

                            <li className={`navbar-vertical-aside-has-menu ${isOpen ? "show" : ""}`}>
                                <a
                                    className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle"
                                    href="#!"
                                    title="POS"
                                    onClick={handleDropdownToggle}
                                >
                                    <i className="tio-shopping nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">POS</span>
                                </a>

                                <ul
                                    className={`js-navbar-vertical-aside-submenu nav nav-sub ${isOpen ? "show" : ""}`}
                                    style={{
                                        transition: "unset",
                                        display: isOpen ? "block" : "none",
                                    }}
                                >
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/pos" title="New Sale">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">New Sale</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/admin/pos/orders" title="Orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate sidebar--badge-container">
                                                <span>Orders</span>
                                                <span className="badge badge-soft-info badge-pill ml-1">7</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <small className="nav-subtitle">Order management</small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/verify-offline-payment/pending" title="Verify Offline Payment">
                                    <i className="tio-shopping-basket nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Verify Offline Payment
                                    </span>
                                </Link>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Orders">
                                    <i className="tio-shopping-cart nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Orders
                                    </span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>
                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/orders/list/all" title="All orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate sidebar--badge-container">
                                                <span>All</span>
                                                <span className="badge badge-info badge-pill ml-1">
                                                    122
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/orders/list/pending" title="Pending orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate sidebar--badge-container">
                                                <span>Pending</span>
                                                <span className="badge badge-soft-info badge-pill ml-1">
                                                    54
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/orders/list/confirmed" title="Confirmed orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate sidebar--badge-container">
                                                <span>Confirmed</span>
                                                <span className="badge badge-soft-success badge-pill ml-1">
                                                    5
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/orders/list/processing" title="Processing orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate  sidebar--badge-container">
                                                <span>Packaging</span>
                                                <span className="badge badge-soft-warning badge-pill ml-1">
                                                    3
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/orders/list/out_for_delivery" title="Out for delivery orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate  sidebar--badge-container">
                                                <span>Out for delivery</span>
                                                <span className="badge badge-soft-warning badge-pill ml-1">
                                                    0
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/orders/list/delivered" title="Delivered orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate  sidebar--badge-container">
                                                <span>Delivered</span>
                                                <span className="badge badge-soft-success badge-pill ml-1">
                                                    45
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/orders/list/returned" title="Returned orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate  sidebar--badge-container">
                                                <span>Returned</span>
                                                <span className="badge badge-soft-danger badge-pill ml-1">
                                                    4
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/orders/list/failed" title="Failed orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate  sidebar--badge-container">
                                                <span>Failed</span>
                                                <span className="badge badge-soft-danger badge-pill ml-1">
                                                    0
                                                </span>
                                            </span>
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/orders/list/canceled" title="Canceled orders">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate  sidebar--badge-container">
                                                <span>Canceled</span>
                                                <span className="badge badge-soft-light badge-pill ml-1">
                                                    11
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <small className="nav-subtitle">Product management </small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Category setup">
                                    <i className="tio-category nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Category setup</span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/category/add" title="Categories">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Categories</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/category/add-sub-category" title="Sub categories">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Sub categories</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Product setup">
                                    <i className="tio-premium-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Product setup</span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/attribute/add-new" title="Product attribute">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Product attribute</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item  ">
                                        <Link className="nav-link " href="/admin/product/list" title="List">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Product list</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/product/bulk-import" title="Bulk import">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Bulk import</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/product/bulk-export-index" title="Bulk export">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Bulk export</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/product/limited-stock" title="Limited Stocks">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Limited Stocks</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <small className="nav-subtitle">Promotion management </small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/banner/add-new" title="Banner">
                                    <i className="tio-image nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Banner</span>
                                </Link>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/coupon/add-new" title="Coupons">
                                    <i className="tio-gift nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Coupons</span>
                                </Link>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/notification/add-new" title="Send notifications">
                                    <i className="tio-notifications nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Send Notifications
                                    </span>
                                </Link>
                            </li>
                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/offer/flash-index" title="Flash sale">
                                    <i className="tio-alarm-alert nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Flash sale
                                    </span>
                                </Link>
                            </li>


                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/discount/add-new" title="Category discount">
                                    <i className="tio-layers-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Category discount</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <small className="nav-subtitle" title="Layouts">Help &amp; Support Section</small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/message/list" title="Messages">
                                    <i className="tio-messages nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Messages
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <small className="nav-subtitle" title="Documentation">Report and analytics</small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="nav-link " href="/admin/report/sale-report" title="Sale Report">
                                    <span className="tio-chart-bar-1 nav-icon"></span>
                                    <span className="text-truncate">Sales Report</span>
                                </Link>
                            </li>
                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="nav-link " href="/admin/report/order" title="Order Report">
                                    <span className="tio-chart-bar-2 nav-icon"></span>
                                    <span className="text-truncate">Order Report</span>
                                </Link>
                            </li>
                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="nav-link " href="/admin/report/earning" title="Earning Report">
                                    <span className="tio-chart-pie-1 nav-icon"></span>
                                    <span className="text-truncate">Earning Report</span>
                                </Link>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="nav-link " href="/admin/report/expense" title="Expense Report">
                                    <span className="tio-chart-bar-4 nav-icon"></span>
                                    <span className="text-truncate">Expense Report</span>
                                </Link>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Analytics">
                                    <i className="tio-chart-donut-2 nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Analytics</span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/analytics/keyword-search?date_range=today&amp;date_range_2=today" title="Keyword-search">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Keyword Search</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/analytics/customer-search?date_range=today&amp;date_range_2=today" title="Customer-search">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Customer search</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item">
                                <small className="nav-subtitle" title="Documentation">User management</small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/customer/list" title="Customer List">
                                    <i className="tio-poi-user nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Customer List
                                    </span>
                                </Link>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Customer Wallet">
                                    <i className="tio-wallet-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Customer Wallet
                                    </span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/customer/wallet/add-fund" title="Add fund">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                Add fund
                                            </span>
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/customer/wallet/report" title="Report">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                Report
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/customer/wallet/bonus/index" title="Wallet bonus setup">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                Wallet bonus setup
                                            </span>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Customer Loyalty Point">
                                    <i className="tio-medal nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Customer Loyalty Point
                                    </span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/customer/loyalty-point/report" title="Report">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                Report
                                            </span>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/reviews/list" title="Product Reviews">
                                    <i className="tio-star nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Product Reviews
                                    </span>
                                </Link>
                            </li>
                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/customer/subscribed-emails" title="Subscribed Emails">
                                    <i className="tio-email-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Subscribed Emails
                                    </span>
                                </Link>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Deliveryman">
                                    <i className="tio-user nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Deliveryman
                                    </span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/delivery-man/list" title="List">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                Delivery Man List
                                            </span>
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/delivery-man/add" title="Register">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                Add New Delivery Man
                                            </span>
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/delivery-man/pending/list" title="Joining request">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                New Joining Request
                                            </span>
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/delivery-man/reviews/list" title="Reviews">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                Delivery Man Reviews
                                            </span>
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Employees">
                                    <i className="tio-incognito nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Employees
                                    </span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/custom-role/create" title="Employee Role Setup">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                Employee Role Setup</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <Link className="nav-link" href="/admin/employee/list" title="List">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Employee List</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/employee/add-new" title="Add new">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Add New Employee</span>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <small className="nav-subtitle" title="Layouts">System setting</small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                            </li>

                            <li className="navbar-vertical-aside-has-menu ">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link" href="/admin/business-settings/store/ecom-setup" title="Business Setup">
                                    <i className="tio-settings nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                        Business Setup
                                    </span>
                                </Link>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Branch Setup">
                                    <i className="tio-shop nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Branch Setup</span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/branch/add-new" title="Add New">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Add New</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/branch/list" title="List">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">List</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Blog Setup">
                                    <i className="tio-notebook-bookmarked nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Blog Setup</span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/blog/add-new" title="Add New">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Add New</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/blog/list" title="List">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">List</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Branch Setup">
                                    <i className="tio-website nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">3rd Party</span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>
                                    <li className="nav-item ">

                                        <Link className="nav-link " href="/admin/business-settings/web-app/payment-method" title="3rd party configuration">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">3rd party configuration</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/business-settings/web-app/third-party/fcm-index" title="Push Notification">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Push Notification</span>
                                        </Link>
                                    </li>


                                </ul>
                            </li>

                            <li className="navbar-vertical-aside-has-menu">
                                <Link className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" href="javascript:" title="Pages &amp; Media">
                                    <i className="tio-pages-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Pages &amp; Media</span>
                                </Link>
                                <ul className="js-navbar-vertical-aside-submenu nav nav-sub" style={{ display: "none" }}>
                                    <li className="nav-item mt-0 ">
                                        <Link className="nav-link" href="/admin/business-settings/page-setup/about-us" title="Page Setup">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Page Setup</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " href="/admin/business-settings/web-app/third-party/social-media" title="Social Media">
                                            <span className="tio-circle nav-indicator-icon"></span>
                                            <span className="text-truncate">Social Media</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item mt-0
                                ">
                                <Link className="nav-link" href="/admin/business-settings/web-app/system-setup/language" title="System settings">
                                    <i className="tio-security-on-outlined nav-icon"></i>
                                    <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">System setup</span>
                                </Link>
                            </li>


                            <li className="nav-item">
                                <div className="nav-divider"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AdminSiderBar
