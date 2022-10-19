import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import PageLoader from "../pageLoader/PageLoader";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase'

const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const data = doc.data()
            const productAdapted = {  id: doc.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
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