import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Counter = () => {
    const initial = 0;
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if(count>0){
            setCount(count-1)
        }
    }
    const increment = () => {
        setCount(count+1)
    }
    const reset = () => {
        setCount(initial)
    }

    return(
        <div className='counter-container'>
            <p className='counter-text'>{count}</p>
            <div >
                <button onClick={decrement} className='btn1 counter-btn'> - </button>
                <button onClick={increment} className='btn1 counter-btn'> + </button>
                <button onClick={reset} className='btn2 counter-btn'><FaTrashAlt/></button>
            </div>
        </div>
    )
}

export default Counter