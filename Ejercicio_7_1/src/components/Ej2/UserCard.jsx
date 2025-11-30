import React from 'react'

function UserCardComp({ user }) {
  console.log('UserCard render', user.id)
  return (
    <div className="card">
      <div className="user-row">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <div>
          <div><strong>{user.name}</strong></div>
          <div style={{fontSize:12}}>{user.email}</div>
        </div>
      </div>
    </div>
  )
}

export default function UserCard({ user, optimized }) {
  if (optimized) {
    const Memo = React.useMemo(() => React.memo(UserCardComp), [])
    return <Memo user={user} />
  }
  return <UserCardComp user={user} />
}
