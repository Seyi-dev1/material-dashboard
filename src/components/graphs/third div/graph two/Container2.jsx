import './container2.scss'
import React from 'react'
import Linechart from './GraphTemplate'

const Container2 = () => {
  return (
    <div className='container2'>
    <h2>Area Installed</h2>
    <p>(+43%) than last year</p>
        <Linechart/>
    </div>
  )
}

export default Container2