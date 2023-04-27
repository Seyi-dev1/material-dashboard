import styles from './container1.module.scss'

import React from 'react'
import Template from './template'

const Container1 = () => {
  return (
    <div className={styles.container1}>
    <h2>Best Salesman</h2>
        <Template/>
    </div>
  )
}

export default Container1