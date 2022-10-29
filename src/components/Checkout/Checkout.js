import './Checkout.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import BuyForm from '../Form/Form';
import CartBrief from '../Cart/CartBrief';

const Checkout = () => {
    const { cart } = useContext(CartContext)

    return(
        <div className='checkout container-sm'>
            <article className=''>
                <h1 className='checkout-title'>Checkout list</h1>
                { cart.map(p=><CartBrief key={p.id}{...p}/>) }
            </article>
            <article className=''>
                <BuyForm />
            </article>
        </div>
    )
}

export default Checkout