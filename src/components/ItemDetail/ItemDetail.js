import Counter from '../Counter/counter';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';


const ItemDetail = ({ id, name, img, img2, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity, img
        }

        addItem(productToAdd)
    }

    const productAddedQuantity = getProductQuantity(id)

    return(
        <div className='d-flex row m-5'>
            <article className='col'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={img} alt={name} className="imgFlip"></img>
                        </div>
                        <div className="flip-card-back">
                            <img src={img2} alt={name} className="imgFlip"></img>
                        </div>
                    </div>
                </div>
            </article>
            <article className='col d-flex row'>
                <div className='col '>
                    <h1 className='detailTitleText'>{name}</h1>
                    <h2 className='detailPrice'>$ {price}</h2>
                    <p className='detailText mt-5'>{description}</p>
                    <div className='counterContainer'>
                        {
                            quantityToAdd === 0 ? (
                                <Counter onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity} />
                            ) : (
                                <div className='finalizarContainer'>
                                    <button className='btnDetail'><Link to='/cart' className='finalizarText' >Go to checkout</Link></button>
                                    <button className='btnDetail'><Link to='/' className='finalizarText' >Keep Shopping</Link></button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ItemDetail