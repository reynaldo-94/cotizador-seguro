import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import Circle from '../../Circle'

export default function ManagePlan () {
  return (
    <div>
      <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
        <Circle borderColor='#ef3340' style={{ padding: '4px 6px' }}>
          <FiChevronLeft color='#ef3340' />
        </Circle>
        <div>Volver</div>
      </div>
    </div>
  )
}
