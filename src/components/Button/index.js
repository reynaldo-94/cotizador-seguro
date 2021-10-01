import React from 'react'
import styles from './style.module.scss'

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
]

const SIZES = ["btn--medium", "btn--small"]

export default function Button ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) {

  // const checkButtonStyle = STYLES.includes(buttonStyle) 
  // ? `${styles.buttonStyle}`
  // : `${styles.STYLES[0]}`

  // const checkButtonSize = SIZES.includes(buttonSize) ? styles.buttonSize : styles.SIZES[0]
  return (
    <button 
      // className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize}`} 
      className={`${styles.button} ${styles.button__primary} ${styles.button__medium}`} 
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  )
}