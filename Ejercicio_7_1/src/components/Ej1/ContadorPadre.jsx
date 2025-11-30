import React from 'react'
import ListaIntermedia from './ListaIntermedia'
import { generateUsers } from '../../utils/users'

export default function ContadorPadre({ optimized }) {
  console.log('ContadorPadre render')
  const [count, setCount] = React.useState(0)
  const [users] = React.useState(() => generateUsers(500, 1))

  return (
    <div>
      <div className="controls">
        <button className="button" onClick={() => setCount(c => c + 1)}>Incrementar contador ({count})</button>
        <span>Clicks: {count}</span>
      </div>
      <ListaIntermedia users={users} optimized={optimized}/>
    </div>
  )
}
