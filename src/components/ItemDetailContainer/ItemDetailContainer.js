import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import PageLoader from "../pageLoader/PageLoader";

const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading){
        return(
            <PageLoader />
        )
    }

    return(
        <div className="container-sm">
            <ItemDetail {...product} setCart={setCart} className='container-sm' />
        </div>
    )
};

export default ItemDetailContainer