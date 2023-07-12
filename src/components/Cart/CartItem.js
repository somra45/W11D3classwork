import { useState, useEffect } from 'react';
import { addToCart, decrement, removeFromCart } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={() => {dispatch(addToCart(item.id))}}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => {dispatch(decrement(item.id))}}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => {dispatch(removeFromCart(item.id))}}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;