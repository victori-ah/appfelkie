import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import './CartWidget.css'

const CartWidget = () => {
    return (
        <button type="button" className='btnCart'><FaShoppingBag /></button>
    )
}

export default CartWidget