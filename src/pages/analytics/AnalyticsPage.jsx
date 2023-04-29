import Template from '../../components/analytics/first div/template'
import './analyticsPage.scss'
import React from 'react'
import Containerd2 from '../../components/analytics/second div/container1/container1'
import Container2 from '../../components/analytics/second div/container2/container2'
import Container1 from '../../components/analytics/thirdDiv/Container1/container1'
import Container2s from '../../components/analytics/thirdDiv/Container2/container2'

const AnalyticsPage = () => {
  return (
    <div className='analytics'>
      <div className="welcome">
        <h1>Hi, Welcome back</h1>
      </div>
      <div className="secondDiv">
        <Template/>
      </div>
      <div className="thirdDiv">
      <Containerd2/>
      <Container2/>
      </div>
      <div className="fourthDiv">
        <Container1/>
        <Container2s/>
      </div>
    </div>
  )
}

export default AnalyticsPage