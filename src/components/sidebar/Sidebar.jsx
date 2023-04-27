import './sidebar.scss'
import React from 'react'
import logo from '../../assets/icons8-m-50 (2).png'
import HomeIcon from '@mui/icons-material/Home';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ForumIcon from '@mui/icons-material/Forum';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className="logo">
    <NavLink to={'/'}>
    <img src={logo} alt="logo" />
    </NavLink> 
    <span className="logo-text">
      Materioo
    </span>
    </div>

    <div className="name">
      <div className="block"><h2>S</h2></div>
      <div className="description">
        <h4>Samwell Tarley</h4>
        <p>admin</p>
      </div>
    </div>

    <div className="links">
      <div className="general">
        <div className="header">
        <h3>GENERAL</h3>
        </div>
        <div className="link-items">
          <ul>
          <NavLink 
            to={'dashboard/app'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
           >
          <li className='item'><HomeIcon className='icon'/><span className="text">App</span></li>
          </NavLink>
          <NavLink
           to={'dashboard/commerce'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
            <li className="item"><LocalGroceryStoreIcon className='icon'/><span className="text">E-Commerce</span></li>
          </NavLink>
          <NavLink
          to={'dashboard/analytics'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
          <li className="item"><QueryStatsIcon className='icon'/><span className="text">Analytics</span></li>
          </NavLink>
          <NavLink
          to={'dashboard/banking'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
          <li className="item"><AccountBalanceIcon className='icon'/><span className="text">Banking</span></li>
          </NavLink>
          <NavLink
           to={'dashboard/booking'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
            <li className="item"><BusinessCenterIcon className='icon'/><span className="text">Booking</span></li>
          </NavLink>
          <NavLink
           to={'dashboard/file'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
            <li className="item"><DescriptionIcon className='icon'/><span className="text">File</span></li>
          </NavLink>
          </ul>
        </div>
      </div>

      <div className="general">
        <div className="header">
        <h3>MANAGEMENT</h3>
        </div>
        <div className="link-items">
          <ul>
          <NavLink
          to={'dashboard/user'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
             <li className="item"><PersonIcon className='icon'/><span className="text">User</span></li>
          </NavLink>
          <NavLink
          to={'dashboard/invoice'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
            <li className="item"><ReceiptIcon className='icon'/><span className="text">Invoice</span></li>
          </NavLink>
          <NavLink
          to={'dashboard/blog'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
           >
           <li className="item"><ForumIcon className='icon'/><span className="text">Blog</span></li>
          </NavLink>
          <NavLink
           to={'dashboard/filemanager'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
            <li className="item"><FolderCopyIcon className='icon'/><span className="text">File Manager</span></li>
          </NavLink>
          </ul>
        </div>
      </div>

      <div className="general">
        <div className="header">
        <h3>LISTS</h3>
        </div>
        <div className="link-items">
          <ul>
          <NavLink
           to={'dashboard/users'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
            <li className="item"><PeopleAltIcon className='icon'/><span className="text">Users</span></li>
          </NavLink>
          <NavLink
          to={'dashboard/products'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
             <li className="item"><InventoryIcon className='icon'/><span className="text">Products</span></li>
          </NavLink>
          <NavLink
          to={'dashboard/orders'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
            <li className="item"><LocalShippingIcon className='icon'/><span className="text">Orders</span></li>
          </NavLink>
          </ul>
        </div>
      </div>

      <div className="general">
        <div className="header">
        <h3>SERVICES</h3>
        </div>
        <div className="link-items">
          <ul>
          <NavLink
           to={'dashboard/health'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
          <li className="item"><MonitorHeartIcon className='icon'/><span className="text">System Health</span></li>
          </NavLink>
          <NavLink
          to={'dashboard/logs'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
             <li className="item"><WebStoriesIcon className='icon'/><span className="text">Logs</span></li>
          </NavLink>
          <NavLink
           to={'dashboard/settings'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
            <li className="item"><SettingsIcon className='icon'/><span className="text">Settings</span></li>
          </NavLink>
          </ul>
        </div>
      </div>

      <div className="general">
        <div className="header">
        <h3>USER</h3>
        </div>
        <div className="link-items">
          <ul>
          <NavLink
           to={'user'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
             <li className="item"><ManageAccountsIcon className='icon'/><span className="text">Profile</span></li>
          </NavLink>
          <NavLink
           to={'/'}
            className={`link-item ({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           `}
          >
             <li className="item"><LogoutIcon className='icon'/><span className="text">Logout</span></li>
          </NavLink>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar