import React, { useEffect, useState } from 'react';
import { addToDb, getCartFromLocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log('Load Data 1st line')
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log('Load products finished')
            })
    }, [])

    useEffect(() => {
        console.log('local storage 1st line', products)
        const storedCart = getCartFromLocalStorage()
        const savedInCart = [];
        for (const id in storedCart) {
            const productsAddedInLocal = products.find(product => product.id === id)

            if (productsAddedInLocal) {
                // Huge mistake in here we are trying to set quantity in Local Storage
                // storing variable... But unfortunately productsAddedInLocal doesn't have any connection with Local Storage.... It is just an array.... 
                // const quantity = productsAddedInLocal[id];

                // Correction
                const quantity = storedCart[id];
                productsAddedInLocal.quantity = quantity;

                console.log(productsAddedInLocal)
                savedInCart.push(productsAddedInLocal);

            }
            setCart(savedInCart)
        }
        console.log('Local Storage finished')
    }, [products])


    // NOTE: Headline is: Dependency Injection.... as useEffect() hooks Works Asynchronously,
    //      useEffect() For getting local storage runs Before the useEffect where we Load products
    //   For that reason useEffect() hook runs only once where we seek products before
    //   it is loaded... Illustration in 4 console.logs we are using.....
    //   to Solve this problem and Run useEffect() of local storage after products are loaded we set The Dependency parameter of useEffect() to products.... That means it Runs whenever the products State changes  












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
        addToDb(product.id)
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