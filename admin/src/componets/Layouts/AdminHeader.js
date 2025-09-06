import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = ({isOpen, setIsOpen, handleClick}) => {
    const handleLogout = async () => { }



    return (
        <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered">
            <div className="navbar-nav-wrap">
                <div className="navbar-nav-wrap-content-left d-xl-none">
                    <button type="button" onClick={handleClick} className="js-navbar-vertical-aside-toggle-invoker close mr-3">
                        <i className="tio-first-page navbar-vertical-aside-toggle-short-align" data-toggle="tooltip" data-placement="right" title="" data-original-title="Collapse"></i>
                        <i className="tio-last-page navbar-vertical-aside-toggle-full-align" data-template="<div className=&quot;tooltip d-none d-sm-block&quot; role=&quot;tooltip&quot;><div className=&quot;arrow&quot;></div><div className=&quot;tooltip-inner&quot;></div></div>" data-toggle="tooltip" data-placement="right" title="" data-original-title="Expand"></i>
                    </button>
                </div>

                <div className="navbar-nav-wrap-content-right" >
                    <ul className="navbar-nav align-items-center flex-row">
                        <li className="nav-item mr-0" >
                            <div className="hs-unfold">
                                <div className="p-2">
                                    <div className="topbar-text dropdown disable-autohide text-capitalize">
                                        <a className="topbar-link dropdown-toggle lang-country-flag" href="#" data-toggle="dropdown">
                                            <img src="https://admin.binjalfarm.com/public/assets/admin/img/google_translate_logo.png" alt="" /> <span>en</span>
                                        </a>
                                        <ul className="dropdown-menu absolute">
                                            <li>
                                                <a className="dropdown-item pb-1 lang-country-flag" href="https://admin.binjalfarm.com/admin/lang/en">
                                                    <span>English</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                            <div className="hs-unfold">
                                <a className="js-hs-unfold-invoker btn btn-icon notify--icon" href="https://admin.binjalfarm.com/admin/message/list" data-hs-unfold-invoker="">
                                    <i className="tio-messages-outlined"></i>
                                    <span className="amount">
                                        0
                                    </span>
                                </a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <div className="hs-unfold">
                                <a className="js-hs-unfold-invoker btn btn-icon notify--icon" href="https://admin.binjalfarm.com/admin/orders/list/pending" data-hs-unfold-invoker="">
                                    <i className="tio-shopping-cart-outlined"></i>
                                    <span className="amount">
                                        0
                                    </span>
                                </a>
                            </div>
                        </li>


                        <li className="nav-item ml-4">
                            <div className="hs-unfold">
                                <a className="js-hs-unfold-invoker navbar-dropdown-account-wrapper" href="javascript:;" data-hs-unfold-options="{
                                     &quot;target&quot;: &quot;#accountNavbarDropdown&quot;,
                                     &quot;type&quot;: &quot;css-animation&quot;
                                   }" data-hs-unfold-target="#accountNavbarDropdown" data-hs-unfold-invoker="">
                                    <div className="cmn--media right-dropdown-icon d-flex align-items-center">
                                        <div className="media-body pl-0 pr-2">
                                            <span className="card-title h5 text-right">
                                                bhudev
                                                pareek
                                            </span>
                                            <span className="card-text">Master Admin</span>
                                        </div>
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="https://admin.binjalfarm.com/storage/app/public/admin/2025-03-06-67c99d61a0080.png" alt="Logo" />
                                            <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                                        </div>
                                    </div>
                                </a>

                                <div id="accountNavbarDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account w-16rem hs-unfold-content-initialized hs-unfold-css-animation animated hs-unfold-hidden" data-hs-target-height="188.375" data-hs-unfold-content="" data-hs-unfold-content-animation-in="slideInUp" data-hs-unfold-content-animation-out="fadeOut" style={{ animationDuration: "300ms" }}>
                                    <div className="dropdown-item-text">
                                        <div className="media align-items-center">
                                            <div className="avatar avatar-sm avatar-circle mr-2">
                                                <img className="avatar-img" src="https://admin.binjalfarm.com/storage/app/public/admin/2025-03-06-67c99d61a0080.png" alt="Admin" />
                                            </div>
                                            <div className="media-body">
                                                <span className="card-title h5">bhudev</span>
                                                <span className="card-text">ravikantsuthar4567@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown-divider"></div>

                                    <a className="dropdown-item" href="https://admin.binjalfarm.com/admin/settings">
                                        <span className="text-truncate pr-2" title="Settings">Settings</span>
                                    </a>

                                    <div className="dropdown-divider"></div>

                                    <Link onClick={handleLogout} className="dropdown-item" >
                                        <span className="text-truncate pr-2" title="Sign out">Sign out</span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    )
}

export default AdminHeader
