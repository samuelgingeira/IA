import React from 'react';


export default function ImagenProducto({ src, alt }) {
return (
<div className="imagen-producto">
<img src={src} alt={alt} />
</div>
);
}