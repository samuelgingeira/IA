import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default React.memo(function CartItem({ item }) {
  const { increment, decrement, remove } = useContext(CartContext);

  return (
    <div style={{display:'flex', justifyContent:'space-between', gap:8}}>
      <div>{item.name} — {item.price.toFixed(2)}€</div>
      <div>
        <button onClick={() => decrement(item.id)}>-</button>
        <span style={{margin: '0 8px'}}>{item.quantity}</span>
        <button onClick={() => increment(item.id)}>+</button>
        <button onClick={() => remove(item.id)}>Eliminar</button>
      </div>
    </div>
  );
});
