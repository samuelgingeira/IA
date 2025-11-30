import React from 'react'
import TarjetaUsuario from './TarjetaUsuario'

function ListaIntermediaComponent({ users, optimized }) {
  console.log('ListaIntermedia render')
  return (
    <div>
      <p>Renderizando <strong>{users.length}</strong> tarjetas</p>
      <div className="user-grid">
        {users.map(u => <TarjetaUsuario key={u.id} user={u} optimized={optimized} />)}
      </div>
    </div>
  )
}

export default function ListaIntermedia(props) {
  if (props.optimized) {
    const Memo = React.useMemo(() => React.memo(ListaIntermediaComponent), [])
    return <Memo {...props} />
  }
  return <ListaIntermediaComponent {...props} />
}
