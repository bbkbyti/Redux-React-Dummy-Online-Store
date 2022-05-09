
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import classes from './CartItem.module.css'

const CartItem = (props) => {
    const dispatch = useDispatch();


    const { title, price, total, quantity, id } = props.item;


    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id: id,
            title: title,
            price: price,
        }))
    }
    const removeItemHandler = () => {
        dispatch(cartActions.removeFromCart(id))
    }
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total}{' '}
                    <span className={classes.itemPrice}>(${price}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    X <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={addItemHandler}>+</button>
                    <button onClick={removeItemHandler}>-</button>
                </div>
            </div>
        </li>
    )
}
export default CartItem;