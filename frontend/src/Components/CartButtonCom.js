import React, { useState } from "react";
const CartButtonCom = ({ onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <div className="d-flex align-items-center flex-wrap gap-3 mt-3">
            <div className="input-group" style={{ width: "130px" }}>
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleDecrement}
                >
                    –
                </button>
                <input
                    type="text"
                    className="form-control text-center"
                    value={quantity}
                    readOnly
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>

            <button
                className="btn btn-dark px-4 fw-semibold"
                onClick={() => onAddToCart?.(quantity)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default CartButtonCom;
