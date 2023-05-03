import styles from './loaderButton.module.scss'

import React from 'react'

const LoaderButton = () => {
  return (
    <button className={styles.loaderButton}>
    <div className={styles.loader}></div>
    </button>
  )
}

export default LoaderButton