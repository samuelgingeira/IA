import React from 'react';
import CabeceraFicha from './CabeceraFicha';
import ImagenProducto from './ImagenProducto';
import DetallesProducto from './DetallesProducto';
import PieFicha from './PieFicha';


export default function FichaProducto({ producto, children }) {
return (
<article className="ficha-producto">
<CabeceraFicha nombre={producto.nombre} vendedor={producto.vendedor} />
<ImagenProducto url={producto.imagenes[0]} alt={producto.nombre} />
<DetallesProducto caracteristicas={producto.caracteristicas}>
{children}
</DetallesProducto>
<PieFicha precio={producto.precio} enStock={producto.enStock} />
</article>
);
}