import styles from './container2.module.scss'
import React from 'react'

const Container2 = () => {
  return (
    <div className={styles.container2}>
    <div className={styles.title}>
        <h2>Current Balance</h2>
    </div>
    <div className={styles.bold}>
        <h1>$182,150</h1>
    </div>
    <div className={styles.grid}>
        <p className={styles.text}>Your Curent Balance</p>
        <p className={styles.figure}>$187,650</p>
    </div>
    <div className={styles.grid}>
        <p className={styles.text}>Sent Amount</p>
        <p className={styles.figure}>-$25,750</p>
    </div>
    <div className={styles.grid}>
        <p className={styles.text}>Total Amount</p>
        <p className={`${styles.figure} ${styles.bolden}`}>$163,150</p>
    </div>
    <div className={styles.buttons}>
        <button className={styles.transfer}>Transfer</button>
        <button className={styles.receive}>Receive</button>
    </div>
    </div>
  )
}

export default Container2