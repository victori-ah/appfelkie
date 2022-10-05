import { Link } from "react-router-dom";
import Counter from '../Counter/counter'

const Item = ({ prod }) => {
    return(
        <div className="card">
            <img src={prod.img} alt={prod.alt} className='prodImg'></img>
            <div className="prodData d-flex flex-column justify-content-center">
                <h1 className='prodTitleText'>{prod.name}</h1>
                <div className="d-flex justify-content-between p-1">
                    <h2 className="prodPrice">$ {prod.price}</h2>
                    <Counter />
                </div>
            </div>
            <button className="btnDetail"><Link to={`/detail/${prod.id}`} className='nav-link' >Detalles</Link></button>
        </div>
    )
}

export default Item