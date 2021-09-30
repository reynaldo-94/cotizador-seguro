import React from 'react'
import './style.scss'

export default function Checkbox({
  checked = false,
  onChange = () => {},
  label = null
}) { 
  return (
    <div className="checkbox">
      <div className="checkbox__border" onClick={() => onChange(!checked)}>
        <div className={`checkbox__indicator ${checked ? "checkbox__checked" : ""}`} />
      </div>
      <div className="checkbox__label">{label}</div>
    </div>
      
  )
}
