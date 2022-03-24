import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // Because In React Data flows in Unidirectional way as it is one way binding......
    // Event Handler from Product Component to use in another child Component...
    const handleAddToCart = (product) => {
        // console.log('clicked', product)

        //Note: Generally we use array.push(product) to add an element To te existing
        //      array... But in React we use spread Operators to copy then add the New
        //      product..... Because that helps Virtual dom to function....
        //       and state is immutable.....

        const newCart = [...cart, product];
        setCart(newCart)
    }



    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;