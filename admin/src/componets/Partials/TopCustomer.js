import React from 'react'

const TopCustomer = () => {
    return (
        <div className="col-lg-4">
            <div className="card h-100">
                <div className="card-header border-0 order-header-shadow">
                    <h5 className="card-title d-flex justify-content-between flex-grow-1">
                        <span>Top customer</span>
                        <a href="https://admin.binjalfarm.com/admin/customer/list" className="fz-12px font-medium text-006AE5">View all</a>
                    </h5>
                </div>

                <div className="card-body">
                    <div className="top--selling">
                        <a className="grid--card" href="https://admin.binjalfarm.com/admin/customer/view/19">
                            <img src="https://admin.binjalfarm.com/storage/app/public/profile/2025-05-23-6830487f9c6e3.png" alt=" Image" />
                            <div className="cont pt-2">
                                <h6>bhudev</h6>
                                <span>9983099933</span>
                            </div>
                            <div className="ml-auto">
                                <span className="badge badge-soft">Orders : 35</span>
                            </div>
                        </a>
                        <a className="grid--card" href="https://admin.binjalfarm.com/admin/customer/view/14">
                            <img src="https://admin.binjalfarm.com/storage/app/public/profile/def.png" alt=" Image" />
                            <div className="cont pt-2">
                                <h6>Anju</h6>
                                <span>7014139235</span>
                            </div>
                            <div className="ml-auto">
                                <span className="badge badge-soft">Orders : 33</span>
                            </div>
                        </a>
                        <a className="grid--card" href="https://admin.binjalfarm.com/admin/customer/view/28">
                            <img src="https://admin.binjalfarm.com/storage/app/public/profile/2025-03-26-67e3bfd406370.png" alt=" Image" />
                            <div className="cont pt-2">
                                <h6>raj</h6>
                                <span>+917014936830</span>
                            </div>
                            <div className="ml-auto">
                                <span className="badge badge-soft">Orders : 20</span>
                            </div>
                        </a>
                        <a className="grid--card" href="https://admin.binjalfarm.com/admin/customer/view/11">
                            <img src="https://admin.binjalfarm.com/storage/app/public/profile/2025-03-26-67e3bd2b7a9c6.png" alt=" Image" />
                            <div className="cont pt-2">
                                <h6>adad</h6>
                                <span>9087654321</span>
                            </div>
                            <div className="ml-auto">
                                <span className="badge badge-soft">Orders : 11</span>
                            </div>
                        </a>
                        <a className="grid--card" href="https://admin.binjalfarm.com/admin/customer/view/30">
                            <img src="https://admin.binjalfarm.com/public/assets/admin/img/160x160/2.png" alt=" Image" />
                            <div className="cont pt-2">
                                <h6>Deepak</h6>
                                <span>+917877748907</span>
                            </div>
                            <div className="ml-auto">
                                <span className="badge badge-soft">Orders : 3</span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopCustomer
