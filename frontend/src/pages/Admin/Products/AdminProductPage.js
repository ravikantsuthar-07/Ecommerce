import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge } from 'react-bootstrap';
import AdminLayout from '../../../Components/Layouts/Admin/AdminLayout';
import axios from 'axios';
import { useAuth } from '../../../context/authContext';

const AdminProductPage = () => {
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [auth] = useAuth();

    // ---------------------------
    //  Fetch Products
    // ---------------------------
    const gettingProducts = async () => {
        try {
            const { data } = await axios.get('/api/products/getAdminProducts', {
                headers: {
                    Authorization: auth?.token,
                },
            });

            if (data?.success) {
                setProducts(data.products);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        gettingProducts();
        // eslint-disable-next-line
    }, []);

    return (
        <AdminLayout>
            <Container fluid className="py-4">

                {/* ---------------------- PAGE TITLE ---------------------- */}
                <Row className="mb-3">
                    <Col>
                        <h2 className="fw-bold text-dark">Product List</h2>
                    </Col>
                </Row>

                {/* ---------------------- SEARCH & ACTIONS ---------------------- */}
                <Card className="shadow-sm border-0 mb-4">
                    <Card.Body>
                        <Row className="g-3 align-items-center">

                            {/* Search Input */}
                            <Col xs={12} md={6}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search Product..."
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                    <Button variant="primary">
                                        <i className="fa fa-search me-2"></i>Search
                                    </Button>
                                </InputGroup>
                            </Col>

                            {/* Action Buttons */}
                            <Col
                                xs={12}
                                md={6}
                                className="text-md-end d-flex flex-wrap justify-content-md-end gap-2 mt-2 mt-md-0"
                            >
                                <Button variant="success">
                                    <i className="fa-solid fa-file-export me-2"></i>Export
                                </Button>

                                <Button variant="warning" className="text-white">
                                    <i className="fa-solid fa-box-open me-2"></i>Limited Stock
                                </Button>

                                <Button variant="primary">
                                    <i className="fa-solid fa-plus me-2"></i>Add New Product
                                </Button>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>

                {/* ---------------------- PRODUCT GRID ---------------------- */}
                <Row className="g-4">
                    {products.map((item) => (
                        <Col key={item._id} xs={12} sm={6} md={4} lg={2}>
                            <Card className="h-100 shadow-sm border-0 position-relative product-card">

                                {/* OUT OF STOCK LABEL */}
                                {item.stock === 0 && (
                                    <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
                                        Out of Stock
                                    </Badge>
                                )}

                                {/* PRODUCT IMAGE */}
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    alt={item.name}
                                    className="p-2"
                                    style={{ height: '150px', objectFit: 'contain' }}
                                />

                                <Card.Body>
                                    <Card.Title className="fs-6 fw-bold text-truncate">
                                        {item.name}
                                    </Card.Title>

                                    <Card.Text className="text-muted mb-1">
                                        Price: <span className="fw-semibold">₹{item.price}</span>
                                    </Card.Text>

                                    <Card.Text className="mb-2">
                                        Stock:{' '}
                                        {item.stock > 0 ? (
                                            <span className="text-success fw-semibold">
                                                {item.stock}
                                            </span>
                                        ) : (
                                            <span className="text-danger fw-semibold">
                                                Out of Stock
                                            </span>
                                        )}
                                    </Card.Text>

                                    {/* ACTION BUTTONS */}
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div className="d-flex gap-2 text-muted">
                                            <Button variant="light" size="sm">
                                                <i className="fa-solid fa-eye text-primary"></i>
                                            </Button>

                                            <Button variant="light" size="sm">
                                                <i
                                                    className={`fa-solid ${item.status === 1
                                                            ? 'fa-toggle-on text-success'
                                                            : 'fa-toggle-off text-secondary'
                                                        }`}
                                                ></i>
                                            </Button>

                                            <Button variant="light" size="sm">
                                                <i className="fa-solid fa-pen text-warning"></i>
                                            </Button>

                                            <Button variant="light" size="sm">
                                                <i className="fa-solid fa-trash text-danger"></i>
                                            </Button>
                                        </div>

                                        <Badge bg="info" text="dark">
                                            ID: {item._id}
                                        </Badge>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </AdminLayout>
    );
};

export default AdminProductPage;
