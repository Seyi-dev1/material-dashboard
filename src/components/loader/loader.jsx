import styles from './loader.module.scss'
import { RingLoader } from 'react-spinners'


import React from 'react'

const Loader = () => {
  return (
    <div className={styles.loader}>
        <RingLoader color="#36d7b7" size={80}/>
        {/* <ClockLoader color="#36d7b7" size={80} /> */}
    </div>
  )
}

export default Loader