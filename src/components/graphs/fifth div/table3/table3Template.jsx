import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './table3Template.scss'
const Table3Template = ({background,percent,pathColor,trailColor,figure, word,image}) => {

    const percentage = percent

  return (
    <div className='table3Template' style={{backgroundColor:background}}>
        <div className="progressBar">
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={6}
                styles={buildStyles({pathColor:pathColor,
                textColor:'#fff', trailColor:trailColor})
                }
            />
        </div>
        <div className="text">
            <div className="figure"><h1>{figure}</h1></div>
            <div className="words"><p>{word}</p></div>
        </div>
        <div className="png">
            <img src={image} alt="person" />
        </div>
    </div>
  )
}

export default Table3Template