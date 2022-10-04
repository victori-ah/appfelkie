import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    console.log(products)

    return(
        <div className='itemListContainer'>
            <h1 className='simple-text'> {greeting} </h1>
            <div>
                { products.map(prod => (
                    <div key={prod.id}>
                        <h1>{prod.name}</h1>
                        <img src={prod.img} alt={prod.alt}></img>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ItemListContainer