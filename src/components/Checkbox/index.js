import React from 'react'
import styles from './style.module.scss'

export default function Checkbox({
  checked = false,
  onChange = () => {},
  label = null
}) { 
  return (
    <div className={styles.checkbox}>
      <div className={styles.checkbox__border} onClick={() => onChange(!checked)}>
        <div className={`${styles.checkbox__indicator} ${checked ? styles.checkbox__checked : ""}`} />
      </div>
      <div className={styles.checkbox__label}>{label}</div>
    </div>
      
  )
}
