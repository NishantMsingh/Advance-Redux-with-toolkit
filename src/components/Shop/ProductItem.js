import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../Store/cart-slice';

const ProductItem = (props) => {
  const dispatch=useDispatch();
  const { title, price, description,id } = props;
  const addItemHandler=()=>{
    dispatch(cartAction.addItem({
      id, title,price,
      // if the keyname and the variable name willbe the same we can omit like this -- advance javascript 
    }));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
