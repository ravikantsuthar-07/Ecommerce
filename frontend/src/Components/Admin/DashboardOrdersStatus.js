import React from "react";

const DashboardOrdersStatus = ({
    countPending,
    countConfirmed,
    countPacking,
    countOutForDelivery,
    countDelivered,
    countCancel,
    countReturned,
}) => {
    const statusList = [
        { label: "Pending", count: countPending, color: "warning" },
        { label: "Confirmed", count: countConfirmed, color: "info" },
        { label: "Packing", count: countPacking, color: "secondary" },
        { label: "Out for Delivery", count: countOutForDelivery, color: "primary" },
        { label: "Delivered", count: countDelivered, color: "success" },
        { label: "Canceled", count: countCancel, color: "danger" },
        { label: "Returned", count: countReturned, color: "dark" },
    ];

    return (
        <div className="row g-2">
            {statusList.map((status, i) => (
                <div key={i} className="col-12 col-md-3">
                    <div className={`card border-${status.color} shadow-sm`}>
                        <div className="card-body text-center py-3">
                            <h5 className={`text-${status.color} mb-0`}>{status.count}</h5>
                            <small className="text-muted">{status.label}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardOrdersStatus;
