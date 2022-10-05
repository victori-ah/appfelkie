import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        getProducts(categoryId).then(products => {
            setProducts(products)
        })
    }, [categoryId])

    console.log(products)

    return(
        <div className="container-fluid">
            <div className='container-m'>
                <ItemList products={products}/>
            </div>
        </div>
    )
}

export default ItemListContainer