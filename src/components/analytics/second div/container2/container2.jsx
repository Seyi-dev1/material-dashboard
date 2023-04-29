import styles from './container2.module.scss'
import React from 'react'
import Template from './template'

const Container2 = () => {
  return (
    <div className={styles.container2}>
    <h2>Current Visits</h2>
    <div className={styles.chart}>
    <Template/>
    </div>
    </div>
  )
}

export default Container2