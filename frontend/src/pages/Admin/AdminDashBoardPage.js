import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/Layouts/Admin/AdminLayout";
import DashboardOrdersStatus from "../../Components/Admin/DashboardOrdersStatus";
import OrderPieChart from "../../Components/Admin/Charts/OrderPieChart";
import EarningLineChart from "../../Components/Admin/Charts/EarningLineChart";
import RecentOrdersTable from "../../Components/Admin/ReacentOrder";
import TopCustomer from "../../Components/Admin/TopCustomer";
import TopSellingProduct from "../../Components/Admin/TopSellingProduct";

const AdminDashBoardPage = () => {
    const [counts, setCounts] = useState({
        pending: 5,
        confirmed: 10,
        packing: 8,
        outForDelivery: 4,
        delivered: 25,
        cancel: 3,
        returned: 2,
        failed: 1,
    });

    const [earningData, setEarningData] = useState([]);

    useEffect(() => {
        // Example: Replace with real API call later
        setEarningData([
            { month: "Jan", earning: 1200 },
            { month: "Feb", earning: 1800 },
            { month: "Mar", earning: 1500 },
            { month: "Apr", earning: 2100 },
            { month: "May", earning: 2400 },
            { month: "Jun", earning: 2000 },
        ]);
    }, []);

    const pieData = [
        { title: "Pending", value: counts.pending },
        { title: "Confirmed", value: counts.confirmed },
        { title: "Packing", value: counts.packing },
        { title: "Out for Delivery", value: counts.outForDelivery },
        { title: "Delivered", value: counts.delivered },
        { title: "Canceled", value: counts.cancel },
        { title: "Returned", value: counts.returned },
        { title: "Failed", value: counts.failed },
    ];

    return (
        <AdminLayout
            title="Admin Dashboard - Binjal Farm"
            author="Ravikant Suthar"
            description="Admin dashboard analytics"
            keywords="admin, dashboard"
        >
            <div className="py-3">
                {/* ✅ HEADER SECTION */}
                <div
                    className="page-header mb-4 p-3 rounded-4 shadow-sm"
                    style={{
                        background: "linear-gradient(135deg, #c8f7c5, #a3e4a6)",
                        borderLeft: "6px solid #4CAF50",
                        transition: "all 0.3s ease",
                    }}
                >
                    <h1 className="h5 fw-bold text-success mb-1">
                        👋 Welcome, Krishan Kant Sharma
                    </h1>
                    <p className="text-muted mb-0 small">
                        Manage your orders, monitor sales, and track performance at a glance.
                    </p>
                </div>

                {/* ✅ BUSINESS ANALYTICS */}
                <div
                    className="card border-0 shadow-sm mb-4 p-3"
                    style={{
                        borderRadius: "18px",
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <h5 className="fw-semibold mb-3 text-success">
                        📊 Business Analytics
                    </h5>
                    <DashboardOrdersStatus
                        countPending={counts.pending}
                        countConfirmed={counts.confirmed}
                        countPacking={counts.packing}
                        countOutForDelivery={counts.outForDelivery}
                        countDelivered={counts.delivered}
                        countCancel={counts.cancel}
                        countReturned={counts.returned}
                    />
                </div>

                {/* ✅ CHARTS ROW */}
                <div className="row g-3">
                    {/* Earnings Line Chart - hidden on mobile */}
                    <div className="d-none d-md-block col-12 col-lg-8">
                        <div
                            className="card border-0 shadow-sm p-3 h-100"
                            style={{
                                borderRadius: "18px",
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(8px)",
                                transition: "transform 0.2s ease-in-out",
                            }}
                        >
                            <h5 className="fw-semibold mb-3 text-primary">
                                💰 Earning Statistics
                            </h5>
                            <div className="chart-container" style={{ minHeight: "260px" }}>
                                <EarningLineChart data={earningData} />
                            </div>
                        </div>
                    </div>

                    {/* Order Status Pie Chart */}
                    <div className="col-12 col-lg-4">
                        <div
                            className="card border-0 shadow-sm p-3 h-100"
                            style={{
                                borderRadius: "18px",
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(8px)",
                                transition: "transform 0.2s ease-in-out",
                            }}
                        >
                            <h5 className="fw-semibold mb-3 text-info">
                                🧩 Order Status Overview
                            </h5>
                            <div className="chart-container d-flex justify-content-center">
                                <OrderPieChart data={pieData} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ✅ RECENT ORDERS SECTION */}
                <section className="mt-4">
                    <div className="row g-3">
                        <div className="col-12 col-lg-4">
                            <RecentOrdersTable
                                orders={[
                                    { id: "ORD-001", time: "10:30 AM", status: "Pending", icon: "🕒" },
                                    { id: "ORD-002", time: "11:15 AM", status: "Confirmed", icon: "✅" },
                                    { id: "ORD-003", time: "12:40 PM", status: "Delivered", icon: "📦" },
                                ]}
                            />
                        </div>
                        <div className="col-12 col-lg-4">
                            <TopCustomer
                                buyers={[
                                    { id: 1, name: "Amit Sharma", number: "+91 9876543210", avatar: "/avatar1.jpg", orders: 34 },
                                    { id: 2, name: "Sneha Patel", number: "+91 9876509876", avatar: "/avatar2.jpg", orders: 29 },
                                    { id: 3, name: "Rahul Mehta", number: "+91 9998887776", avatar: "/avatar3.jpg", orders: 21 },
                                ]}
                            />
                        </div>

                        <div className="col-12 col-lg-4">
                            <TopSellingProduct
                                products={[
                                    { id: 1, name: "Organic Mango", category: "Fruits", image: "/mango.jpg", quantity: 240 },
                                    { id: 2, name: "Fresh Milk (1L)", category: "Dairy", image: "/milk.jpg", quantity: 180 },
                                    { id: 3, name: "Pure Honey", category: "Natural", image: "/honey.jpg", quantity: 95 },
                                ]}
                            />
                        </div>

                    </div>
                </section>

                {/* ✅ FLOATING FOOTER FOR MOBILE */}
                <div
                    className="d-md-none position-fixed bottom-0 start-0 end-0 text-center py-2"
                    style={{
                        background: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(5px)",
                        fontSize: "0.85rem",
                        boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <span className="text-muted">
                        © {new Date().getFullYear()} Ravikant Suthar. All rights reserved.
                    </span>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashBoardPage;
