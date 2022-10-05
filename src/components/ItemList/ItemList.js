import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return(
        <div className="itemList d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
            { products.map(prod => (
                <Item key={prod.id} prod={prod}/>
            ))
            }
        </div>
    )
}

export default ItemList