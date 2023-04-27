import './container1.scss'
import React from 'react'
import PieChart from './GraphTemplate'

const Container1 = () => {
  return (
    <div className='container1'>
    <div className="header"> <h2>Current Download</h2></div>
        <PieChart/>
    </div>
  )
}

export default Container1