import React from 'react'

const TopSellingProduct = () => {
    return (
        <div className="col-lg-4">
            <div className="card h-100">
                <div className="card-header border-0 order-header-shadow">
                    <h5 className="card-title d-flex justify-content-between flex-grow-1">
                        <span>Top selling products</span>
                        <a href="https://admin.binjalfarm.com/admin/product/list" className="fz-12px font-medium text-006AE5">View all</a>
                    </h5>
                </div>

                <div className="card-body">
                    <div className="top--selling">
                        <a className="grid--card" href="https://admin.binjalfarm.com/admin/product/view/3">
                            <img src="https://admin.binjalfarm.com/storage/app/public/product/2025-04-04-67efd62b62432.webp" alt="Washington Apple  ( वाशिंगटन सेब ) Image" />
                            <div className="cont pt-2">
                                <h6 className="line--limit-2">Washington Apple  ( ...</h6>
                            </div>
                            <div className="ml-auto">
                                <span className="badge badge-soft">Sold : 52</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSellingProduct
