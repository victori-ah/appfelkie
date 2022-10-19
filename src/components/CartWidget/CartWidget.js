import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return (
        <div className='btnCart'>
            <p className='widgetNumber'>{totalQuantity}</p>
            <Link to='/cart' >
                <img src='https://cdn.sweettooth.io/v1/images/launcher_icons/bag.svg?color=%23000000' alt='Bag icon'/>
            </Link>
        </div>
    )
}

export default CartWidget 