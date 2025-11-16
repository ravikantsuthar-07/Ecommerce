import React from "react";
import CartButtonCom from "./CartButtonCom";

const ProductShowCard = ({ product }) => {
    return (
        <div className="col-6 col-md-3 mb-4">
            <div
                className="card h-100 position-relative border-0 shadow-sm"
                style={{ borderRadius: "1rem", overflow: "hidden", transition: "all 0.3s" }}
            >
                <button
                    className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"
                    style={{ width: "35px", height: "35px" }}
                >
                    <i className="fa-heart fa-regular"></i>
                </button>

                <span
                    className="badge bg-danger position-absolute top-0 start-0 m-2 fw-bold"
                    style={{ fontSize: "0.75rem" }}
                >
                    -{product.discount}%
                </span>

                <div
                    className="d-flex justify-content-center align-items-center bg-light"
                    style={{
                        aspectRatio: "1 / 1",
                        overflow: "hidden",
                        transition: "transform 0.3s",
                    }}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid"
                        style={{
                            maxHeight: "200px",
                            objectFit: "contain",
                            transition: "transform 0.3s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
                    />
                </div>

                <div className="card-body d-flex flex-column">
                    <h6 className="card-title text-dark fw-semibold mb-1" style={{ fontSize: "0.9rem" }}>
                        {product.name}
                    </h6>
                    <p className="text-muted small mb-2">{product.category}</p>

                    <div className="mt-auto d-flex justify-content-between align-items-end">
                        <div>
                            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: "0.9rem" }}>
                                ₹{product.price.min} - ₹{product.price.max}
                            </h6>
                        </div>
                        <CartButtonCom />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShowCard;
