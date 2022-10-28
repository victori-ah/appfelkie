import './Checkout.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import BuyForm from '../Form/Form';
import CartBrief from '../Cart/CartBrief';

const Checkout = () => {
    const { cart } = useContext(CartContext)

    return(
        <div className='checkout container-sm row justify-content-center'>
            <article className="col">
                <h1>Checkout list</h1>
                { cart.map(p=><CartBrief key={p.id}{...p}/>) }
            </article>
            <article className='col'>
                <BuyForm />
            </article>
        </div>
    )
}

export default Checkout