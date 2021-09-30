import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import './style.scss'

export default function Information() {
  return (
    <div className='information'>
      <span className='information__span'>¿Tienes alguna duda?</span>
      <div className='information__number'>
        <FaPhoneAlt />
        <span>(01) 411 6001</span>
      </div>
    </div>
  )
}
