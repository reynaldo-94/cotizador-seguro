import React from 'react'
import Header from '../Header'
import image from '../../assets/system/purchaseConfirmation.png'
import styles from './style.module.scss'

export default function PurchaseConfirmation () {
  return (
    <div className={styles.purchaseConfirmation}>
      <Header />
      <div className={styles.purchaseConfirmation__body}>
        <img src={image} alt="Confirmacion de compra" />
        <div className={styles.purchaseConfirmation__form}>
          <h1 className={styles.form__title}>
            <span className={styles.form__titleRed}>¡Te damos la bienvenida </span>
            <br />Cuenta con nosotros para proteger tu vehículo
          </h1>
        </div>
      </div>
    </div>
  )
}
