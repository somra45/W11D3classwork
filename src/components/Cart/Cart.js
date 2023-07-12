import CartItem from './CartItem';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/cart';
// import { getAllCart } from '../../store/cart';

function Cart() {
  const cart = useSelector(state => state.cart);
  delete cart.cartOpen;
  const produce = useSelector(state => state.produce);
  const dispatch = useDispatch();

  const cartItems = Object.values(cart)
    .map(item => {
      return {
        ...item,
        ...produce[item.id]
      };
    });

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
    const cartKeys = Object.keys(cart) 
    cartKeys.forEach(key => dispatch(removeFromCart(key)))
  }

  return (
    <div className="cart">
      <ul>
        {cartItems.sort((a, b) => b.date - a.date).map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;