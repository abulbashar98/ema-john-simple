import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getCartFromLocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);



    // Note: 2nd time practice...
    // useEffect(() => {
    //     const storedCart = getCartFromLocalStorage()
    //     const savedProducts = [];
    //     for (const id in storedCart) {
    //         const addedProductsInLocal = products.find(product => product.id === id)
    //         if (addedProductsInLocal) {
    //             const quantity = storedCart[id];
    //             addedProductsInLocal.quantity = quantity
    //             // console.log(addedProductsInLocal)
    //             savedProducts.push(addedProductsInLocal)
    //         }
    // setCart(savedProducts)
    //     } 
    //     

    // }, [products])



    useEffect(() => {
        // console.log('local storage 1st line', products)
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

                // console.log(productsAddedInLocal)
                savedInCart.push(productsAddedInLocal);

            }
            console.log('works now')
            setCart(savedInCart)
        }
        // console.log('Local Storage finished')
    }, [products])

    // NOTE: Headline is: Dependency Injection.... as useEffect() hooks Works Asynchronously,
    //      useEffect() For getting local storage runs Before the useEffect where we Load products
    //   For that reason useEffect() hook runs only once where we seek products before
    //   it is loaded... Illustration in 4 console.logs we are using.....
    //   to Solve this problem and Run useEffect() of local storage after products are 
    //   loaded we set The Dependency parameter of useEffect() to products.... 
    //   That means it Runs whenever the products State changes  










    // Because In React Data flows in Unidirectional way as it is one way binding......
    // Event Handler from Product Component to use in another child Component...
    // const handleAddToCart = (product) => {
    //     console.log('clicked', product)

    //     //Note: Generally we use array.push(product) to add an element To te existing
    //     //      array... But in React we use spread Operators to copy then add the New
    //     //      product..... Because that helps Virtual dom to function....
    //     //       and state is immutable.....

    //     const newCart = [...cart, product];
    //     setCart(newCart)
    //     addToDb(product.id)
    // }



    const handleAddToCart = (selectedProduct) => {
        console.log('clicked', selectedProduct)

        //Note:  At this stage both   Local Storage and Products added in Cart as
        //       saved products are not uPdating onClick at the same time... 
        //      We have seen on Console that onClick Value in Stored Cart Object
        //       is increasing by 1, if the id already exists in local cart...
        //      but the Default value of Products quantity property was 0.. they 
        //     passed in cart with quantity property value of 0.... 


        // Realization: As default quantity value is 0 for the products.... We sent all
        //              the products on click to cart and Checked for the product that          holds the event 
        //  handler button.... if thar exists we send that besides all products and and add to the quantity in that way... If it does not exist yet we set the product quantity 1... and send it Besides the rest products holding 0 quantity by default.... In terms of reload it uses the useEffect() as dependency products changed... Takes the keys and values from Local storage... find products and quantities in them and setCart() 


        let newCart = [];
        const exists = products.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [cart, selectedProduct]
        }
        else {
            const rest = products.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
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