import React from 'react';
export default function PieFicha({ precio, enStock }) {
return (
<div className="pie-ficha">
{enStock ? (
<p>
Precio: {precio.valor}{precio.moneda} {precio.enOferta && <span className="oferta">¡OFERTA!</span>}
</p>
) : (
<p className="no-stock">No disponible</p>
)}
</div>
);
}