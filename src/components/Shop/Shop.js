import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='shop'>
            <div className="products">This is products: {products.length}</div>
            <div className="order-summary">Order Summary</div>
        </div>
    );
};

export default Shop;