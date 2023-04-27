import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './notifDropdown.scss'
import MenuItemTemplate from './assets/MenuItemTemplate';
import avatar1 from '../../../../assets/icons8-avatar-40 (1).png'
import avatar2 from '../../../../assets/icons8-avatar-40 (2).png'
import avatar3 from '../../../../assets/icons8-avatar-40.png'

export default function PositionedMenu() {
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
     
      
        <NotificationsIcon className='icon'
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
          horizontal: -480,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
      <div className="menuItems">
      <div className="title">
      <div className="heading"><h2>Notifications</h2></div>
        <div className="description">4 New</div>
      </div>
        <MenuItem  onClick={handleClose}>
        <MenuItemTemplate
          time={'Today'}
          message={'Won the monthly best seller badge'}
          image={avatar1}
          title={'Congratulations Flora!🎉'}
        />
        </MenuItem>
        <MenuItem onClick={handleClose}> 
        <MenuItemTemplate
          time={'Yesterday'}
          message={'5 hours ago'}
          image={avatar2}
          title={'New user registered.'}
        />
        </MenuItem>
        <MenuItem onClick={handleClose}> 
        <MenuItemTemplate
          time={'10 May'}
          message={'You have 10 unread messages'}
          image={avatar3}
          title={'New message received👋'}
        />
        </MenuItem>
        <MenuItem onClick={handleClose}> 
        <MenuItemTemplate
          time={'08 May'}
          message={'Received Payment'}
          image={avatar1}
          title={'Paypal'}
        />
        </MenuItem>
        <button onClick={handleClose} className='btn'>SEE ALL NOTIFICATIONS</button>
        </div>
      </Menu>
    </div>
  );
}