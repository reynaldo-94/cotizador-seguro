import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import styles from './style.module.scss'

export default function Information({ style, isMobile = false }) {
  return (
    <div className={styles.information} style={{ ...style }}>
      {
        isMobile ? (
          <>
            <span className={styles.information__span}>¿Tienes alguna duda?</span>
            <div className={styles.information__number}>
              <FaPhoneAlt />
              <span>(01) 411 6001</span>
            </div>
          </>
        ) : (
          <div className={styles.information__number}>
              <FaPhoneAlt />
              <span>Llámanos</span>
            </div>
        )
      }
    </div>
  )
}
