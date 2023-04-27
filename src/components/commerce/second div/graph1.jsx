import './graph1.scss'
import React from 'react'
import GraphTemplate from './graphTemplate'

const Graph1 = ({ title, image, figure, number, fill }) => {

  return (
    <div className='graph1'>
    <div className="content">
    <div className="heading">
        <p>{title}</p>
    </div>
    <div className="number">
        <h1>{number}</h1>
        <div className="graph">
            <GraphTemplate color={fill}/>
        </div>
    </div>
    <div className="visuals">
        <div className="percentage">
            <span className='arrowUp'>
            <img src={image} alt="arrow" className={figure.includes('-')?'minus':'image'} />
            </span>
            <span className="figure">
               <span> {figure}</span><span className='light'>than last year</span>
            </span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Graph1