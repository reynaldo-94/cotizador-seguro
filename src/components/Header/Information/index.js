import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import styles from './style.module.scss'

export default function Information() {
  return (
    <div className={styles.information}>
      <span className={styles.information__span}>¿Tienes alguna duda?</span>
      <div className={styles.information__number}>
        <FaPhoneAlt />
        <span>(01) 411 6001</span>
      </div>
    </div>
  )
}
