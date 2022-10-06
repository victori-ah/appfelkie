import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import Detail from "../Detail/Detail";
import PageLoader from "../pageLoader/PageLoader";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then(product => {
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
            <Detail key={product.id} product={product} className='container-sm' />
        </div>
    )
};

export default ItemDetailContainer