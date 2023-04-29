import styles from './container1.module.scss'
import React from 'react'
import Template from './template'

const Container1 = () => {
  return (
    <div className={styles.container1}>
        <h2>Conversion Rates</h2>
        <p>(+43%) than last year</p>
       <Template/>
    </div>
  )
}

export default Container1