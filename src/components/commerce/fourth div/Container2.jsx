import styles from './containr2.module.scss'
import shoe1 from '../../../assets/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg'
import shoe2 from '../../../assets/domino-164_6wVEHfI-unsplash.jpg'
import shoe3 from '../../../assets/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg'
import shoe4 from '../../../assets/usama-akram-kP6knT7tjn4-unsplash.jpg'
import shoe5 from '../../../assets/andres-jasso-PqbL_mxmaUE-unsplash.jpg'

import React from 'react'
import Template2 from './template2'

const Container2 = () => {
  return (
    <div className={styles.container2}>
    <h2>Latest Products</h2>
    <Template2 
      price={'$16.9'}
      text={'Small Rubber Mouse'}
      image={shoe1}  
    />
    <Template2 
      price={'$10.9'}
      text={'Small Granite Computer'}
      image={shoe2}  
    />
    <Template2 
      price={'$29.9'}
      text={'Rustic Wooden Chicken'}
      image={shoe3}  
    />
    <Template2 
      price={'$30.9'}
      text={'Sleek Cotton Sausages'}
      image={shoe4}  
    />
    <Template2 
      price={'$12.7'}
      text={'Awesome Rubber Hat'}
      image={shoe5}  
    />
    </div>
  )
}

export default Container2