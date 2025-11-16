import React, { useEffect, useState } from "react";
import { Card, Form, Button, Table, Image, Row, Col } from "react-bootstrap";
import AdminLayout from "../../../Components/Layouts/Admin/AdminLayout";
import axios from "axios";
import { useAuth } from "../../../context/authContext";

const AdminMainCategoryPage = () => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState(null);
    const [categoryList, setCategoryList] = useState([]);
    const [auth] = useAuth();

    // ------------- GET MAIN CATEGORIES ------------------
    const gettingMainCategoriesList = async () => {
        try {
            const { data } = await axios.get("/api/category/main", {
                headers: {
                    Authorization: auth.token,
                },
            });

            if (data?.success) {
                setCategoryList(data.category);
            } else {
                console.error("Failed to fetch categories");
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        gettingMainCategoriesList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ---------------- ADD MAIN CATEGORY -------------------
    const handleAddCategory = async (e) => {
        e.preventDefault();

        try {
            if (!categoryName || !categoryImage) {
                alert("Please add name & image");
                return;
            }

            const categoryFormData = new FormData();
            categoryFormData.append("name", categoryName);
            categoryFormData.append("img", categoryImage);

            const { data } = await axios.post("/api/category/addNewCategory", categoryFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: auth.token,
                },
            });

            if (data?.success) {
                alert("Category added successfully");
                setCategoryName("");
                setCategoryImage(null);
                gettingMainCategoriesList();
            } else {
                alert("Failed to add category");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AdminLayout>
            <div className="p-3">
                <Card className="mb-4 shadow-sm">
                    <Card.Header className="fw-bold">Add Main Category</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleAddCategory}>
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Category Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter category name"
                                            value={categoryName}
                                            onChange={(e) => setCategoryName(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Category Image (1:1)</Form.Label>
                                        <Form.Control
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => setCategoryImage(e.target.files[0])}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col xs={12} className="text-end">
                                    <Button type="submit" variant="primary">
                                        Add Category
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>

                <Card className="shadow-sm">
                    <Card.Header className="fw-bold">All Main Categories</Card.Header>
                    <Card.Body>
                        <Table bordered hover responsive>
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th style={{ width: "150px" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.map((cat, index) => (
                                    <tr key={cat._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Image
                                                src={`/static/Categories/${cat.image}`}
                                                alt="category"
                                                width={40}
                                                height={40}
                                                rounded
                                                style={{ objectFit: "cover" }}
                                            />
                                        </td>
                                        <td>{cat.name}</td>
                                        <td>
                                            <Button size="sm" variant="warning" className="me-2">
                                                Edit
                                            </Button>
                                            <Button size="sm" variant="danger">
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </AdminLayout>
    );
};

export default AdminMainCategoryPage;
