import React from 'react'

const MostRelatedProduct = () => {
    return (
        <div className="col-lg-4">
            <div className="card h-100">
                <div className="card-header border-0 order-header-shadow">
                    <h5 className="card-title d-flex justify-content-between flex-grow-1">
                        <span>Most rated products</span>
                        <a href="https://admin.binjalfarm.com/admin/reviews/list" className="fz-12px font-medium text-006AE5">View all</a>
                    </h5>
                </div>

                <div className="card-body">
                    <div className="rated--products">
                        <a href="https://admin.binjalfarm.com/admin/product/view/3">
                            <div className="rated-media d-flex align-items-center">
                                <img src="https://admin.binjalfarm.com/storage/app/public/product/2025-04-04-67efd62b62432.webp" alt="Washington Apple  ( वाशिंगटन सेब ) image" />
                                <span className="line--limit-1 w-0 flex-grow-1">
                                    Washington Apple  ( वाश�...
                                </span>
                            </div>
                            <div className="">
                                <span className="rating text-info"><i className="tio-star"></i></span>
                                <span>5.00 </span>
                                (1)
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MostRelatedProduct
