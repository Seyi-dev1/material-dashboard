import styles from './template.module.scss'
import React from 'react'
import containers from './data'
const Template = () => {

    return(
        <div className={styles.holder}>
            {
                containers.map((container)=>{
                    const type = container.type
            return (
                <div className={`${styles.template} ${styles[type]}`} key={container.id}>
                    <div className={styles.icons}>
                    <div className={`${styles.icon} ${styles[type]}`}>
                    {container.icon}
                    </div>
                    </div>
                    <div className={`${styles.figure} ${styles[type]}`}>
                        <h1>{container.figure}</h1>
                    </div>
                    <div className={`${styles.text} ${styles[type]}`}>
                        <p>{container.text}</p>
                    </div>
                </div>
              )
        })
            }
        </div>
    )

}

export default Template