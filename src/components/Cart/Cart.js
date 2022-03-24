import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart)

    let total = 0;
    let ShippingCharge = 0;

    for (const product of cart) {
        total = total + product.price;
        ShippingCharge = ShippingCharge + product.shipping;
    }

    const tax = (total * 0.1).toFixed(2);


    // Note: toFixed(digits) method returns the output in string.....
    const grandTotal = total + ShippingCharge + parseFloat(tax);

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h4>Selected Items: {cart.length}</h4>
            <h4>Total Price: ${total}</h4>
            <h4>Total Shipping Charge: ${ShippingCharge}</h4>
            <h4>Tax: ${tax}</h4>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;