import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App(){
  return (
    <CartProvider>
      <div style={{display:'flex', gap: 24}}>
        <main style={{flex:1}}><ProductList/></main>
        <Cart/>
      </div>
    </CartProvider>
  );
}
