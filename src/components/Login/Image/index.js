import React from 'react'
import Logo from '../../Header/Logo'
import background from '../../../assets/login/background.png'
import imagenLogin from '../../../assets/login/login-logo.png'

export default function Image() {
  return (
    <div>
      <img src={background} />
      <div style={{
        position: 'absolute',
        top: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingLeft: 100,
        width: 320
      }}>
        <Logo />
        <img src={imagenLogin} />
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <span style={{ color: '#494f66', fontSize: 12 }}>¡NUEVO!</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h1 style={{ margin: 0, fontSize: 36, lineHeight: '48px' }}>Seguro <span style={{ color: '#ef3340' }}>Vehicular <br />Tracking</span></h1>
            <p style={{ margin: 0, color: '#676f8f', fontSize: 14 }}>Cuentamos donde le haras seguimiento a tu seguro</p>
          </div>
        </div>
      </div>

    </div>
  )
}
