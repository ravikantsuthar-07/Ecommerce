import React from 'react'

const ReacentOrder = () => {
    return (
        <div className="col-lg-4 col--xl-4">
            <div className="card h-100 bg-white">
                <div className="card-header border-0 order-header-shadow">
                    <h5 className="card-title d-flex justify-content-between flex-grow-1">
                        <span>Recent orders</span>
                        <a href="https://admin.binjalfarm.com/admin/orders/list/all" className="fz-12px font-medium text-006AE5">View all</a>
                    </h5>
                </div>
                <div className="card-body p-10px">
                    <ul className="recent--orders">
                        <li>
                            <a href="https://admin.binjalfarm.com/admin/orders/details/100128">
                                <div>
                                    <h6>Order #100128</h6>
                                    <span className="text-uppercase">05-26-2025  03:13 PM</span>
                                </div>
                                <span className="status text-0661cb">Pending</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://admin.binjalfarm.com/admin/orders/details/100127">
                                <div>
                                    <h6>Order #100127</h6>
                                    <span className="text-uppercase">05-24-2025  05:08 PM</span>
                                </div>
                                <span className="status text-0661cb">Pending</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://admin.binjalfarm.com/admin/orders/details/100126">
                                <div>
                                    <h6>Order #100126</h6>
                                    <span className="text-uppercase">05-23-2025  06:52 PM</span>
                                </div>
                                <span className="status text-0661cb">Pending</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://admin.binjalfarm.com/admin/orders/details/100125">
                                <div>
                                    <h6>Order #100125</h6>
                                    <span className="text-uppercase">05-23-2025  03:53 PM</span>
                                </div>
                                <span className="status text-0661cb">Pending</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://admin.binjalfarm.com/admin/orders/details/100124">
                                <div>
                                    <h6>Order #100124</h6>
                                    <span className="text-uppercase">05-23-2025  03:52 PM</span>
                                </div>
                                <span className="status text-0661cb">Pending</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReacentOrder
