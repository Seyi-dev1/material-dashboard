import './card.scss'
import React from 'react'
import menu from '../../../../assets/icons8-menu-vertical-40.png'

const Card = ({ image, figure, title, text }) => {
 
    return(
        <div className="card">
            <div className="content">
                <div className="header">
                <img src={image} alt="png"  className='pic'/>
                <img src={menu} alt="menu" className='menu' />
                </div>
                <div className="body">
                    <span className="bold">{title}</span>
                    <h2>{figure} <span className='sup'><sup>+3.9%</sup></span></h2>
                </div>
                <div className="footer">
                    <p className='light'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card