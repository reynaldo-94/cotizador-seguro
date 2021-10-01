import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import Circle from '../../Circle'
import perfil from '../../../assets/system/perfil.png'
import styles from './style.module.scss'

export default function ManagePlan() {
  return (
    <div className={styles.managePlan}>
      <div className={styles.managePlan__breadcrumb}>
        <Circle borderColor='#ef3340' style={{ padding: '4px 6px' }}>
          <FiChevronLeft color='#ef3340' />
        </Circle>
        <div>Volver</div>
      </div>
      <div className={styles.managePlan__header}>
        <h1 className={styles.managePlan__title}>¡Hola, <span style={{ color: '#ef3340' }}>Juan!</span></h1>
        <div className={styles.managePlan__paragraph}>Conoce las coberturas para tu plan</div>
      </div>
      <div className={styles.managePlan__details}>
        <div className={styles.managePlan__image}>
          <div className={styles.managePlan__blockColumn}>
            <div className={styles.managePlan__subTitle}>Placa: C2U 114</div>
            <div className={styles.managePlan__title}>Wolkswagen 2019 Golf</div>
          </div>
          <img src={perfil} alt='Perfil' />
        </div>
        <div className={styles.managePlan__sumAssured}>
          <div className={styles.information}>
            <div className={styles.managePlan__title}>Indica la suma asegurada</div>
            <div className={styles.information__body}>
              <div className={`${styles.managePlan__paragraph} ${styles.information__block}`}>
                <div>MIN</div>
                <div>$12.500</div>
              </div>
              <div className={`${styles.managePlan__paragraph} ${styles.information__block}`}>
                <div>MIN</div>
                <div>$16.500</div>
              </div>
            </div>

          </div>
          <div>
            14.3000
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
