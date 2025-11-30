import React from 'react'
import ToastItem from './ToastItem'

let nextId = 1

export default function ToastContainer({ optimized }) {
  console.log('ToastContainer render')
  const [errors, setErrors] = React.useState([
    { id: nextId++, message: 'Error inicial: no se pudo cargar el perfil' }
  ])

  function addError() {
    const err = { id: nextId++, message: `Error aleatorio #${Math.floor(Math.random()*1000)}` }
    setErrors(prev => [err, ...prev])
  }

  function clearError(id) {
    setErrors(prev => prev.filter(e => e.id !== id))
  }

  function clearAll() {
    setErrors([])
  }

  return (
    <div>
      <div className="controls">
        <button className="button" onClick={addError}>Agregar error</button>
        <button className="button secondary" onClick={clearAll}>Limpiar todos</button>
        <span>{errors.length} errores</span>
      </div>

      <div>
        {errors.map(err => {
          if (!optimized) {
            return <ToastItem key={err.id} error={err} onClose={() => clearError(err.id)} />
          }

          const onCloseStable = React.useCallback(() => clearError(err.id), [err.id])
          return <ToastItem key={err.id} error={err} onClose={onCloseStable} optimized />
        })}
      </div>
    </div>
  )
}
