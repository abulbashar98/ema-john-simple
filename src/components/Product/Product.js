import React from 'react';
import './product.css'

const Product = (props) => {

    // const { name, img, seller, ratings, price } = props.product;
    // console.log(props)
    const { handleAddToCart, product } = props;
    const { name, img, seller, ratings, price } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            {/* <button onClick={handleAddToCart(product)} className='btn-cart'> */}
            {/* before destructuring */}
            {/* <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'> */}
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;