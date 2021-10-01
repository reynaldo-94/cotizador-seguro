import React from 'react'
import Information from './Information'
import Logo from './Logo'
import styles from './style.module.scss'

export default function Header () {
  return (
    <div className={styles.header}>
      <Logo />
      <Information />
    </div>
  )
}
