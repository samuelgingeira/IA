import React, { useEffect, useState, useContext } from 'react';
import ProductItem from './ProductItem';
import { CartContext } from '../context/CartContext';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    fetch('/src/data/products.json').then(r => r.json()).then(setProducts);
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      {products.map(p => (
        <ProductItem key={p.id} product={p} onAdd={() => addItem(p)} />
      ))}
    </div>
  );
}
