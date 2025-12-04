import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

export default function Cart() {
  const { items, total, clear } = useContext(CartContext);
  const list = Object.values(items);
  return (
    <aside>
      <h2>Carrito</h2>
      {list.length === 0 ? <div>Vacío</div> : list.map(it => <CartItem key={it.id} item={it} />)}
      <hr />
      <div>Total: {total.toFixed(2)}€</div>
      <button onClick={clear}>Vaciar</button>
    </aside>
  );
}
