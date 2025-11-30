import React from 'react'

function Toast({ error, onClose }) {
  console.log('ToastItem render', error.id)
  return (
    <div className="toast">
      <div>{error.message}</div>
      <div>
        <button className="button secondary" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

export default function ToastItem({ error, onClose, optimized }) {
  if (optimized) {
    const Memo = React.useMemo(() => React.memo(Toast), [])
    return <Memo error={error} onClose={onClose} />
  }
  return <Toast error={error} onClose={onClose} />
}
