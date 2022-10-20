import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa'

const CartItem = ({ id, name, quantity, price, img }) => {
    const {removeItem} = useContext(CartContext)
    const remove = (id) => {
        removeItem(id)
    }

    return(
        <article className='cartDisplay col d-flex flex-wrap row'>
            <img src={img} alt={name} className='cartImg'/>
            <div className='cartItemName col-sm-auto'>
                <h4 className='cartItemTitle'>{name}</h4>
                <p className='cartText'>Quantity: {quantity}</p>
            </div>
            <div className='col-sm cartPrice'>
                <h5 className='cartSubtitle'>Price x unit</h5>
                <p className='cartText'>${price}</p>
            </div>
            <div className='col-sm cartPrice'>
                <h5 className='cartSubtitle'>Subtotal</h5>
                <p className='cartText'>${price*quantity}</p>
            </div>
            <div className='col-sm cartPrice2'>
                <button className='cartDeleteBtn' onClick={() => remove(id)}><FaTrashAlt className='icon' /></button>
            </div>
        </article>
    )
}

export default CartItem