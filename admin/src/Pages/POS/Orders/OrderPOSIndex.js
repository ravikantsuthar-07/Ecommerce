import React, { useState } from 'react'
import AdminLayout from '../../../componets/Layouts/AdminLayout'

const OrderPOSIndex = () => {
    const [branchId, setBranchId] = useState('all');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <AdminLayout>
            <div className="content container-fluid">
                <div className="page-header">
                    <h1 className="page-header-title">
                        <span className="page-header-icon">
                            <img src="{{ asset('public/assets/admin/img/empty-cart.png') }}" className="w--20" alt="" />
                        </span>
                        <span>
                            Pos Orders <span
                                className="badge badge-pill badge-soft-secondary ml-2">127.67</span>
                        </span>
                    </h1>
                </div>

                <div className="card">
                    <div className="card-header shadow flex-wrap p-5 border-0">
                        <h5 className="form-bold w-100 mb-3">Select Date Range</h5>
                        <form className="w-100">
                            <div className="row g-3 g-sm-4 g-md-3 g-lg-4">
                                <div className="col-sm-6 col-md-4 col-lg-2">
                                    <select className="custom-select custom-select-sm text-capitalize min-h-45px" name="branch_id">
                                        <option disabled>--- select branch ---</option>
                                        <option value="all">all branch</option>
                                        {/* Example static branch options */}
                                        <option value="1">Branch One</option>
                                        <option value="2">Branch Two</option>
                                        {/* You can map branches dynamically in React */}
                                    </select>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="input-date-group">
                                        <label className="input-label" htmlFor="start_date">Start Date</label>
                                        <label className="input-date">
                                            <input
                                                type="date"
                                                id="start_date"
                                                name="start_date"
                                                className="form-control min-h-45px"
                                                placeholder="yy-mm-dd"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="input-date-group">
                                        <label className="input-label" htmlFor="end_date">End Date</label>
                                        <label className="input-date">
                                            <input
                                                type="date"
                                                id="end_date"
                                                name="end_date"
                                                className="form-control min-h-45px"
                                                placeholder="yy-mm-dd"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-12 col-lg-4 __btn-row d-flex gap-2">
                                    <button
                                        type="button"
                                        className="btn w-100 btn--reset min-h-45px"
                                        onClick={() => window.location.reload()}
                                    >
                                        Clear
                                    </button>
                                    <button
                                        type="submit"
                                        id="show_filter_data"
                                        className="btn w-100 btn--primary min-h-45px"
                                    >
                                        Show Data
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>



                    <div className="card-body p-20px">
                        <div className="order-top">
                            <div className="card--header">
                                <form action="{{ url()->current() }}" method="GET">
                                    <div className="input-group">
                                        <input id="datatableSearch_" type="search" name="search" className="form-control"
                                            placeholder="Search by ID, order or payment status"
                                            aria-label="Search" required autocomplete="off" />
                                        <div className="input-group-append">
                                            <button type="submit" className="input-group-text">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <div className="hs-unfold mr-2">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-primary-2 dropdown-toggle min-height-40"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="tio-download-to mr-1"></i> Export
                                    </button>

                                    <div className="dropdown-menu dropdown-menu-sm-end">
                                        <span className="dropdown-header">Download Options</span>
                                        <a
                                            id="export-excel"
                                            className="dropdown-item"
                                            href={`/admin/pos/orders/export?branch_id=${branchId}&start_date=${startDate}&end_date=${endDate}&search=${searchQuery}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="avatar avatar-xss avatar-4by3 mr-2"
                                                src="/assets/admin/svg/components/excel.svg"
                                                alt="Excel"
                                            />
                                            Excel
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="table-responsive datatable-custom">
                            <table
                                className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>order id</th>
                                        <th>order date</th>
                                        <th>customer info</th>
                                        <th>Branch</th>
                                        <th>Total Amount</th>
                                        <th className="text-center">Order Status</th>
                                        <th className="text-center">order type</th>
                                        <th className="text-center">actions</th>
                                    </tr>
                                </thead>

                                <tbody id="set-rows">
                                    {/* @foreach ($orders as $key => $order) */}
                                    <tr className="status-{{ $order['order_status'] }} class-all">
                                        <td className="">

                                        </td>
                                        <td>
                                            <a
                                                href="{{ route('admin.pos.order-details', ['id' => $order['id']]) }}">Order Id</a>
                                        </td>
                                        <td>14-02-2025 <br />
                                            11:34 Am
                                        </td>

                                        <td>
                                            {/* @if (isset($order->customer)) */}
                                            <div>
                                                <a className="text-body text-capitalize font-medium"
                                                    href="{{ route('admin.customer.view', [$order['user_id']]) }}">RAvikant Suthar</a>
                                            </div>
                                            <div className="text-sm">
                                                <a href="">1234567890</a>
                                            </div>
                                            {/* // @elseif($order->user_id != null && !isset($order->customer)) */}
                                            <label className="text-danger">
                                            </label>

                                            <label className="text-success">Walking Customer
                                            </label>

                                        </td>
                                        <td>
                                            <label
                                                className="badge badge-soft-primary">Branch Name</label>
                                        </td>
                                        <td>
                                            <div className="mw-85">
                                                <div>

                                                    Order Amount
                                                </div>
                                                {/* @if ($order->payment_status == 'paid') */}
                                                <span className="text-success">
                                                    paid
                                                </span>

                                                <span className="text-danger">
                                                    unpaid
                                                </span>

                                            </div>
                                        </td>
                                        <td className="text-capitalize text-center">
                                            @if ($order['order_status'] == 'pending')
                                            <span className="badge badge-soft-info">
                                                pending
                                            </span>
                                            @elseif($order['order_status'] == 'confirmed')
                                            <span className="badge badge-soft-info">
                                                confirmed
                                            </span>
                                            @elseif($order['order_status'] == 'processing')
                                            <span className="badge badge-soft-warning">
                                                packaging
                                            </span>
                                            @elseif($order['order_status'] == 'picked_up')
                                            <span className="badge badge-soft-warning">
                                                out_for_delivery
                                            </span>
                                            @elseif($order['order_status'] == 'delivered')
                                            <span className="badge badge-soft-success">
                                                Delivered
                                            </span>

                                            <span className="badge badge-soft-danger">
                                                order Status
                                            </span>

                                        </td>
                                        <td className="text-capitalize text-center">
                                            @if ($order['order_type'] == 'take_away')
                                            <span className="badge badge-soft-info">
                                                Take Away
                                            </span>
                                            @elseif($order['order_type'] == 'pos')
                                            <span className="badge badge-soft-info">
                                                POS
                                            </span>
                                            @else
                                            <span className="badge badge-soft-success">
                                                Delivery
                                            </span>
                                            @endif
                                        </td>
                                        <td>
                                            <div className="btn--container justify-content-center">
                                                <a className="action-btn btn--primary btn-outline-primary"
                                                    href="{{ route('admin.pos.order-details', ['id' => $order['id']]) }}"><i
                                                        className="tio-visible-outlined"></i></a>
                                                <button className="action-btn btn-outline-primary-2 print-invoice-btn"
                                                    data-order-id="{{ $order->id }}" target="_blank" type="button"><i
                                                        className="tio-print"></i></button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                {/* // @if (count($orders) == 0) */}
                        <div className="text-center p-4">
                            <img className="w-120px mb-3" src="{{ asset('/public/assets/admin/svg/illustrations/sorry.svg') }}"
                                alt="{{ translate('Image Description') }}" />
                            <p className="mb-0">No_data_to_show</p>
                        </div>
                        <div className="card-footer px-0">
                            {/* {!!$orders -> links()!!} */}
                        </div>
                    </div>
                </div>
            </div >

            <div className="modal fade" id="print-invoice" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Print Invoice</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <input type="button" className="btn btn-primary non-printable print-button"
                                    value="{{ translate('Proceed, If thermal printer is ready.') }}" />
                                <a href="{{ url()->previous() }}" className="btn btn-danger non-printable">Back</a>
                            </div>
                            <hr className="non-printable" />
                            <div className="row m-auto" id="printableArea">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout >
    )
}

export default OrderPOSIndex
