import React from 'react';
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
// Estado para guardar los productos
    const [products, setProducts] = useState([])
// Usamos useEffect, se cre auna promesa y usamos then para manejar el estado de esa promesa.
    useEffect(() => {
        // Llamada asincrona
        getProducts().then(res => {
            console.log(res)
            setProducts(res)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return(
        <div className='itemListContainer'>
            <h1 className='simple-text'> {greeting} </h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer