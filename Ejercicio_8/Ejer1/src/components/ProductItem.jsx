import React from 'react';

export default React.memo(function ProductItem({ product, onAdd }) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
      <div>{product.name} — {product.price.toFixed(2)}€</div>
      <button onClick={onAdd}>Añadir al carrito</button>
    </div>
  );
});