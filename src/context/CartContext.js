import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod=>{
            totalQuantity += prod.quantity
        })
        return totalQuantity
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}