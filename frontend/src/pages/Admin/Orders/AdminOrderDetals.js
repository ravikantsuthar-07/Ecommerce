import React from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Table,
    Form,
    Image,
} from "react-bootstrap";
import AdminLayout from "../../../Components/Layouts/Admin/AdminLayout";

const AdminOrderDetails = () => {
    const { id } = useParams();

    const order = {
        id: "ORD234",
        date: "2025-07-10",
        time: "12:00 PM",
        status: "Confirmed",
        paymentStatus: "Unpaid",
        paymentType: "Cash On Delivery",
        products: [
            {
                id: 1,
                image:
                    "https://www.wendors.in/image/cache/catalog/parle%20g%20rs%202-600x315w.jpg",
                name: "Parle G Biscuits",
                Qty: 2,
                price: 15,
            },
            {
                id: 2,
                image:
                    "https://m.media-amazon.com/images/I/41ZxyAbnurL._UF1000,1000_QL80_.jpg",
                name: "Cashew Nut W320 - 100g",
                Qty: 2,
                price: 520,
            },
        ],
        discount: 50,
        deliveryTime: "2:00 PM - 4:00 PM",
        deliveryInfo: {
            address: "123 Main Street, Delhi",
            phone: "9876543210",
        },
        customer: {
            name: "Ravikant",
            email: "ravi@gmail.com",
            phone: "9876543210",
            pic: "https://randomuser.me/api/portraits/men/46.jpg",
        },
    };

    const subtotal = order.products.reduce(
        (acc, item) => acc + item.Qty * item.price,
        0
    );
    const tax = ((subtotal - order.discount - 20) * 18) / 100;
    const coupon = ((subtotal + tax - order.discount - 20) * 7) / 100;
    const deliveryFee =
        ((subtotal + tax - coupon - order.discount - 20) * 2) / 100;
    const total = subtotal - order.discount - 20 + tax + deliveryFee - coupon;

    return (
        <AdminLayout>
            <Container fluid className="py-4 bg-light min-vh-100">
                {/* Header */}
                <Row className="align-items-center mb-4">
                    <Col xs={12} md="auto" className="mb-3 mb-md-0">
                        <h2 className="fw-bold text-dark mb-0">
                            <i className="fa-solid fa-box-open text-primary me-2"></i>
                            Order Details
                        </h2>
                    </Col>
                    <Col className="text-md-end">
                        <Button variant="primary">
                            <i className="fa-solid fa-receipt me-2"></i> Print Invoice
                        </Button>
                    </Col>
                </Row>

                <Row className="g-4">
                    {/* Left Section */}
                    <Col lg={8}>
                        {/* Order Info */}
                        <Card className="shadow-sm border-0 mb-4">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3 mb-md-0">
                                        <p className="text-muted small mb-1">Order ID</p>
                                        <h5>{order.id}</h5>
                                        <p className="text-muted small mb-1 mt-3">Placed on</p>
                                        <p className="mb-0">
                                            <i className="fa-regular fa-clock me-1"></i>
                                            {order.date} at {order.time}
                                        </p>
                                    </Col>
                                    <Col md={6}>
                                        <div className="d-flex justify-content-between small mb-2">
                                            <span className="text-muted">Status</span>
                                            <strong className="text-warning">{order.status}</strong>
                                        </div>
                                        <div className="d-flex justify-content-between small mb-2">
                                            <span className="text-muted">Payment Method</span>
                                            <strong>{order.paymentType}</strong>
                                        </div>
                                        <div className="d-flex justify-content-between small">
                                            <span className="text-muted">Payment Status</span>
                                            <strong className="text-danger">
                                                {order.paymentStatus}
                                            </strong>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Ordered Products */}
                        <Card className="shadow-sm border-0 mb-4">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3">Ordered Items</h5>
                                <div className="table-responsive">
                                    <Table hover bordered className="align-middle text-sm">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Product</th>
                                                <th>Qty</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.products.map((item) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.name}
                                                                rounded
                                                                width={45}
                                                                height={45}
                                                                className="me-2 border"
                                                            />
                                                            {item.name}
                                                        </div>
                                                    </td>
                                                    <td>{item.Qty}</td>
                                                    <td>₹{item.price}</td>
                                                    <td>₹{item.Qty * item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Summary */}
                        <Card className="shadow-sm border-0">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3">Order Summary</h5>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span>Item Price:</span>
                                    <span>₹{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span>Item Discount:</span>
                                    <span className="text-danger">-₹{order.discount.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span>Sub Total:</span>
                                    <span>₹{(subtotal - order.discount).toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span>TAX / VAT:</span>
                                    <span>₹{tax.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span>Coupon Discount:</span>
                                    <span className="text-danger">-₹{coupon.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span>Extra Discount:</span>
                                    <span className="text-danger">-₹{20}</span>
                                </div>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span>Delivery Fee:</span>
                                    <span>₹{deliveryFee.toFixed(2)}</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between fw-semibold">
                                    <span>Total:</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Right Section */}
                    <Col lg={4}>
                        {/* Order Setup */}
                        <Card className="shadow-sm border-0 mb-4">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3">
                                    <i className="fa-solid fa-gear me-2"></i> Order Setup
                                </h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Order Status</Form.Label>
                                    <Form.Select defaultValue={order.status}>
                                        <option>Pending</option>
                                        <option>Confirmed</option>
                                        <option>Packaged</option>
                                        <option>Delivered</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Payment Status</Form.Label>
                                    <Form.Select defaultValue={order.paymentStatus}>
                                        <option>Paid</option>
                                        <option>Unpaid</option>
                                    </Form.Select>
                                </Form.Group>
                                <div>
                                    <p className="text-muted small mb-1">Delivery Time</p>
                                    <p className="mb-0 fw-medium">{order.deliveryTime}</p>
                                    <Button variant="link" size="sm" className="px-0 text-primary">
                                        Change Delivery Time
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Delivery Info */}
                        <Card className="shadow-sm border-0 mb-4">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3">
                                    <i className="fa-solid fa-location-dot me-2"></i> Delivery Info
                                </h5>
                                <p className="text-muted small mb-1">Address:</p>
                                <p className="mb-2">{order.deliveryInfo.address}</p>
                                <p className="text-muted small mb-1">Phone:</p>
                                <p className="mb-0">{order.deliveryInfo.phone}</p>
                            </Card.Body>
                        </Card>

                        {/* Customer Info */}
                        <Card className="shadow-sm border-0">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3">
                                    <i className="fa-solid fa-user me-2"></i> Customer Info
                                </h5>
                                <div className="d-flex align-items-center">
                                    <Image
                                        src={order.customer.pic}
                                        roundedCircle
                                        width={55}
                                        height={55}
                                        className="me-3 border"
                                    />
                                    <div>
                                        <h6 className="mb-1">{order.customer.name}</h6>
                                        <p className="text-muted small mb-0">
                                            {order.customer.email}
                                        </p>
                                        <p className="text-muted small mb-0">
                                            {order.customer.phone}
                                        </p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AdminLayout>
    );
};

export default AdminOrderDetails;
