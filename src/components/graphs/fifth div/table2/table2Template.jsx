import './table2Template.scss'
import React from 'react'

const Table2Template = ({ img1, name, figure, img2, clarse }) => {
  return (
    <div className='table2Template'>
        <div className="img1">
            <img src={img1} alt="avatar" />
        </div>
        <div className="text">
            <div className="name">
            <p>{name}</p>
            </div>
            <div className="stats">
            <span className="emoji">💜</span>
            <span className="number">{figure}</span>
            </div>
        </div>
        <div className="img2">
            <img src={img2} alt="trophy" className={`${clarse}`} />
        </div>
    </div>
  )
}

export default Table2Template