import React from 'react';
import './index.css';
import FichaProducto from './components/FichaProducto';
import { productos } from './datos/Productos';


function App() {
return (
<main className="app">
<h1>Galería de Productos</h1>


<section className="galeria">
{productos.map(producto => (
<FichaProducto key={producto.id} producto={producto}>
{/* children: botón Añadir al carrito */}
<button className="btn-carrito" onClick={() => alert(`Añadido: ${producto.nombre}`)}>
Añadir al carrito
</button>
</FichaProducto>
))}
</section>
</main>
);
}


export default App;