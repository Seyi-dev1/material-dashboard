import './topnav.scss'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React from 'react'
import SimpleListMenu from './topnav assets/flag dropdown/flagDropdown';
import PositionedMenu from './topnav assets/notif dropdown/NotifDropdown';
import PositionedMenu2 from './topnav assets/contacts dropdown/ContactsDropdown';
import UserMenu from './topnav assets/user dropdown/userDropdown';


const Topnav = () => {



  return (
    <div className='topnav'>
        <div className="navcontent">
            <div className="searchbar">
                <SearchRoundedIcon className='icon'/>
            </div>
            <div className="links">
            <div className="link"><SimpleListMenu/></div>
            <div className="link"><PositionedMenu/></div>
            <div className="link"><PositionedMenu2/></div>
            <div className="link"><UserMenu/></div>
            </div>
        </div>
    </div>
  )
}

export default Topnav