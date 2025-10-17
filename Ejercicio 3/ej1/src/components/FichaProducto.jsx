import React from 'react';
import ImagenProducto from './ImagenProducto';


export default function FichaProducto({ producto, children }) {
// Desestructuramos para mayor claridad
const { nombre, descripcion, precio, imagenURL } = producto;


return (
<article className="ficha-producto">
<ImagenProducto src={imagenURL} alt={nombre} />
<div className="contenido-ficha">
<h2>{nombre}</h2>
<p className="descripcion">{descripcion}</p>
<p className="precio">{precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
{/* Renderizamos children para que App pueda pasar el botón u otros elementos */}
<div className="acciones">
{children}
</div>
</div>
</article>
);
}