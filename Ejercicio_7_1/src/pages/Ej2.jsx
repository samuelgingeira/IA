import React from 'react'
import { generateUsers } from '..users/utils/users'
import SearchInput from './components/Ej2/SearchInput'
import UserList from './components/Ej2/UserList'

export default function Ej2() {
  const [optimized, setOptimized] = React.useState(false)
  const [users] = React.useState(() => generateUsers(10000, 1))
  const [search, setSearch] = React.useState('')

  return (
    <div>
      <h2>Ejercicio 2 — Filtro de usuarios caro/barato</h2>
      <div className="controls">
        <button className="button" onClick={() => setOptimized(v => !v)}>
          {optimized ? 'Ver NO optimizado' : 'Ver optimizado'}
        </button>
        <span>Modo: <strong>{optimized ? 'Optimizado' : 'No optimizado'}</strong></span>
      </div>
      <div className="card">
        <p>Se generan <strong>10.000</strong> usuarios. Escribe para filtrar. Observa el rendimiento (Profiles).</p>
        <SearchInput value={search} onChange={setSearch} />
        <UserList users={users} search={search} optimized={optimized}/>
      </div>
    </div>
  )
}
