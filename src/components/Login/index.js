import React from 'react'
import Header from '../Header'
import Form from './Form'
import Image from './Image'
import styles from './style.module.scss'

export default function Login(){
  return (
    <div className={styles.login}>
      <Header />
      {/* <Image />
      <Form /> */}
    </div>
  )
}
