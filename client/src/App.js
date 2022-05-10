import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';

import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Cart from './components/Cart/Cart';
import Notification from './components/UI/Notification';

import { uiActions } from './store/ui-slice';

let isInitial = true;



function App() {

  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'sending...',
        message: 'sending cart data!'
      }));

      const res = await fetch('https://react-http-33286-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        });

      if (!res.ok) {
        throw new Error('Sending cart data failed!')
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'sent cart data successfully!'
      }));

    }
 //To avoid sending http request by default when reloading:
    if(isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'sending data failed!'
      }));
    })
  }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>


  );
}

export default App;
