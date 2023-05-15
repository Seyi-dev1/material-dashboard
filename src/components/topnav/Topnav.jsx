import './topnav.scss'
import React from 'react'
import SimpleListMenu from './topnav assets/flag dropdown/flagDropdown';
import PositionedMenu from './topnav assets/notif dropdown/NotifDropdown';
import PositionedMenu2 from './topnav assets/contacts dropdown/ContactsDropdown';
import UserMenu from './topnav assets/user dropdown/userDropdown';
import {FiMenu} from 'react-icons/fi'


const Topnav = ({ click }) => {



  return (
    
        <div className="navcontent">
            <div className="menu">
            </div>
            <div className="links">
            <div className="link space"><FiMenu onClick={()=>click()}/></div>
            <div className="link"><SimpleListMenu/></div>
            <div className="link"><PositionedMenu/></div>
            <div className="link"><PositionedMenu2/></div>
            <div className="link"><UserMenu/></div>
            </div>
        </div>
  )
}

export default Topnav