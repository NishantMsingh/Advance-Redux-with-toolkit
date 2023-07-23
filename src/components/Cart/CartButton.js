import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQTY = useSelector(state => state.cart.totalQuantity); // Corrected the state property name

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQTY}</span>
    </button>
  );
};

export default CartButton;
