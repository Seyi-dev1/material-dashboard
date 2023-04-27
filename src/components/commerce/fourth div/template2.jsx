import styles from './template2.module.scss'
import React from 'react'

const Template2 = ({ image, price, text }) => {
  return (
    <div className={styles.template2}>
        <div className={styles.image}>
            <img src={image} alt="shoe" />
        </div>
        <div className={styles.text}>
            <div className={styles.name}>
                <p>{text}</p>
            </div>
            <div className={styles.price}>
                <p>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default Template2