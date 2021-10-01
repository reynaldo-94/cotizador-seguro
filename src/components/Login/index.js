import React from 'react'
import Form from './Form'
import Image from './Image'
import styles from './style.module.scss'

export default function Login(){
  return (
    <div className={styles.login}>
      <Image />
      <Form />
    </div>
  )
}
