import React, { useEffect, useState } from 'react'
import AdminLayout from '../componets/Layouts/AdminLayout'
import TopCustomer from '../componets/Partials/TopCustomer'
import MostRelatedProduct from '../componets/Partials/MostRelatedProduct'
import TopSellingProduct from '../componets/Partials/TopSellingProduct'
import ReacentOrder from '../componets/Partials/ReacentOrder'
import DashboardOrdersStatus from '../componets/Partials/DashboardOrdersStatus'
import { PieChart } from 'react-minimal-pie-chart';
import { useAuth } from '../Contexts/authContext';
import axios from 'axios'
import toast from 'react-hot-toast'


const AdminDashboard = () => {
    const [countPending, setCountPending] = useState("");
    const [countConfirmed, setCountConfirmed] = useState("");
    const [countPacking, setCountPacking] = useState("");
    const [countOutForDelivery, setCountOutForDelivery] = useState("");
    const [countDelivered, setCountDelivered] = useState("");
    const [countCencel, setCountCencel] = useState("");
    const [countReturned, setCountReturned] = useState("");
    const [countFaild, setCountFaild] = useState("");

    const [auth] = useAuth();

    const gettingOrderCountCount = async (key) => {
        try {
            const { data } = await axios.get(`/api/v1/orders/counts/${key}`, {
                headers: {
                    Authorization: auth.token,
                }
            });
            if (data?.success) {
                if (key === 'pending') {
                    setCountPending(data?.results)
                } else if (key === 'confirmed') {
                    setCountConfirmed(data?.results)
                } else if (key === 'packing') {
                    setCountPacking(data?.results);
                } else if (key === 'outForDelivery') {
                    setCountOutForDelivery(data?.results);
                } else if (key === 'delivered') {
                    setCountDelivered(data?.results);
                } else if (key === 'cencel') {
                    setCountCencel(data?.results)
                } else if (key === 'returned') {
                    setCountReturned(data?.results)
                } else if (key === 'failed') {
                    setCountFaild(data?.results)
                }
            } else {
                toast.error(data?.message)
            }
        } catch (error) {
            toast.error(error?.responce?.data?.message);
        }

    }

    useEffect(() => {
        gettingOrderCountCount('pending');
        gettingOrderCountCount('confirmed');
        gettingOrderCountCount('outForDelivery');
        gettingOrderCountCount('packing');
        gettingOrderCountCount('delivered');
        gettingOrderCountCount('cencel');
        gettingOrderCountCount('returned');
        gettingOrderCountCount('failed');
    }, [])

    return (
        <AdminLayout>
            <div className="content container-fluid">
                <div className="page-header mb-0 pb-2 border-0">
                    <h1 className="page-header-title text-107980">Welcome, bhudev</h1>
                    <p className="welcome-msg">Welcome message</p>
                </div>

                <div className="card mb-10px">
                    <div className="card-body">
                        <div className="btn--container justify-content-between align-items-center mb-2 pb-1">
                            <h5 className="card-title mb-2">
                                <img src="https://admin.binjalfarm.com/public/assets/admin/img/business-analytics.png" alt="" className="Card-icon" />
                                Business Analytics
                            </h5>
                            <div className="mb-2">
                                <select className="custom-select statistics-type-select" name="statistics_type">
                                    <option value="overall">
                                        Overall Statistics
                                    </option>
                                    <option value="today">
                                        Today's Statistics
                                    </option>
                                    <option value="this_month">
                                        This Month's Statistics
                                    </option>
                                </select>
                            </div>
                        </div>
                        <DashboardOrdersStatus countPending = {countPending} countConfirmed = {countConfirmed} countPacking = {countPacking} countOutForDelivery = {countOutForDelivery} countDelivered = {countDelivered} countCencel = {countCencel} countReturned = {countReturned} countFaild = {countFaild}  />
                    </div>
                </div>

                <div className="dashboard-statistics">
                    <div className="row g-1">
                        <div className="col-lg-8 col--xl-8">
                            <div className="card h-100 bg-white">
                                <div className="card-body p-20px pb-0">
                                    <div className="btn--container justify-content-between align-items-center">
                                        <h5 className="card-title mb-2">
                                            <img src="https://admin.binjalfarm.com/public/assets/admin/img/order-statistics.png" alt="" className="card-icon" />
                                            <span>Order statistics</span>
                                        </h5>
                                        <div className="mb-2">
                                            <div className="d-flex flex-wrap statistics-btn-grp">
                                                <label>
                                                    <input type="radio" name="order__statistics" hidden checked="" />
                                                    <span className="order-type" data-order-type="yearOrder">This Year</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="order__statistics" hidden />
                                                    <span className="order-type" data-order-type="MonthOrder">This Month</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="order__statistics" hidden />
                                                    <span className="order-type" data-order-type="WeekOrder">This Week</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="updatingOrderData">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col--xl-4">
                            <div className="card h-100 bg-white">
                                <div className="card-header border-0 order-header-shadow">
                                    <h3 className="card-title">
                                        <span>Order status statistics</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="position-relative pie-chart">

                                        <div className="total--orders">
                                            <h3>129 </h3>
                                            <span>Orders</span>
                                        </div>
                                    </div>
                                    <PieChart
                                        data={[
                                            { title: 'Pending', value: countPending, color: '#E5F5F1' },
                                            { title: 'Confirmed', value: countConfirmed, color: '#036BB7' },
                                            { title: 'Packaging', value: countPacking, color: '#107980' },
                                            { title: 'Out for Delivery', value: countOutForDelivery, color: '#0e0def' },
                                            { title: 'Delivered', value: countDelivered, color: '#ff00ff' },
                                            { title: 'Cenceled', value: countCencel, color: '#f51414' },
                                            { title: 'Rturned', value: countReturned, color: '#C13C37' },
                                            { title: 'Failed', value: countFaild, color: '#6A2135' },
                                        ]}
                                    />;
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col--xl-8">
                            <div className="card h-100 bg-white">
                                <div className="card-body p-20px pb-0">
                                    <div className="btn--container justify-content-between align-items-center">
                                        <h5 className="card-title mb-2">
                                            <img src="https://admin.binjalfarm.com/public/assets/admin/img/order-statistics.png" alt="" className="card-icon" />
                                            <span>Earning statistics</span>
                                        </h5>
                                        <div className="mb-2">
                                            <div className="d-flex flex-wrap statistics-btn-grp">
                                                <label>
                                                    <input type="radio" name="earning__statistics" hidden checked="" />
                                                    <span className="earning-statistics" data-earn-type="yearEarn">This Year</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="earning__statistics" hidden />
                                                    <span className="earning-statistics" data-earn-type="MonthEarn">This Month</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="earning__statistics" hidden />
                                                    <span className="earning-statistics" data-earn-type="WeekEarn">This Week</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="updatingData">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <ReacentOrder />

                        <TopSellingProduct />

                        <MostRelatedProduct />

                        <TopCustomer />
                    </div>
                </div>


                <div className="modal fade" id="popup-modal">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="text-center">
                                            <h2 className="order-check-colour">
                                                <i className="tio-shopping-cart-outlined"></i> You have new order  Check Please.
                                            </h2>
                                            <hr />
                                            <button id="check-order" className="btn btn-primary">Ok  let me check</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    )
}

export default AdminDashboard
