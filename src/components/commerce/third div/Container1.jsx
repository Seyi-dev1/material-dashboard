import React from 'react'
import Template from './template'
import style from './container1.module.scss'

const Container1 = () => {
  return (
    <div className={style.container1}>
    <h2>Sales Overview</h2>
        <Template 
            percent={80}
            text={'Total Profit'}
            fig={'$1,378'}
            fill={'rgb(79, 207, 236)'}
            trail={'rgb(223, 249, 255)'}
        />
         <Template 
            percent={34}
            text={'Total Income'}
            fig={'$3,549'}
            fill={'rgb(78, 196, 96)'}
            trail={'rgb(218, 255, 223)'}
        />
         <Template 
            percent={70}
            text={'Total Expenses'}
            fig={'$2,374'}
            fill={'rgb(250, 192, 54)'}
            trail={'rgb(255, 237, 196)'}
        />
    </div>
  )
}
export default Container1
