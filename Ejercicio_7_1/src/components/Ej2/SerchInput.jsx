import React from 'react'
export default function SearchInput({ value, onChange }) {
  console.log('SearchInput render')
  return (
    <div style={{marginBottom:10}}>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Buscar por nombre..."
        style={{padding:8, width:'100%', maxWidth:400}}
      />
    </div>
  )
}
