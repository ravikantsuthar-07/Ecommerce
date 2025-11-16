import React, { useEffect, useState } from "react";
import { Card, Form, Button, Table, Image, Row, Col } from "react-bootstrap";
import AdminLayout from "../../../Components/Layouts/Admin/AdminLayout";
import axios from "axios";
import { useAuth } from "../../../context/authContext";

const AdminSubCategoryPage = () => {
    const [subCatName, setSubCatName] = useState("");
    const [mainCat, setMainCat] = useState("");
    const [subCatImage, setSubCatImage] = useState(null);
    const [mainCategoryList, setMainCategoryList] = useState([]);
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [auth] = useAuth();

    const gettingMainCategoriesList = async () => {
        try {
            const { data } = await axios.get("/api/category/main", {
                headers: {
                    Authorization: auth.token,
                },
            });

            if (data?.success) {
                setMainCategoryList(data.category);
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


    const gettingSubCategory = async () => {
        try {
            const { data } = await axios.get("/api/category/sub", {
                headers: {
                    Authorization: auth.token,
                },
            });
            if (data?.success) {
                setSubCategoryList(data.categories);
            } else {
                console.error("Failed to fetch sub categories");
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        gettingSubCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddCategory = async (e) => {
        e.preventDefault();

        try {
            if (!subCatName || !subCatImage || !mainCat) {
                alert("Please add main Category name & image");
                return;
            }

            const categoryFormData = new FormData();
            categoryFormData.append("name", subCatName);
            categoryFormData.append("img", subCatImage);
            categoryFormData.append("parentId", mainCat);

            const { data } = await axios.post("/api/category/addNewCategory", categoryFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: auth.token,
                },
            });

            if (data?.success) {
                alert("Category added successfully");
                setMainCat("");
                setSubCatImage(null);
                setSubCatName("");
                gettingSubCategory();
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
                    <Card.Header className="fw-bold">Add Sub Category</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleAddCategory}>
                            <Row className="g-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Main Category</Form.Label>
                                        <Form.Select
                                            value={mainCat}
                                            onChange={(e) => setMainCat(e.target.value)}
                                        >
                                            <option value="">Select Main Category</option>
                                            {mainCategoryList.map((cat) => (
                                                <option key={cat.id} value={cat._id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Sub Category Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter sub category name"
                                            value={subCatName}
                                            onChange={(e) => setSubCatName(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Sub Category Image (1:1)</Form.Label>
                                        <Form.Control
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => setSubCatImage(e.target.files[0])}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col xs={12} className="text-end">
                                    <Button type="submit" variant="primary">
                                        Add Sub Category
                                    </Button>
                                </Col>

                            </Row>
                        </Form>
                    </Card.Body>
                </Card>

                <Card className="shadow-sm">
                    <Card.Header className="fw-bold">All Sub Categories</Card.Header>
                    <Card.Body>
                        <Table bordered hover responsive>
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Main Category</th>
                                    <th>Sub Category</th>
                                    <th style={{ width: "150px" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subCategoryList.map((sub, index) => (
                                    <tr key={sub.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Image
                                                src={`/static/Categories/${sub.image}`}
                                                alt="sub category"
                                                width={40}
                                                height={40}
                                                rounded
                                                style={{ objectFit: "cover" }}
                                            />
                                        </td>
                                        <td>{sub.parentId?.name}</td>
                                        <td>{sub.name}</td>
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

export default AdminSubCategoryPage;
