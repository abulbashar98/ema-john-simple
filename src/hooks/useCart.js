import { useEffect, useState } from "react"
import { getCartFromLocalStorage } from "../utilities/fakedb";


const useCart = (products) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getCartFromLocalStorage();
        const savedInCart = [];
        for (const id in storedCart) {
            const productsAddedToLocal = products.find(product => product.id === id)
            if (productsAddedToLocal) {
                const quantity = storedCart[id];
                productsAddedToLocal.quantity = quantity;
                savedInCart.push(productsAddedToLocal)
            }
        }
        setCart(savedInCart)

    }, [products])

    return [cart, setCart];
}

export default useCart;