import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from './Cart.module.css'

const Cart = () => {
    return(
        <Card className={classes.cart}>
            <h2>Your Items Cart</h2>
        <CartItem item={{ title: 'Test Item', quantity: 3, price: 10, total: 12}} />
        </Card>
    )
}
export default Cart;