import './tableTemplate.scss'
import React from 'react'

const TableTemplate2 = ({img1,img2,img3,img4,text1,text2,text3,text4}) => {
  return (
    <div className='tableTemplate2'>
        <div className="imageAndText">
            <div className="image">
                <img src={img1} alt="flag" />
            </div>
            <div className="text"><p>{text1}</p></div>
        </div>
        <div className="imageAndText">
            <div className="image">
                <img src={img2} alt="flag" />
            </div>
            <div className="text"><p>{text2}</p></div>
        </div>
        <div className="imageAndText">
            <div className="image">
                <img src={img3} alt="flag" />
            </div>
            <div className="text"><p>{text3}</p></div>
        </div>
        <div className="imageAndText">
            <div className="image">
                <img src={img4} alt="flag" />
            </div>
            <div className="text"><p>{text4}</p></div>
        </div>
    </div>
  )
}

export default TableTemplate2