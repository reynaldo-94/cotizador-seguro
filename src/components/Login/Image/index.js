import React from 'react'
import Logo from '../../Header/Logo'
import background from '../../../assets/login/background.png'
import imagenLogin from '../../../assets/login/login-logo.png'
import './style.scss'

export default function Image() {
  return (
    <div>
      <img src={background} alt='Background' />
      <div className='blockImage'>
        <Logo />
        <img src={imagenLogin} alt='Image Login' />
        <div className='image'>
          <span className='image__span'>¡NUEVO!</span>
          <div className='image__block'>
            <h1 className='image__title'>Seguro <span className='image__title--color'>Vehicular <br />Tracking</span></h1>
            <p className='image__description'>Cuentamos donde le haras seguimiento a tu seguro</p>
          </div>
        </div>
      </div>

    </div>
  )
}
