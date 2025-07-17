import React from 'react'

const OrderInvoice = () => {
    return (
        <div className="initial-38-1">
            <div className="pt-3">
                <img src="{{ App\CentralLogics\Helpers::onErrorImage($logo, asset('storage/app/public/shop') . '/' . $logo, asset('/public/assets/admin/img/food.png'), 'shop/')}}"
                    className="initial-38-2" alt="{{ translate('logo') }}" />

            </div>
            <div className="text-center pt-2 mb-3">
                <h2 className="initial-38-3">Branch Name</h2>
                <h5 className="text-break initial-38-4">
                    Branch Address
                </h5>
                <h5 className="initial-38-4 initial-38-3">
                    Phone : 1234567890
                </h5>

                <h5 className="initial-38-4 initial-38-3 fz-12px">
                    Gst No : 1234567890
                </h5>

            </div>
            <span className="initial-38-5">---------------------------------------------------------------------------------</span>
            <div className="row mt-3">
                <div className="col-6">
                    <h5>Order ID :
                        <span className="font-light"> OrderID</span>
                    </h5>
                </div>
                <div className="col-6">
                    <h5>
                        <span className="font-light">
                            21-06-2025 11:55 
                        </span>
                    </h5>
                </div>
                <div className="col-12">
            {/* @if(isset($order->customer)) */}
                    <h5>
                        Customer Name :
                        <span className="font-light">
                            Ravikant Suthar
                        </span>
                    </h5>
                    <h5>
                        phone:
                        <span className="font-light">
                            Customer Number
                        </span>
                    </h5>
                    
                    <h5 className="text-break">address :
                        {/* <span className="font-light">{{ isset($address)? $address['address'] : ''}}</span> */}
                    </h5>
                    
                </div>
            </div>
            <h5 className="text-uppercase"></h5>
            <span className="initial-38-5">---------------------------------------------------------------------------------</span>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th className="initial-38-6 border-top-0 border-bottom-0">Qty</th>
                        <th className="initial-38-7 border-top-0 border-bottom-0">DESC</th>
                        <th className="initial-38-7 border-top-0 border-bottom-0">Price</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td className="">
                            Quantity
                        </td>
                        <td className="">
                            Product Name<br />
                                {/* @if(count(json_decode($detail['variation'],true))>0) */}
                                <strong><u>Variation : </u></strong>
                                {/* @foreach(json_decode($detail['variation'],true)[0] ?? json_decode($detail['variation'],true) as $key1 =>$variation) */}
                                <div className="font-size-sm text-body">
                                    <span className="text-capitalize"> :  </span>
                                    <span className="font-weight-bold">Ruppes</span>
                                </div>

                                <span>Unit Price : Unit Price</span><br />
                                <span>Qty : Product Quantity</span><br />
                                <span>Discount : Discount on product</span>

                        </td>
                        {/* <td className="w-28p">
                                        @php($amount=($detail['price']-$detail['discount_on_product'])*$detail['quantity'])
                                        {{ Helpers::set_symbol($amount) }}
                                    </td> */}
                    </tr>

                </tbody>
            </table>
            <div className="px-3">
                <dl className="row text-right justify-content-center">
                    <dt className="col-6">Items Price:</dt>
                    {/* <dd className="col-6">{{ Helpers::set_symbol($subTotal) }}</dd> */}
                    {/* <dt className="col-6">{{ translate('Tax / VAT') }} {{ $vatStatus == 'included' ? translate('(included)') : ''}}:</dt> */}
                    {/* <dd className="col-6">{{ Helpers::set_symbol($totalTax) }}</dd> */}
                    <dt className="col-6">Subtotal:</dt>
                    {/* <dd className="col-6">
                                    {{ Helpers::set_symbol($subTotal+$updatedTotalTax) }}</dd> */}
                    <dt className="col-6">Coupon Discount:</dt>
                    {/* <dd className="col-6">
                                    - {{ Helpers::set_symbol($order['coupon_discount_amount']) }}</dd> */}
                    <dt className="col-sm-6">extra Discount:</dt>
                    {/* <dd className="col-sm-6">
                                    - {{ Helpers::set_symbol($order['extra_discount']) }}</dd> */}
                    <dt className="col-6">Delivery Fee:</dt>
                    <dd className="col-6">
                        {/* @if($order['order_type']=='take_away') */}

                        {/* @php($del_c=$order['delivery_charge']) */}

                        {/* {{ Helpers::set_symbol($del_c) }} */}
                        <hr />
                    </dd>

                    {/* <dt className="col-6 font-20px">{{ translate('Total') }}:</dt> */}
                    {/* <dd className="col-6 font-20px">{{ Helpers::set_symbol($subTotal+$del_c+$updatedTotalTax-$order['coupon_discount_amount']-$order['extra_discount']) }}</dd> */}
                </dl>
                <span className="initial-38-5">---------------------------------------------------------------------------------</span>
                <h5 className="text-center pt-1">
                    <span className="d-block">"""THANK YOU"""</span>
                </h5>
                <span className="initial-38-5">---------------------------------------------------------------------------------</span>
                {/* <span className="d-block text-center">{{ $footer_text = \App\Model\BusinessSetting::where(['key' => 'footer_text'])->first()->value }}</span> */}
            </div>
        </div>
    )
}

export default OrderInvoice
