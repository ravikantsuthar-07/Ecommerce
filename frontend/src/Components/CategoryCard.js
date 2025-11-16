import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ image, title, id }) => {
    const url = title.replace(/\s+/g, '-').toLowerCase() + `-${id}`;
    return (
        <Link
            to={`/cn/${url}`}
            className="text-center mb-4"
            style={{
                cursor: "pointer",
            }}
        >
            <div
                className="bg-light rounded-3 d-flex justify-content-center align-items-center mx-auto shadow-sm"
                style={{
                    width: "90px",
                    height: "90px",
                    transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <img
                    src={`/static/Categories/${image}`}
                    alt={title}
                    style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                    }}
                />
            </div>
            <p className="fw-semibold small mt-2 text-dark">{title}</p>
        </Link>
    );
};

export default CategoryCard;
