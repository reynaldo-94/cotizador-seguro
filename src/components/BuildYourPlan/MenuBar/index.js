import React from 'react'
import Circle from '../../Circle'

export default function MenuBar() {
  return (
    <div style={{ backgroundColor: '#f7f8fc', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
        <Circle backgroundColor='#6f7dff'>1</Circle>
        <div>Datos</div>
      </div>
      <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
        <Circle backgroundColor='#6f7dff'>2</Circle>
        <div>Arma tu plan</div>
      </div>
    </div>
  )
}
