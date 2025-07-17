import React, { useEffect, useState } from 'react'
import AddressPOS from './AddressPOS'
import OrderInvoice from './Orders/OrderInvoice'
import AddCustomerModal from './AddCustomerModal'
import AdminLayout from '../../componets/Layouts/AdminLayout'
import SingleProductPOS from './SingleProductPOS'
import CartPos from './CartPos'
import { useAuth } from '../../Contexts/authContext'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AdminPOS = () => {
    const [auth] = useAuth();
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const navigator = useNavigate()


    const gettingCategory = async () => {
        try {
            const { data } = await axios.get(`/api/v1/category/getAdminCategory`, {
                headers: {
                    Authorization: `${auth?.token}`,
                }
            });
            if (data?.success) {
                setCategory(data?.category)
            } else {

                if (data?.message == `User is Not Login`) {
                    navigator(`/admin/auth/login`);
                } else {
                    toast.error(data?.message)
                }
            }
        } catch (error) {
            toast.error(error?.responce?.data?.message)
        }
    }


    const gettingProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/getAdminProducts`, {
                headers: {
                    "Authorization": auth.token
                }
            })
            if (data?.success) {
                setProducts(data?.product);
            } else {
                toast.error(data?.message)
            }
        } catch (error) {
            toast.error(error?.responce?.data?.message);
        }
    }

    useEffect(() => {
        gettingCategory();
        gettingProduct();
    }, [])

    return (
        <AdminLayout>
            <div class="content container-fluid">
                <div class="d-flex flex-wrap">
                    <div class="order--pos-left">
                        <div class="card">
                            <div class="card-header m-1 bg-light border-0">
                                <h5 class="card-title">
                                    <span>
                                        Product section
                                    </span>
                                </h5>
                            </div>
                            <div class="card-body">
                                <div class="row mb-4 g-3">
                                    <div class="col-sm-6">
                                        <div class="input-group header-item">
                                            <select name="category" id="category" class="form-control js-select2-custom mx-1"
                                                title="select category">
                                                <option value="">All Categories</option>
                                                <option value="category_i"
                                                >Category Name</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <form id="search-form">
                                            <div class="input-group input-group-merge input-group-flush">
                                                <div class="input-group-prepend w--30 justify-content-center">
                                                    <div class="input-group-text">
                                                        <i class="tio-search"></i>
                                                    </div>
                                                </div>
                                                <input id="datatableSearch" type="search" 
                                                    name="search" class="form-control rounded border"
                                                    placeholder="Search by product name"
                                                    aria-label="Search here" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div id="items">
                                    <div class="row g-1">

                                        <div class="order--item-box item-box">
                                            {products && products.map((prod, i) => (

                                                <SingleProductPOS product={prod} key={i} />
                                            ))}
                                            {/* @include('admin-views.pos._single_product', [
                                            'product' => $product,
                                        ]) */}
                                        </div>

                                    </div>
                                </div>

                                <div class="pt-4">
                                    {/* {!!$products -> withQueryString() -> links()!!} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order--pos-right">
                        <div class="card">
                            <div class="card-header bg-light border-0 m-1">
                                <h5 class="card-title">
                                    <span>
                                        Billing section
                                    </span>
                                </h5>
                            </div>
                            <div class="card-body p-0">
                                <div class="px-4">
                                    <div class="w-100">
                                        <div class="d-flex flex-wrap flex-row py-2 add--customer-btn">
                                            <select id='customer' name="customer_id"
                                                data-placeholder="{{ translate('Walk In Customer') }}"
                                                class="js-data-example-ajax form-control m-1">
                                                <option value="" selected disabled>select customer
                                                </option>

                                                <option value="user_id">
                                                    User Name</option>

                                            </select>
                                            <button class="btn btn--primary rounded font-regular" data-toggle="modal"
                                                data-target="#add-customer"
                                                type="button">Add New Customer</button>
                                        </div>
                                    </div>
                                    <div class="w-100 py-2">
                                        <h5>Select Branch</h5>
                                        <select id="branch" name="branch_id" class="js-data-example-ajax-2 form-control">
                                            <option value="branch_id">
                                                Branch Name</option>
                                        </select>
                                    </div>
                                    <div class="w-100 py-2">
                                        <div class="form-group">
                                            <label
                                                class="input-label font-weight-semibold fz-16 text-dark">Select Order Type</label>
                                            <div>
                                                <div class="form-control d-flex flex-column-3">
                                                    <label class="custom-radio d-flex gap-2 align-items-center m-0">
                                                        <input type="radio" class="order-type-radio" name="order_type"
                                                            value="take_away"
                                                        // {{ !session()->has('order_type') || session()->get('order_type') == 'take_away' ? 'checked' : '' }}>
                                                        />
                                                        <span class="media align-items-center mb-0">
                                                            <span class="media-body ml-1">Take Away</span>
                                                        </span>
                                                    </label>
                                                    <label class="custom-radio d-flex gap-2 align-items-center m-0 ml-3">
                                                        <input type="radio" class="order-type-radio" name="order_type"
                                                            value="home_delivery" />
                                                        <span class="media align-items-center mb-0">
                                                            <span class="media-body ml-1">Home Delivery</span>
                                                        </span>
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-100 py-2">
                                        <div class="form-group d-none" id="home_delivery_section">
                                            <div class="d-flex justify-content-between">
                                                <label for=""
                                                    class="font-weight-semibold fz-16 text-dark">Delivery Information
                                                    <small>Home Delivery</small>
                                                </label>
                                                <span class="edit-btn cursor-pointer" id="delivery_address" data-toggle="modal"
                                                    data-target="#AddressModal"><i class="tio-edit"></i>
                                                </span>
                                            </div>
                                            <div class="pos--delivery-options-info d-flex flex-wrap" id="del-add">
                                                {/* @include('admin-views.pos._address') */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class='w-100' id="cart">
                                        <CartPos />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <AddCustomerModal />
        </AdminLayout >
    )
}

export default AdminPOS
