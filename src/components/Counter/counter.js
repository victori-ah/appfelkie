import { useState } from 'react';

const Counter = ({stock = 0, initial = 0, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if(quantity>0){
            setQuantity(quantity-1)
        }
    }
    const increment = () => {
        if(quantity<stock){
            setQuantity(quantity+1)
        }
    }

    return(
        <div className='counter-container'>
            <p className='counter-text'>{quantity}</p>
            <div >
                <button onClick={decrement} className='btn1'> - </button>
                <button onClick={increment} className='btn1'> + </button>
            </div>
            <button className='btn1 btnAdd' onClick={()=>onAdd(quantity)} >Add to cart</button>
        </div>
    )
}

export default Counter