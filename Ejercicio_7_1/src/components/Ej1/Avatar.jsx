import React from 'react'
import IconoOnline from './IconoOnline'

function AvatarComp({ user }) {
  console.log('Avatar render', user.id)
  return (
    <div style={{display:'flex', alignItems:'center', gap:8}}>
      <img src={user.avatar} alt={user.name} className="avatar" />
      <div>
        <div style={{fontSize:13}}>{user.name}</div>
        <div style={{fontSize:12, color:'#666'}}>{user.email}</div>
      </div>
      <div style={{marginLeft:'auto'}}>
        <IconoOnline isOnline={user.isOnline}/>
      </div>
    </div>
  )
}

export default function Avatar({ user }) {
  return <AvatarComp user={user}/>
}
