import Counter from '../Counter/counter';

const Detail = ({ product }) => {
    return(
        <div className='d-flex row m-5'>
            <div className='col'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={product.img} alt={product.alt} className="imgFlip"></img>
                        </div>
                        <div className="flip-card-back">
                            <img src={product.img2} alt={product.alt} className="imgFlip"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col d-flex row'>
                <div className='col '>
                    <h1 className='detailTitleText'>{product.name}</h1>
                    <h2 className='detailPrice'>$ {product.price}</h2>
                    <p className='detailText mt-5'>{product.description}</p>
                    <Counter />
                </div>
            </div>
        </div>
    )
}

export default Detail