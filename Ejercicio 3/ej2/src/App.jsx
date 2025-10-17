import React from 'react';
import GaleriaProductos from './components/GaleriaProductos';
import { productos } from './datos/Productos';


export default function App() {
return (
<main>
<h1>Galería de Productos Detallada</h1>
<GaleriaProductos productos={productos} />
</main>
);
}


