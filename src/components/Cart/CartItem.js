import { useState, useEffect } from 'react';
import { addToCart, decrement, removeFromCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

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
          onClick={() => {addToCart(item.id)}}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => {decrement(item.id)}}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => {removeFromCart(item.id)}}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;