import { useState, useEffect } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
import { populateProduce } from './store/produce';
import { toggleCart } from './store/cart';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch]);

  const cart = useSelector(state => state.cart);

  // const [showCart, setShowCart] = useState(cartOpen);
  
  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => dispatch(toggleCart(true))}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={cart.cartOpen ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={cart.cartOpen ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => dispatch(toggleCart(false))}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;