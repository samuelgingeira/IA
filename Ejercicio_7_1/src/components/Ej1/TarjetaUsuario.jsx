import React from 'react'
import Avatar from './Avatar'

function Tarjeta({ user }) {
  console.log('TarjetaUsuario render', user.id)
  return (
    <div className="card">
      <div className="user-row">
        <img alt={user.name} src={user.avatar} className="avatar" />
        <div>
          <div><strong>{user.name}</strong> (#{user.id})</div>
          <div style={{fontSize:12}}>{user.email}</div>
        </div>
      </div>
      <div style={{marginTop:8}}>
        <Avatar user={user}/>
      </div>
    </div>
  )
}

export default function TarjetaUsuario({ user, optimized }) {
  if (optimized) {
    const Memo = React.useMemo(() => React.memo(Tarjeta), [])
    return <Memo user={user} />
  }
  return <Tarjeta user={user} />
}
