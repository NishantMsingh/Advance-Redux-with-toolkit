import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch=useDispatch();

  
  const toggelCarthandler=()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggelCarthandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
