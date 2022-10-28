import './CartBrief.css'

const CartBrief = ({ name, quantity, price }) => {
    return(
        <ul className="cartBrief">
            <li className="cartBriefItem">{name} x {quantity} = {price*quantity}</li>
        </ul>
    )
}

export default CartBrief