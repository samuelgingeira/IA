import React from 'react';
import FichaProducto from './FichaProducto';


export default function GaleriaProductos({ productos }) {
return (
<section className="galeria-productos">
{productos.map(producto => (
<FichaProducto key={producto.id} producto={producto}>
<button onClick={() => alert(`Más info: ${producto.nombre}`)}>Más información</button>
</FichaProducto>
))}
</section>
);
}