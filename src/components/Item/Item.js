import { Link } from "react-router-dom";

const Item = ({ prod }) => {
    return(
        <div className="card">
            <img src={prod.img} alt={prod.alt} className='prodImg'></img>
            <div className="prodData d-flex flex-column justify-content-start">
                <h1 className='prodTitleText'>{prod.name}</h1>
                <h2 className="prodPrice">$ {prod.price}</h2>
            </div>
            <button className="btnDetail"><Link to={`/detail/${prod.id}`} className='nav-link' >Detalles</Link></button>
        </div>
    )
}

export default Item