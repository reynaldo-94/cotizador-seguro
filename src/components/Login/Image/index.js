import React from 'react'
import Logo from '../../Header/Logo'
import background from '../../../assets/login/background.png'
import imagenLogin from '../../../assets/login/login-logo.png'
import styles from './style.module.scss'

export default function Image() {
  return (
    <div>
      <img src={background} alt='Background' />
      <div className={styles.blockImage}>
        <Logo />
        <img src={imagenLogin} alt='Image Login' />
        <div className={styles.image}>
          <span className={styles.image__span}>¡NUEVO!</span>
          <div className={styles.image__block}>
            <h1 className={styles.image__title}>Seguro <span className={styles.image__title_color}>Vehicular <br />Tracking</span></h1>
            <p className={styles.image__description}>Cuentamos donde le haras seguimiento a tu seguro</p>
          </div>
        </div>
      </div>

    </div>
  )
}
