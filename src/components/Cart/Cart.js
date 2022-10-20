import './Cart.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { FaRegTrashAlt } from 'react-icons/fa';

const Cart = () => {
    const { cart, deleteAll, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div className='container-sm mt-5'>
                <h3 className='cartTitle'>Your cart is empty...</h3>
                <Link to='/' className='cartText2 cartShopBtn'>Keep shopping!</Link>
            </div>
        )
    }
    return(
        <div className='container-sm d-flex flex-column mt-5 mb-5'>
            <h3 className='cartTitle'>Shopping cart</h3>
            { cart.map(p=><CartItem key={p.id}{...p}/>) }
            <div className='d-flex flex-column'>
                <p className='cartText mt-3'>Total: ${total}</p> 
                <Link to='/checkout' className='cartText2 cartShopBtn'>Shop now!</Link>
            </div>
            <button onClick={() => deleteAll()} className='cartTrashBtn'>Delete all cart contents <FaRegTrashAlt /></button>
        </div>
    )
}

export default Cart