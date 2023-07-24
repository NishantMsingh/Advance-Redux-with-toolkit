import { useSelector,useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect  } from 'react';
import Notification from "./components/UI/Notification"
import { sentCartData } from './Store/cart-slice';

 let isInitial=true;
function App() {
  const dispatch=useDispatch();
  const showCart = useSelector(state=>state.ui.cartIsVisible);
  const cart=useSelector(state=>state.cart);
  const notification=useSelector(state=>state.ui.notification);
  useEffect(()=>{
   if(isInitial)
   {
    isInitial=false;
    return;
   }
   dispatch(sentCartData(cart));

  },[cart,dispatch]);
  return (
   <>
   {notification && <Notification title={notification.title} status={notification.status} messege={notification.messege}></Notification>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
