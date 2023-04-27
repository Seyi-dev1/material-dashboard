import './home.scss'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topnav from '../../components/topnav/Topnav'
import { Outlet } from 'react-router-dom'



function Home() {
  return (
    <div className='home'>
        <div className="sideNav">
            <Sidebar/>
        </div>
        <div className="outlet">
        <div className="navbar">
        <Topnav/>
        </div>
           <Outlet/>
        </div>
    </div>
  )
}

export default Home