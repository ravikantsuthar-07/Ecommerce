import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RecentOrdersTable = ({ orders = [] }) => {
    const params = useParams();

    return (
        <Card
            className="shadow-sm border-0 mb-4"
            style={{
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
            }}
        >
            <Card.Body className="p-3 p-md-4">
                {/* Header */}
                {!params.status && (
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-semibold text-dark mb-0">Recent Orders</h5>
                        <Link
                            to="/orders/all"
                            className="text-decoration-none text-primary small fw-medium"
                        >
                            View all →
                        </Link>
                    </div>
                )}

                {/* Orders List */}
                <div className="d-flex flex-column gap-3">
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <Card
                                key={order.id}
                                className="border-0 shadow-sm p-3"
                                style={{
                                    borderRadius: "12px",
                                    backgroundColor: "#f9fafb",
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                <Row className="align-items-center gy-2">
                                    {/* Order ID + Time */}
                                    <Col xs={12} sm={4}>
                                        <div className="d-flex flex-column">
                                            <span className="fw-semibold text-secondary small">
                                                #{order.id}
                                            </span>
                                            <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                                                {order.time}
                                            </span>
                                        </div>
                                    </Col>

                                    {/* Customer Info (only visible on /orders/:status) */}
                                    {params.status && (
                                        <Col xs={12} sm={4}>
                                            <div className="d-flex flex-column">
                                                <span className="fw-semibold text-dark small">
                                                    {order.customer_name}
                                                </span>
                                                <span
                                                    className="text-muted"
                                                    style={{ fontSize: "0.8rem" }}
                                                >
                                                    {order.customer_mobile}
                                                </span>
                                            </div>
                                        </Col>
                                    )}

                                    {/* Status */}
                                    <Col
                                        xs={12}
                                        sm={4}
                                        className="d-flex align-items-center justify-content-sm-end"
                                    >
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="text-muted fs-6">{order.icon}</span>
                                            <span
                                                className="px-2 py-1 rounded-pill text-capitalize fw-medium"
                                                style={{
                                                    backgroundColor: "#e9ecef",
                                                    fontSize: "0.75rem",
                                                }}
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        ))
                    ) : (
                        <div className="text-center text-muted py-3 small">
                            No recent orders found.
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default RecentOrdersTable;
