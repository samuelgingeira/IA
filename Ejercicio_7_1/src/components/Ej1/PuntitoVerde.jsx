import React from 'react'

export default function PuntitoVerde({ online }) {
  console.log('PuntitoVerde render', online)
  return (
    <span className="puntito" style={{background: online ? '#2ecc71' : '#e74c3c'}} />
  )
}
