import React from 'react'
import { generateUsers } from '../utils/users'
import ContadorPadre from '../components/Ej1/ContadorPadre'

export default function Ej1() {
  const [optimized, setOptimized] = React.useState(false)
  return (
    <div>
      <h2>Ejercicio 1 — El contador descontrolado</h2>
      <div className="controls">
        <button className="button" onClick={() => setOptimized(v => !v)}>
          {optimized ? 'Ver versión NO optimizada' : 'Ver versión optimizada'}
        </button>
        <span>Modo: <strong>{optimized ? 'Optimizado' : 'No optimizado'}</strong></span>
      </div>

      <div className="card">
        <p>La app genera 500 usuarios. Abre la consola y verás <code>console.log</code> de cada componente al render.</p>
        <ContadorPadre optimized={optimized} />
      </div>
    </div>
  )
}
