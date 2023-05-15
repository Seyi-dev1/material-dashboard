import './home.scss'
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topnav from '../../components/topnav/Topnav'
import { Outlet } from 'react-router-dom'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader/loader'



const Home = ()=> {

  const user = useSelector(state=>selectCurrentUser(state))


  const [nav, setNav] = useState(false)
  
  const toggleNav = ()=>{
    setNav(true)
  }

  const toggleNavOff = ()=>{
    setNav(false)
  }


  return (
    user?
    <div className='home'>
        <div className={nav?'sideNav responsiveNav': 'sideNav'} onClick={toggleNavOff}>
            <div className="sidenavContent">
            <Sidebar/>
            </div>
        </div>
        <div className="outlet">
        <div className="navbar">
        <Topnav click={toggleNav}/>
        </div>
           <Outlet/>
        </div>
    </div>:
    <Loader/>
  )
}

export default Home