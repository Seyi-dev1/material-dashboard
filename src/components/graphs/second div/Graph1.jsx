import styles from './graph1.module.scss'
import React from 'react'
import GraphTemplate from './graphTemplate'

const Graph1 = ({ title, image, figure, number, fill }) => {

  return (
    <div className={styles.graph1}>
    <div className={styles.content}>
    <div className={styles.heading}>
        <p>{title}</p>
    </div>
    <div className={styles.visual}>
        <div className={styles.percentage}>
            <span className={styles.arrowUp}>
            <img src={image} alt="arrow" className={figure.includes('-')?styles.minus:styles.image} />
            </span>
            <span className={styles.figure}>
                {figure}
            </span>
        </div>
        <div className={styles.graph}>
            <GraphTemplate color={fill}/>
        </div>
    </div>
    <div className={styles.number}>
        <h1>{number}</h1>
    </div>
    </div>
    </div>
  )
}

export default Graph1