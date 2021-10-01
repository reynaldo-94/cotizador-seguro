import React, { useEffect, useState } from 'react'
import Logo from '../../Header/Logo'
import background from '../../../assets/login/background.png'
import imageLoginDesktop from '../../../assets/login/login-logo.png'
import imageLoginMobile from '../../../assets/login/login-logo-m.png'
import styles from './style.module.scss'

export default function Image() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      const bool = window.innerWidth < 640 ? true : false
      setIsMobile(bool)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <div>
      <img src={background} alt='Background' />
      <div className={styles.blockImage}>
        <Logo />
        {/* <img src={imagenLogi} alt='Image Login' /> */}
        {/* <div style={{ backgroundImage: "url(" +( isMobile ? imageLoginMobile : imageLoginDesktop) + ")" }}></div> */}
        <img src={isMobile ? imageLoginMobile : imageLoginDesktop} alt='Image Login' />
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
