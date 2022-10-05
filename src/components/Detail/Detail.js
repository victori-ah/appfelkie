import Counter from '../Counter/counter';

const Detail = ({ product }) => {
    return(
        <div className='d-flex row mt-5'>
            <div className='col'>
                <img src={product.img} alt={product.alt}></img>
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