import './home.scss'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topnav from '../../components/topnav/Topnav'
import { Outlet } from 'react-router-dom'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader/loader'



const Home = ()=> {

  const user = useSelector(state=>selectCurrentUser(state))

  return (
    user?
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
    </div>:
    <Loader/>
  )
}

export default Home