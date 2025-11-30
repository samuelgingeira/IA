import React from 'react'
import PuntitoVerde from './PuntitoVerde'

function Icono({ isOnline }) {
  console.log('IconoOnline render', isOnline)
  return (
    <div>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
      <PuntitoVerde online={isOnline}/>
    </div>
  )
}

export default function IconoOnline({ isOnline }) {
  return <Icono isOnline={isOnline} />
}
