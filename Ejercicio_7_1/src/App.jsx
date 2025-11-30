import React from 'react'
import Ej1 from './pages/Ej1'
import Ej2 from './pages/Ej2'
import Ej3 from './pages/Ej3'

export default function App() {
  const [page, setPage] = React.useState('ej1')
  return (
    <div className="container">
      <h1>Ejercicios React — Vite</h1>
      <nav>
        <a href="#" onClick={(e) => {e.preventDefault(); setPage('ej1')}}>Ejercicio 1</a>
        <a href="#" onClick={(e) => {e.preventDefault(); setPage('ej2')}}>Ejercicio 2</a>
        <a href="#" onClick={(e) => {e.preventDefault(); setPage('ej3')}}>Ejercicio 3</a>
      </nav>
      <hr/>
      {page === 'ej1' && <Ej1/>}
      {page === 'ej2' && <Ej2/>}
      {page === 'ej3' && <Ej3/>}
    </div>
  )
}
