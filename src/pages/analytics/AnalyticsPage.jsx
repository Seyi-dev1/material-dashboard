import Template from '../../components/analytics/first div/template'
import './analyticsPage.scss'
import React from 'react'

const AnalyticsPage = () => {
  return (
    <div className='analytics'>
      <div className="welcome">
        <h1>Hi, Welcome back</h1>
      </div>
      <div className="secondDiv">
        <Template/>
      </div>
    </div>
  )
}

export default AnalyticsPage