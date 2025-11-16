import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopCustomer = ({ buyers = [] }) => {
    return (
        <Card
            className="border-0 shadow-sm h-100"
            style={{
                borderRadius: "18px",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease-in-out",
            }}
        >
            <Card.Body className="p-4">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-semibold text-primary mb-0">👥 Top Customers</h5>
                    <Link
                        to="/customers/all"
                        className="text-decoration-none text-success small fw-medium"
                    >
                        View All →
                    </Link>
                </div>

                {/* Buyers List */}
                <div className="d-flex flex-column gap-3">
                    {buyers.length > 0 ? (
                        buyers.map((buyer) => (
                            <Row
                                key={buyer.id}
                                className="align-items-center g-2 p-2 rounded-3 border shadow-sm mx-0"
                                style={{
                                    background: "linear-gradient(145deg, #f9f9f9, #eef8ff)",
                                    borderColor: "#eef2f7",
                                    transition: "all 0.2s ease",
                                    cursor: "pointer",
                                }}
                            >
                                {/* Avatar */}
                                <Col xs="auto" className="pe-0">
                                    <img
                                        src={buyer.avatar}
                                        alt={buyer.name}
                                        onError={(e) => (e.target.src = "/default-avatar.png")}
                                        className="rounded-circle border"
                                        width="45"
                                        height="45"
                                        style={{ objectFit: "cover" }}
                                    />
                                </Col>

                                {/* Name & Number */}
                                <Col>
                                    <div className="d-flex flex-column">
                                        <span className="fw-semibold text-dark small">{buyer.name}</span>
                                        <span className="text-muted small">{buyer.number}</span>
                                    </div>
                                </Col>

                                {/* Orders Count */}
                                <Col xs="auto">
                                    <Badge bg="success" className="px-2 py-1">
                                        {buyer.orders} Orders
                                    </Badge>
                                </Col>
                            </Row>
                        ))
                    ) : (
                        <div className="text-center text-muted small py-3">
                            No top customers found 🧾
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default TopCustomer;
