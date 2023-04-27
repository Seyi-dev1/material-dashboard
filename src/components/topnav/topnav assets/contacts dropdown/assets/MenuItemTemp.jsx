import './menuItemTemp.scss'
import React from 'react'



function MenuItemTemp(props) {


  return (
    <div className='menu-item'>
    <div className="image">
        <img src={props.image} alt="avatar" />
    </div>
    <div className="text">
    <h3>{props.title}</h3>
   {props.timeStamp &&  <p>{props.timeStamp}</p>}
    </div>
    </div>
  )
}

export default MenuItemTemp