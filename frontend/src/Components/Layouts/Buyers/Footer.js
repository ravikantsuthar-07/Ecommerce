import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light text-dark mt-5 border-top shadow-sm">
            <div className="container py-5">
                <div className="row gy-4">
                    <div className="col-6 col-md-3 col-lg-2">
                        <h5 className="fw-bold mb-3">Useful Links</h5>
                        <ul className="list-unstyled small">
                            <li><a href="/blog" className="text-decoration-none text-dark d-block mb-2 hover-link">Blogs</a></li>
                            <li><a href="/privacy" className="text-decoration-none text-dark d-block mb-2 hover-link">Privacy Policy</a></li>
                            <li><a href="/returns" className="text-decoration-none text-dark d-block mb-2 hover-link">Returns</a></li>
                            <li><a href="/terms" className="text-decoration-none text-dark d-block mb-2 hover-link">Terms</a></li>
                            <li><a href="/faq" className="text-decoration-none text-dark d-block mb-2 hover-link">FAQs</a></li>
                            <li><a href="/security" className="text-decoration-none text-dark d-block mb-2 hover-link">Security</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 col-lg-2">
                        <h5 className="fw-bold mb-3">Company</h5>
                        <ul className="list-unstyled small">
                            <li><a href="/about" className="text-decoration-none text-dark d-block mb-2 hover-link">About Us</a></li>
                            <li><a href="/shop" className="text-decoration-none text-dark d-block mb-2 hover-link">Shop</a></li>
                            <li><a href="/contact" className="text-decoration-none text-dark d-block mb-2 hover-link">Contact</a></li>
                            <li><a href="/seller/auth/register" className="text-decoration-none text-dark d-block mb-2 hover-link">Become a Seller</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="fw-bold mb-0">Categories</h5>
                            <a href="/categories" className="text-success small text-decoration-none">
                                See All →
                            </a>
                        </div>
                        <div className="row row-cols-2">
                            <div className="col">
                                <ul className="list-unstyled small">
                                    <li>
                                        <a href="/cn/fresh-produce" className="text-decoration-none text-dark d-block mb-2 hover-link">
                                            Fresh Produce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/cn/paan-corner" className="text-decoration-none text-dark d-block mb-2 hover-link">
                                            Paan Corner
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/cn/snacks" className="text-decoration-none text-dark d-block mb-2 hover-link">
                                            Snacks & Munchies
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="list-unstyled small">
                                    <li>
                                        <a href="/cn/personal-care" className="text-decoration-none text-dark d-block mb-2 hover-link">
                                            Personal Care
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/cn/dairy" className="text-decoration-none text-dark d-block mb-2 hover-link">
                                            Dairy & Bakery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/cn/beverages" className="text-decoration-none text-dark d-block mb-2 hover-link">
                                            Beverages
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Stay Connected */}
                    <div className="col-12 col-md-4 col-lg-2">
                        <h5 className="fw-bold mb-3">Stay Connected</h5>
                        <p className="small mb-2">Follow us on social media</p>
                        <div className="d-flex gap-3 fs-5">
                            <a href="https://linkedin.com" className="text-dark hover-social">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://fb.com" className="text-dark hover-social">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://x.com" className="text-dark hover-social">
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a href="https://instagram.com" className="text-dark hover-social">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
                    <p className="mb-0">© 2025 Name. All rights reserved.</p>
                    <p className="mb-0 mt-2 mt-md-0">
                        Crafted with ❤️ by <span className="fw-semibold">Ravikant Suthar</span>
                    </p>
                </div>
            </div>

            {/* Custom hover effects */}
            <style>{`
        .hover-link:hover {
          color: #198754 !important;
          transition: color 0.2s ease;
        }
        .hover-social:hover {
          color: #198754 !important;
          transform: scale(1.1);
          transition: all 0.2s ease;
        }
      `}</style>
        </footer>

    )
}

export default Footer
