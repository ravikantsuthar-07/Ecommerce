import React, { useEffect, useState } from "react";
import AdminLayout from "../../componets/Layouts/AdminLayout";
import axios from "axios";

const VeriflyOfflinePaymentStatus = () => {
    const [methods, setMethods] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch methods from API (replace with your endpoint)
    useEffect(() => {
        axios
            .get("/api/offline-payments") // Laravel backend API
            .then((res) => setMethods(res.data))
            .catch((err) => console.error(err));
    }, []);

    // Handle toggle switch
    const handleToggle = async (id, currentStatus) => {
        const confirmMsg = currentStatus
            ? "Do you want to disable this method?"
            : "Do you want to activate this method?";

        if (window.confirm(confirmMsg)) {
            try {
                await axios.post(
                    `/api/offline-payments/${id}/status`,
                    { status: currentStatus ? 0 : 1 }
                );

                // Update state
                setMethods((prev) =>
                    prev.map((m) =>
                        m.id === id ? { ...m, status: currentStatus ? 0 : 1 } : m
                    )
                );
            } catch (error) {
                console.error("Error updating status:", error);
            }
        }
    };

    // Handle delete
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this method?")) {
            try {
                await axios.delete(`/api/offline-payments/${id}`);
                setMethods((prev) => prev.filter((m) => m.id !== id));
            } catch (error) {
                console.error("Error deleting method:", error);
            }
        }
    };

    // Filtered list
    const filteredMethods = methods.filter((m) =>
        m.method_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="content container-fluid">
                <div className="d-flex flex-wrap align-items-center mb-4">
                    <h2 className="h1 mb-0 d-flex align-items-center">
                        <img
                            width="20"
                            className="avatar-img"
                            src="https://admin.binjalfarm.com/public/assets/admin/img/all_orders.png"
                            alt="business_setup"
                        />
                        <span className="page-header-title ml-2 mb-0">
                            Offline Payment Method Setup
                        </span>
                    </h2>
                </div>

                <div className="row g-2">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <div className="input-group">
                                        <input
                                            type="search"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="form-control"
                                            placeholder="Search by method name"
                                        />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn--primary">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <div>
                                    <a
                                        href="/admin/business-settings/web-app/third-party/offline-payment/add"
                                        className="btn btn--primary"
                                    >
                                        <i className="tio-add"></i>Add New Method
                                    </a>
                                </div>
                            </div>

                            <div className="py-4">
                                <div className="table-responsive datatable-custom">
                                    <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>SL</th>
                                                <th>Payment Method Name</th>
                                                <th>Payment Info</th>
                                                <th>Required Info from Customer</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {filteredMethods.length > 0 ? (
                                                filteredMethods.map((method, index) => (
                                                    <tr key={method.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{method.method_name}</td>
                                                        <td>{method.payment_note || "N/A"}</td>
                                                        <td>
                                                            {method.required_info?.join(", ") || "N/A"}
                                                        </td>
                                                        <td className="text-center">
                                                            <label className="toggle-switch my-0">
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    checked={method.status === 1}
                                                                    onChange={() =>
                                                                        handleToggle(method.id, method.status)
                                                                    }
                                                                />
                                                                <span className="toggle-switch-label mx-auto text">
                                                                    <span className="toggle-switch-indicator"></span>
                                                                </span>
                                                            </label>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="btn--container justify-content-center">
                                                                <a
                                                                    className="action-btn"
                                                                    href={`/admin/business-settings/web-app/third-party/offline-payment/edit/${method.id}`}
                                                                >
                                                                    <i className="tio-edit"></i>
                                                                </a>
                                                                <button
                                                                    className="action-btn btn--danger btn-outline-danger"
                                                                    onClick={() => handleDelete(method.id)}
                                                                >
                                                                    <i className="tio-delete-outlined"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" className="text-center p-4">
                                                        <img
                                                            className="w-120px mb-3"
                                                            src="/assets/admin/svg/illustrations/sorry.svg"
                                                            alt="No Data"
                                                        />
                                                        <p className="mb-0">No Data to show</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default VeriflyOfflinePaymentStatus;
