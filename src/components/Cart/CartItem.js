import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartAction } from '../../Store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, price ,id} = props.item;


  const dispatch=useDispatch();
 const removeItemHandler=()=>{
  dispatch(cartAction.removeItem(id));
 } 


 const addItemHandler=()=>{
  dispatch(cartAction.addItem( { title, price ,id}));
 }
  return (
    <li className={classes.item} id={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
    
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
