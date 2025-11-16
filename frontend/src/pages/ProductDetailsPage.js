import UserLayout from "../Components/Layouts/Buyers/UserLayout";
import CartButtonCom from "../Components/CartButtonCom";

const ProductDetailsPage = () => {

    return (
        <UserLayout>
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-5 text-center">
                        <div className="border rounded-3 p-3 shadow-sm bg-white">
                            <img
                                src="https://organictattva.com/wp-content/uploads/2021/03/Organic-Psyllium-Husk-1.png"
                                alt="Organic Psyllium Husk"
                                className="img-fluid"
                            />
                        </div>
                        {/* Thumbnail images */}
                        <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                            {[
                                "https://organictattva.com/wp-content/uploads/2021/03/Organic-Psyllium-Husk-1.png",
                                "https://organictattva.com/wp-content/uploads/2021/03/Organic-Psyllium-Husk-back.png",
                                "https://organictattva.com/wp-content/uploads/2021/03/Organic-Psyllium-Husk-powder.png",
                            ].map((thumb, i) => (
                                <img
                                    key={i}
                                    src={thumb}
                                    alt="thumb"
                                    className="img-thumbnail"
                                    style={{ width: "70px", cursor: "pointer" }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="col-md-7">
                        <h3 className="fw-bold mb-2 text-dark">Organic Psyllium Husk</h3>
                        <p className="text-muted mb-1">
                            <del>₹395.00</del>{" "}
                            <span className="fs-5 fw-semibold text-success">₹375.00</span>{" "}
                            <small className="text-secondary">(incl. of all taxes)</small>
                        </p>

                        <p className="mb-2">
                            <span className="fw-semibold">Size:</span> 100 g
                        </p>
                        <button className="btn btn-sm btn-outline-dark me-2 px-3">100 g</button>
                        <span className="badge bg-success">5% OFF</span>
                        <CartButtonCom />

                        <div className="border rounded-3 p-3 bg-light mb-4">
                            <h6 className="fw-bold mb-2">Available Offers</h6>
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex justify-content-between align-items-center border rounded p-2 bg-white">
                                    <div>
                                        <strong>Flat 12% OFF</strong>
                                        <div className="text-muted small">
                                            On orders above ₹999 – use code <b>SAVE10</b>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-outline-success">Copy</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center border rounded p-2 bg-white">
                                    <div>
                                        <strong>Flat 20% OFF</strong>
                                        <div className="text-muted small">
                                            On orders above ₹2499 – use code <b>SAVE20</b>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-outline-success">Copy</button>
                                </div>
                            </div>
                        </div>

                        <div className="accordion" id="productDetails">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="descHeading">
                                    <button
                                        className="accordion-button fw-semibold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#desc"
                                        aria-expanded="true"
                                        aria-controls="desc"
                                    >
                                        Description
                                    </button>
                                </h2>
                                <div
                                    id="desc"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="descHeading"
                                    data-bs-parent="#productDetails"
                                >
                                    <div className="accordion-body small text-muted">
                                        A wonderful source of fibre, Organic Psyllium Husk improves digestive health and
                                        naturally aids and balances cholesterol and blood sugar levels. Obtained from
                                        Plantovate seeds (Isabgol), it supports digestive wellness and aids in weight
                                        loss.
                                    </div>
                                </div>
                            </div>

                            {[
                                "Ideal For Making",
                                "Shelf Life",
                                "FSSAI Number",
                                "Marketed & Manufactured By",
                            ].map((item, i) => (
                                <div className="accordion-item" key={i}>
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed fw-semibold"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#item${i}`}
                                        >
                                            {item}
                                        </button>
                                    </h2>
                                    <div
                                        id={`item${i}`}
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#productDetails"
                                    >
                                        <div className="accordion-body small text-muted">
                                            Information coming soon.
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 d-flex align-items-center gap-3">
                            <span className="fw-semibold">Share:</span>
                            <a href="#" className="text-dark"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="text-dark"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#" className="text-dark"><i className="fa-brands fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>

                <div className="mt-5 text-center">
                    <h4 className="fw-bold mb-4">Why Choose Organic Tattva</h4>
                    <div className="row g-4 justify-content-center">
                        {[
                            { icon: "fa-leaf", text: "100% Organic" },
                            { icon: "fa-flask", text: "Chemical Free" },
                            { icon: "fa-seedling", text: "Sustainably Sourced" },
                            { icon: "fa-globe", text: "Eco-Friendly" },
                        ].map((item, i) => (
                            <div className="col-6 col-md-3" key={i}>
                                <div className="border rounded-3 p-4 shadow-sm bg-white h-100">
                                    <i className={`fa-solid ${item.icon} fs-2 text-success mb-2`}></i>
                                    <p className="fw-semibold text-muted mb-0">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default ProductDetailsPage;
