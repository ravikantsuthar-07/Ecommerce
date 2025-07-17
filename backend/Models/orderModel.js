import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    is_guest: {
        type: Boolean,
        default: false,
    },
    order_amount: {
        type: Number,
        required: true,
    },
    coupon_discount_amount: {
        type: Number,
        default: 0,
    },
    coupon_discount_title: {
        type: String,
        default: null,
    },
    payment_status: {
        type: String,
        default: 'unpaid',
    },
    order_status: {
        type: String,
        default: 'pending'
    },
    total_tax_amount: {
        type: Number,
        default: 0.00
    },
    payment_method: {
        type: String,
        default: null,

    },
    transaction_reference: {
        type: String,
        default: null,
    },
    delivery_address_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
    },
    delivery_man_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeliveryMan',
        default: null,
    },
    delivery_charge: {
        type: Number,
        default: 0.00,
    },
    order_note: {
        type: String,
        default: null,

    },
    coupon_code: {
        type: String,
        default: null,
    },
    order_type: {
        type: String,
        default: 'Delivery'
    },
    branch_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
    },
    time_slot_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TimeSlots',
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    delivery_date: {
        type: Date,
        default: null,
    },
    extra_discount: {
        type: Number,
        default: 0.00
    },
    payment_by: {
        type: String,
        default: 'Cash on Delivery',
    },
}, { timestamp: true, });


const orderModels = mongoose.model('Orders', orderSchema);

export default orderModels;