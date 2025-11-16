import React from "react";
import UserLayout from "../../../Components/Layouts/Buyers/UserLayout";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { formateName } from "../../../Utills/FormateName";
import BreadCrumbCom from "../../../Components/BreadCrumbCom";

const SubCategoryPage = () => {
    const [categoryList, setCategoryList] = React.useState([]);
    const { id } = useParams();


    const gettingSubCategory = async () => {
        try {
            const { data } = await axios.get(`/api/category/getSubCategory/${id}`);
            if (data?.success) {
                setCategoryList(data.category);
            }
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        gettingSubCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <UserLayout>
            <Container className="my-3">
                <BreadCrumbCom
                    paths={[
                        { label: id, isSlug: true } // auto formats XYZ-abc → Xyz Abc
                    ]}
                />
                <h4 className="fw-semibold mt-3 mb-3">Explore {formateName(id)}</h4>

                {/* ▼▼ CATEGORY GRID ▼▼ */}
                <Row className="g-3">
                    {categoryList.map((item, index) => (
                        <Col xs={4} md={2} key={index}>
                            <Link
                                to={`/cn/${item?.parentId?.name.replace(/\s+/g, "-").toLowerCase()}-${item?.parentId?._id}/scn/${item?.name.replace(/\s+/g, "-").toLowerCase()}-${item?._id}`}
                                className="text-decoration-none"
                            >
                                <Card className="border shadow-sm h-100 rounded-3 overflow-hidden hover-shadow transition-sm">

                                    {/* Image */}
                                    <div className="d-flex align-items-center justify-content-center bg-light border-bottom" style={{ height: "120px" }}>
                                        <Card.Img
                                            src={`/static/Categories/${item.image}`}
                                            className="p-2"
                                            style={{ maxHeight: "100%", objectFit: "contain" }}
                                            alt={item.name}
                                        />
                                    </div>

                                    {/* Title */}
                                    <Card.Body className="text-center p-2">
                                        <Card.Title className="fs-6 mb-0 text-dark">
                                            {item.name}
                                        </Card.Title>
                                    </Card.Body>

                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </UserLayout>
    );
};

export default SubCategoryPage;
