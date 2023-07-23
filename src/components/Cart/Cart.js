import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
  const item=useSelector(state=>state.cart.items);
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
       {item.map((value)=>{
        return <CartItem key={value.id}
          item={{ id:value.id, title: value.name, quantity: value.quantity, price: value.price}}
        />
       }) }
      </ul>
    </Card>
  );
};

export default Cart;
