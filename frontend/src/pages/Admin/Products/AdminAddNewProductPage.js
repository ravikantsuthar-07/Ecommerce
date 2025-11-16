import React, { useRef } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    Badge,
} from "react-bootstrap";
import AdminLayout from "../../../Components/Layouts/Admin/AdminLayout";

const AdminAddNewProductPage = () => {
    const editorRef = useRef(null);

    const exec = (cmd, val = null) => {
        document.execCommand(cmd, false, val);
    };

    return (
        <AdminLayout>
            <Container fluid className="py-4">

                {/* PAGE TITLE */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold m-0">Add New Product</h4>
                    <Badge bg="primary" className="px-3 py-2 fs-6">
                        Product Management
                    </Badge>
                </div>

                <Row className="g-4">

                    {/* LEFT COLUMN */}
                    <Col lg={8}>

                        {/* BASIC INFO */}
                        <Card className="shadow-sm border-0">
                            <Card.Header className="bg-white fw-semibold">
                                Product Information
                            </Card.Header>
                            <Card.Body>

                                {/* Product Name */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter product name"
                                        className="py-2"
                                    />
                                </Form.Group>

                                {/* Product Brand */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Brand</Form.Label>
                                    <Form.Select>
                                        <option>Select Brand</option>
                                    </Form.Select>
                                </Form.Group>

                                {/* Category */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Select Category</Form.Label>
                                    <Form.Select>
                                        <option>Select Category</option>
                                    </Form.Select>
                                </Form.Group>

                                {/* Description */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Description</Form.Label>

                                    <div
                                        className="d-flex flex-wrap gap-2 p-2 mb-2 rounded"
                                        style={{
                                            border: "1px solid #ddd",
                                            background: "#f8f9fa",
                                        }}
                                    >
                                        <Button size="sm" variant="outline-dark" onClick={() => exec("bold")}>B</Button>
                                        <Button size="sm" variant="outline-dark" onClick={() => exec("italic")}>I</Button>
                                        <Button size="sm" variant="outline-dark" onClick={() => exec("underline")}>U</Button>
                                        <Button size="sm" variant="outline-dark" onClick={() => exec("strikeThrough")}>S</Button>
                                        <Button size="sm" variant="outline-dark" onClick={() => exec("insertUnorderedList")}>
                                            • List
                                        </Button>
                                        <Button size="sm" variant="outline-dark" onClick={() => exec("insertOrderedList")}>
                                            1. List
                                        </Button>

                                        <Form.Control
                                            type="color"
                                            onChange={(e) => exec("foreColor", e.target.value)}
                                            style={{ width: "50px" }}
                                        />

                                        <Form.Control
                                            type="color"
                                            onChange={(e) => exec("hiliteColor", e.target.value)}
                                            style={{ width: "50px" }}
                                        />

                                        <Button size="sm" variant="outline-danger" onClick={() => exec("removeFormat")}>
                                            Clear
                                        </Button>
                                    </div>

                                    <div
                                        ref={editorRef}
                                        contentEditable
                                        style={{
                                            minHeight: "180px",
                                            border: "1px solid #ddd",
                                            borderRadius: "5px",
                                            padding: "10px",
                                            background: "#fff",
                                        }}
                                    ></div>
                                </Form.Group>

                                {/* HSN Code */}
                                <Form.Group className="mb-3">
                                    <Form.Label>HSN Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter HSN Code" />
                                </Form.Group>

                            </Card.Body>
                        </Card>

                        {/* SEO DETAILS */}
                        <Card className="shadow-sm border-0 mt-4">
                            <Card.Header className="bg-white fw-semibold">
                                SEO Details
                            </Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3">
                                    <Form.Label>Keywords</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Meta Keywords"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Meta Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Meta description..."
                                    />
                                </Form.Group>
                            </Card.Body>
                        </Card>

                    </Col>

                    {/* RIGHT COLUMN */}
                    <Col lg={4}>

                        {/* IMAGE UPLOAD */}
                        <Card className="shadow-sm border-0">
                            <Card.Header className="bg-white fw-semibold">
                                Upload Image (Ratio 1:1)
                            </Card.Header>
                            <Card.Body>
                                <div
                                    className="border rounded text-center p-5 bg-light"
                                    style={{ cursor: "pointer" }}
                                >
                                    <i className="fa-solid fa-cloud-arrow-up fa-2x text-secondary mb-2"></i>
                                    <p className="m-0">Click to Upload Image</p>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* TAGS & VISIBILITY */}
                        <Card className="shadow-sm border-0 mt-4">
                            <Card.Header className="bg-white fw-semibold">
                                Visibility & Tags
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="fw-semibold">Visibility</span>
                                    <Form.Check type="switch" defaultChecked />
                                </div>

                                <Form.Label>Tags</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter tags"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* BUTTONS */}
                <div className="d-flex justify-content-end mt-4 gap-3">
                    <Button variant="secondary" className="px-4">
                        Reset
                    </Button>
                    <Button variant="primary" className="px-4">
                        Submit Product
                    </Button>
                </div>
            </Container>
        </AdminLayout>
    );
};

export default AdminAddNewProductPage;
