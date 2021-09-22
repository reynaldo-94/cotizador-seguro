import React from 'react'
import './style.scss'

export default function Select({
  initialOptions = [],
  selectionChange
}) {
  return (
    <select
      className='select'
      onChange={(event) => selectionChange(event.target.value)}
    >
      {
        initialOptions.map((el) => {
          return (
            <option
              key={el.id}
              value={el.id}
            >
              {el.label}
            </option>
          )
        })
      }
    </select>
  )
}
