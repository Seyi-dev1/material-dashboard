import styles from './userDropDown.module.scss'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { auth } from '../../../../firebase/firebase.utils';
import { selectCurrentUser } from '../../../../redux/user/userSelectors';
import { updateCurrentUser } from '../../../../redux/user/userReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function UserMenu() {
  const user = useSelector(state=>selectCurrentUser(state))
  const firstName = user.firstName
  const lastName = user.lastName
  const email = user.email  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signOut =  ()=>{
     auth.signOut()
    setTimeout(()=>{navigate('/')}, 2000)
    dispatch(updateCurrentUser(null))
  }

  return (
    <div className={styles.notif}>
     
      
     <div onClick={handleClick} className={styles.block}>
     <h2>{firstName.charAt(0)}</h2>
     </div>
        
      
      <Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 50,
          horizontal: -190,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
       <div className={styles.title}>
      <div className="heading">
      <p className={styles.name}>
        {firstName} {lastName && lastName}
      </p>
      <p className={styles.email}>
        {email}
      </p>
      </div>
      </div>
        <MenuItem onClick={handleClose}>
       <div className={styles.menuItem}>
        <p>Home</p>
       </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <div className={styles.menuItem}>
        <p>Profile</p>
       </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <div className={styles.menuItem}>
        <p>Settings</p>
       </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <div onClick={()=>{signOut()}} className={styles.menuItem}>
        <p>Logout</p>
       </div>
        </MenuItem>
      </Menu>
    </div>
  );
}