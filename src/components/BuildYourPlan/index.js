import React from 'react'
import Header from '../Header'
import MenuBar from './MenuBar'
import styles from './style.module.scss'
import ManagePlan from './ManagePlan'

export default function BuilYourPlan() {
  return (
    <div>
      <Header />
      <div className={styles.bodyPlan}>
        <MenuBar />
        <ManagePlan />
        <div>Column 3</div>
      </div>
    </div>
  )
}
