
import React from 'react'

const SingleProductPOS = ({product}) => {
        
    return (
        <div className="product-card card quick-view-trigger" data-product-id="{{ $product->id }}">


            <div className="card-header inline_product clickable p-0">
                {/* @if (!empty(json_decode($product['image'],true))) */}
                <img src={`/static/product/${product.image}`} className="w-100 h-100 object-cover aspect-ratio-80" />
                {/* @else */}
                {/* <img
                    src="{{asset('public/assets/admin/img/160x160/2.png')}}"
                    className="w-100 h-100 object-cover aspect-ratio-80"
                /> */}
            </div>

            <div className="card-body inline_product text-center p-1 clickable">
                <div className="product-title1 text-dark font-weight-bold">
                    {product.name}
                </div>
                <div className="justify-content-between text-center">
                    <div className="product-price text-center">
                        {product.price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPOS
