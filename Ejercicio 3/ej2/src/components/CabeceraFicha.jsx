import React from 'react';
export default function CabeceraFicha({ nombre, vendedor }) {
return (
<div className="cabecera-ficha">
<h2>{nombre}</h2>
<p>Vendedor: {vendedor.nombre} ({vendedor.rating} ⭐)</p>
</div>
);
}