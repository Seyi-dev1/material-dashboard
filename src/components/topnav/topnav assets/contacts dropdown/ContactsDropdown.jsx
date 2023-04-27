import './contactsDropdown.scss'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuItemTemp from './assets/MenuItemTemp';
import avatar1 from '../../../../assets/icons8-avatar-40 (1).png'
import avatar2 from '../../../../assets/icons8-avatar-40 (2).png'
import avatar3 from '../../../../assets/icons8-avatar-40.png'



export default function PositionedMenu2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='notif'>
     
      
        <PeopleAltIcon className='icon'
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}
        />
      
      <Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 50,
          horizontal: -400,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
       <div className="title">
      <div className="heading"><h2>Contacts(20)</h2></div>
      </div>
        <MenuItem onClick={handleClose}>
        <MenuItemTemp
          title='Jamie Lanister'
          timeStamp ='20 minutes ago'
          image={avatar1}
        />
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <MenuItemTemp
          title='Tyrion Lanister'
          image={avatar3}
        />
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <MenuItemTemp
          title='Aegon Targaryen'
          timeStamp ='30 minutes ago'
          image={avatar2}
        />
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <MenuItemTemp
          title='Eddard Stark'
          timeStamp ='10 days ago'
          image={avatar2}
        />
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <MenuItemTemp
          title='Ser Devos'
          timeStamp ='At Sea'
          image={avatar3}
        />
        </MenuItem>
      </Menu>
    </div>
  );
}