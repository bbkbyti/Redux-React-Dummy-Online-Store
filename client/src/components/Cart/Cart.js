
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from './Cart.module.css'

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items)
    return (
        <Card className={classes.cart}>
            <h2>Your Items Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={{
                            id:item.id,
                            title: item.name,
                            quantity: item.quantity,
                            price: item.price,
                            total: item.totalPrice
                        }} />
                ))}
            </ul>
        </Card>
    )
}
export default Cart;