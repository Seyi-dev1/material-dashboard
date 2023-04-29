import styles from './container1.module.scss'

import React from 'react'
import Template from './template'

const Containerd2 = () => {
  return (
    <div className={styles.container1}>
        <h2>Website Visits</h2>
        <p>(+53%) than last year</p>
        <Template/>
    </div>
  )
}

export default Containerd2