import React from 'react'
import ToastContainer from '../components/Ej3/ToastContainer'

export default function Ej3() {
  const [optimized, setOptimized] = React.useState(false)
  return (
    <div>
      <h2>Ejercicio 3 — Botón de limpiar errores que recrea todo</h2>
      <div className="controls">
        <button className="button" onClick={() => setOptimized(v => !v)}>
          {optimized ? 'Ver versión NO optimizada' : 'Ver versión optimizada'}
        </button>
        <span>Modo: <strong>{optimized ? 'Optimizado' : 'No optimizado'}</strong></span>
      </div>
      <div className="card">
        <ToastContainer optimized={optimized}/>
      </div>
    </div>
  )
}
