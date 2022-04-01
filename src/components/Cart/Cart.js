import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props.children)

    //  NOTE: We previously have set the quantity properties of Products we found using
    //    find() pushed them to an Array and Sent them here in Cart using 
    //   setCart() state.... But yet we are not using them to set the Selected Items, 
    //   or values,prices in terms of quantity...... Let's solve using quantity...



    let quantity = 0;
    let total = 0;
    let ShippingCharge = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        ShippingCharge = ShippingCharge + product.shipping;
    }

    const tax = (total * 0.1).toFixed(2);


    // Note: toFixed(digits) method returns the output in string.....
    const grandTotal = total + ShippingCharge + parseFloat(tax);

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h4>Selected Items: {quantity}</h4>
            <h4>Total Price: ${total}</h4>
            <h4>Total Shipping Charge: ${ShippingCharge}</h4>
            <h4>Tax: ${tax}</h4>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
            {props.children}
        </div>
    );
};

export default Cart;