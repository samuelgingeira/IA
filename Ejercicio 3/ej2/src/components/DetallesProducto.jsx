import React from 'react';
export default function DetallesProducto({ caracteristicas, children }) {
return (
<div className="detalles-producto">
<ul>
{caracteristicas.map((car, i) => (
<li key={i}>{car}</li>
))}
</ul>
{children}
</div>
);
}