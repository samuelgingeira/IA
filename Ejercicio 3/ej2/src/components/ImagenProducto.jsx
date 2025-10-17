import React from 'react';
export default function ImagenProducto({ url, alt }) {
return <img src={url} alt={alt} className="imagen-producto" />;
}