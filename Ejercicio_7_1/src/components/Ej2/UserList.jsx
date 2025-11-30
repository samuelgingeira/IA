import React from 'react'
import UserCard from './UserCard'

export default function UserList({ users, search, optimized }) {
  console.log('UserList render')
  if (!optimized) {
    const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div>
        <p>Mostrando {filtered.length} users (sin useMemo)</p>
        <div className="user-grid">
          {filtered.map(u => <UserCard key={u.id} user={u} />)}
        </div>
      </div>
    )
  }

  const filteredMemo = React.useMemo(() => {
    console.log('Recalculando filtered (useMemo)')
    return users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
  }, [users, search])

  return (
    <div>
      <p>Mostrando {filteredMemo.length} users (con useMemo)</p>
      <div className="user-grid">
        {filteredMemo.map(u => <UserCard key={u.id} user={u} optimized />)}
      </div>
    </div>
  )
}
