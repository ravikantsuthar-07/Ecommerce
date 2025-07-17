import React from 'react'
import { Link } from 'react-router-dom'

const DashboardOrdersStatus = ({countPending, countConfirmed, countPacking, countOutForDelivery, countDelivered, countCencel, countReturned, countFaild}) => {
    return (
        <div className="row g-2" id="order_stats">
            <div className="col-sm-6 col-lg-3">
                <Link className="dashboard--card h-100" to="/admin/orders/list/pending">
                    <h6 className="subtitle">Pending</h6>
                    <h2 className="title">
                        {countPending}
                    </h2>
                    <img src="https://admin.binjalfarm.com/public/assets/admin/img/dashboard/pending.png" alt="" className="dashboard-icon" />
                </Link>
            </div>

            <div className="col-sm-6 col-lg-3">
                <Link className="dashboard--card h-100" to="/admin/orders/list/confirmed">
                    <h6 className="subtitle">Confirmed</h6>
                    <h2 className="title">
                        {countConfirmed}
                    </h2>
                    <img src="https://admin.binjalfarm.com/public/assets/admin/img/dashboard/confirmed.png" alt="" className="dashboard-icon" />
                </Link>
            </div>

            <div className="col-sm-6 col-lg-3">
                <Link className="dashboard--card h-100" to="admin/orders/list/processing">
                    <h6 className="subtitle">Packaging</h6>
                    <h2 className="title">
                        {countPacking}
                    </h2>
                    <img src="https://admin.binjalfarm.com/public/assets/admin/img/dashboard/packaging.png" alt="" className="dashboard-icon" />
                </Link>
            </div>

            <div className="col-sm-6 col-lg-3">
                <Link className="dashboard--card h-100" to="admin/orders/list/out_for_delivery">
                    <h6 className="subtitle">Out for delivery</h6>
                    <h2 className="title">
                        {countOutForDelivery}
                    </h2>
                    <img src="https://admin.binjalfarm.com/public/assets/admin/img/dashboard/out-for-delivery.png" alt="" className="dashboard-icon" />
                </Link>
            </div>

            <div className="col-sm-6 col-lg-3">
                <Link className="order--card h-100" to="admin/orders/list/delivered">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="card-subtitle d-flex justify-content-between m-0 align-items-center">
                            <img src="https://admin.binjalfarm.com/public/assets/admin/img/delivery/1.png" alt="dashboard" className="oder--card-icon" />
                            <span>Delivered</span>
                        </h6>
                        <span className="card-title text-success">
                            {countDelivered}
                        </span>
                    </div>
                </Link>
            </div>

            <div className="col-sm-6 col-lg-3">
                <Link className="order--card h-100" to="admin/orders/list/canceled">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="card-subtitle d-flex justify-content-between m-0 align-items-center">
                            <img src="https://admin.binjalfarm.com/public/assets/admin/img/delivery/2.png" alt="Dashboard" className="oder--card-icon" />
                            <span>Canceled</span>
                        </h6>
                        <span className="card-title text-danger">
                            {countCencel}
                        </span>
                    </div>
                </Link>
            </div>

            <div className="col-sm-6 col-lg-3">
                <Link className="order--card h-100" to="admin/orders/list/returned">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="card-subtitle d-flex justify-content-between m-0 align-items-center">
                            <img src="https://admin.binjalfarm.com/public/assets/admin/img/delivery/3.png" alt="Dashboard" className="oder--card-icon" />
                            <span>Returned</span>
                        </h6>
                        <span className="card-title text-warning">
                            {countReturned}
                        </span>
                    </div>
                </Link>
            </div>
            <div className="col-sm-6 col-lg-3">
                <Link className="order--card h-100" to="admin/orders/list/failed">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="card-subtitle d-flex justify-content-between m-0 align-items-center">
                            <img src="https://admin.binjalfarm.com/public/assets/admin/img/delivery/4.png" alt="Dashboard" className="oder--card-icon" />
                            <span>Failed to Delivered</span>
                        </h6>
                        <span className="card-title text-danger">
                            {countFaild}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default DashboardOrdersStatus
