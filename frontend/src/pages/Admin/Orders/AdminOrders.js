import React from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table,
    Card,
    InputGroup,
} from "react-bootstrap";
import AdminLayout from "../../../Components/Layouts/Admin/AdminLayout";

const AdminOrders = () => {
    const params = useParams();

    const orders = [
        {
            id: "ORD234",
            time: "12-07-2025 12:00 PM",
            status: "Pending",
            customer_name: "Ravikant",
            customer_mobile: "12345678902",
            icon: <i className="fa-solid fa-spinner" />,
            color: "warning",
        },
        {
            id: "ORD233",
            time: "12-07-2025 1:45 PM",
            status: "Delivered",
            customer_name: "Ram",
            customer_mobile: "12345678902",
            icon: <i className="fa-solid fa-circle-check" />,
            color: "success",
        },
        {
            id: "ORD232",
            time: "12-07-2025 2:30 PM",
            status: "Packaged",
            customer_name: "Rakesh",
            customer_mobile: "12345678902",
            icon: <i className="fa-solid fa-box-open" />,
            color: "primary",
        },
    ];

    const pageTitle = params.status
        ? `${params.status.charAt(0).toUpperCase() + params.status.slice(1)} Orders`
        : "All Orders";

    return (
        <AdminLayout>
            <Container fluid className="py-4 bg-light min-vh-100">
                {/* Page Title */}
                <Row className="mb-4">
                    <Col>
                        <h2 className="fw-bold text-dark">{pageTitle}</h2>
                    </Col>
                </Row>

                {/* Filters Section */}
                <Card className="border-0 shadow-sm mb-4">
                    <Card.Body>
                        <Form>
                            <Row className="g-3">
                                <Col sm={6} lg={3}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold">Start Date</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>

                                <Col sm={6} lg={3}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold">End Date</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>

                                <Col sm={6} lg={3} className="d-grid align-items-end">
                                    <Button variant="secondary" type="reset">
                                        Clear
                                    </Button>
                                </Col>

                                <Col sm={6} lg={3} className="d-grid align-items-end">
                                    <Button variant="primary" type="submit">
                                        Show Data
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>

                {/* Search + Export Section */}
                <Card className="border-0 shadow-sm mb-4">
                    <Card.Body>
                        <Row className="g-3 align-items-center">
                            <Col sm={12} md={8}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search by Order ID or Customer Name"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={12} md={4} className="d-grid">
                                <Button variant="success">
                                    Export <i className="fa-solid fa-file-export ms-1"></i>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* Orders Table */}
                <Card className="border-0 shadow-sm">
                    <Card.Body>
                        <div className="table-responsive">
                            <Table hover bordered className="align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>Date Time</th>
                                        <th>Customer</th>
                                        <th>Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <tr key={index}>
                                            <td>{order.id}</td>
                                            <td>{order.time}</td>
                                            <td>
                                                <div>{order.customer_name}</div>
                                                <small className="text-muted">
                                                    {order.customer_mobile}
                                                </small>
                                            </td>
                                            <td>
                                                <span
                                                    className={`badge bg-${order.color} d-inline-flex align-items-center gap-1`}
                                                >
                                                    {order.icon} {order.status}
                                                </span>
                                            </td>
                                            <td className="text-center">
                                                <Button
                                                    variant="outline-primary"
                                                    size="sm"
                                                    className="me-2"
                                                    title="View"
                                                >
                                                    <i className="fa-solid fa-eye"></i>
                                                </Button>
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    title="Print"
                                                >
                                                    <i className="fa-solid fa-print"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </AdminLayout>
    );
};

export default AdminOrders;
