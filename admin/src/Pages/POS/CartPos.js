import React from 'react'

const CartPos = () => {
    return (
        <>
<div className="d-flex flex-row cart--table-scroll">
    <div className="table-responsive">
        <table className="table table-bordered border-left-0 border-right-0 middle-align">
            <thead className="thead-light">
            <tr>
                <th scope="col">item</th>
                <th scope="col" className="text-center">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
                
            {/* @if(session()->has('cart') && count( session()->get('cart')) > 0) */}
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    {/* @if (!empty(json_decode($cartItem['image'],true))) */}
                                        <img className="avatar avatar-sm mr-1"
                                            src="{{asset('storage/app/public/product')}}/{{json_decode($cartItem['image'], true)[0]}}"
                                            onerror="this.src='{{asset('public/assets/admin/img/160x160/2.png')}}'"
                                            alt="{{$cartItem['name']}} {{translate('image')}}" />
                                    {/* @else */}
                                        <img className="avatar avatar-sm mr-1"
                                        src="{{asset('public/assets/admin/img/160x160/2.png')}}" />

                                    <div className="media-body">
                                        <h6 className="text-hover-primary mb-0">Product Name</h6>
                                        <small>Varient</small>
                                    </div>
                                </div>
                            </td>
                            <td className="align-items-center text-center">
                                <input type="number" data-key="{{$key}}" id="{{ $cartItem['id'] }}" className="amount--input form-control text-center"
                                    value="{{$cartItem['quantity']}}" min="1" max="{{ $product['total_stock'] }}" onkeyup="updateQuantity(event)" />
                            </td>
                            <td className="text-center px-0 py-1">
                                <div className="btn text-left">
                                    Product SubTotal
                                </div>
                            </td>
                            <td>
                                <div className="d-flex flex-wrap justify-content-center">
                                    <a href="javascript:removeFromCart({{$key}})" className="btn btn-sm btn--danger rounded-full action-btn">
                                        <i className="tio-delete-outlined"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        
            </tbody>
        </table>
    </div>
</div>


<div className="box p-3">
    <dl className="row">
        <dt className="col-sm-6">sub_total :</dt>
        <dd className="col-sm-6 text-right">{'SubTotal'}</dd>


        <dt className="col-sm-6">product discount:
        </dt>
        <dd className="col-sm-6 text-right"> - 11.27</dd>
        <dt className="col-sm-6">extra discount:
        </dt>
        <dd className="col-sm-6 text-right">
            <button className="btn btn-sm" type="button" data-toggle="modal" data-target="#add-discount"><i
                    className="tio-edit"></i>
            </button> - 110 </dd>

        <dt className="col-sm-6">tax:
             {/* {{ \App\CentralLogics\Helpers::get_business_settings('product_vat_tax_status') === 'included'?  '(Included)': ''}} */}
             </dt>
        <dd className="col-sm-6 text-right">20.32 </dd>
        <dt className="col-sm-6">Delivery Charge :</dt>
        <dd className="col-sm-6 text-right">25</dd>
        <dt className="col-12">
            <hr className="mt-0" />
        </dt>
        <dt className="col-sm-6">total :</dt>
        <dd className="col-sm-6 text-right h4 b">122.36</dd>
    </dl>
    <div>
        <form action="{{route('admin.pos.order')}}" id='order_place' method="post">
            @csrf
            <div className="pos--payment-options mt-3 mb-3">
                <h5 className="mb-3">Payment Method</h5>
                <ul>
                    <li 
                    // style="display: {{ !session()->has('order_type') || session('order_type') == 'take_away' ?  'block' : 'none' }}"
                    >
                        <label>
                            <input type="radio" name="type" value="cash" hidden="" />
                            <span>cash</span>
                        </label>
                    </li>
                    <li 
                    // style="display: {{ !session()->has('order_type') || session('order_type') == 'take_away' ?  'block' : 'none' }}"
                    >
                        <label>
                            <input type="radio" name="type" value="card" hidden="" />
                            <span>card</span>
                        </label>
                    </li>
                    <li 
                    // style="display: {{ session('order_type') == 'home_delivery' ?  'block' : 'none' }}" 
                    >
                        <label>
                            <input type="radio" name="type" value="cash_on_delivery" hidden="" />
                            <span>Cash On Delivery</span>
                        </label>
                    </li>
                </ul>
            </div>

            <div className="row button--bottom-fixed g-1 bg-white ">
                <div className="col-sm-6">
                    <a className="btn btn-outline-danger btn--danger btn-sm btn-block cancel-order-button"><i
                            className="fa fa-times-circle "></i> Cancel Order </a>
                </div>
                <div className="col-sm-6">
                    <button type="submit" className="btn  btn--primary btn-sm btn-block"><i className="fa fa-shopping-bag"></i>
                        Place Order
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>

<div className="modal fade" id="add-discount" tabindex="-1">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Update Discount</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form action="{{route('admin.pos.discount')}}" method="post" className="row">
                    @csrf
                    <div className="form-group col-sm-6">
                        <label htmlFor="">Discount</label>
                        <input type="number" min="0" max="" value="{{session()->get('cart')['extra_discount'] ?? 0}}"
                               id="extra_discount_input" className="form-control" name="discount" step="any" placeholder="{{translate('Ex: 45')}}" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="">Type</label>
                        <select name="type" className="form-control" id="discount_type_select">
                            <option value="amount">
                                Ruppes
                            </option>
                            <option value="percent">(%)
                            </option>
                        </select>
                    </div>
                    <div className="col-sm-12">
                        <div className="btn--container justify-content-end">
                            <button className="btn btn-sm btn--reset" type="reset">reset</button>
                            <button className="btn btn-sm btn--primary" type="submit">submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div className="modal fade" id="coupon-discount" tabindex="-1">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">coupon_discount</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body pb-2 pt-3">
                <form className="row">
                    @csrf
                    <div className="form-group col-sm-12">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-12">
                        <div className="btn--container justify-content-end">
                            <button className="btn btn-sm btn--reset" type="reset">Reset</button>
                            <button className="btn btn-sm btn--primary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default CartPos
