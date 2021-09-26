import React from 'react'
import './style.scss'

export default function Checkbox({
  checked = false,
  onChange = () => {},
  label = null
}) { 
  return (
    <div className="checkbox">
      <div className="border" onClick={() => onChange(!checked)}>
        <div className={`indicator ${checked ? "checked" : ""}`} />
      </div>
      <div className="label">{label}</div>
    </div>
      
  )
}
