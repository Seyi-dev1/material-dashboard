import './table3.scss'
import React from 'react'
import Table3Template from './table3Template'
import person from '../../../../assets/icons8-person-100.png'
import mail from '../../../../assets/icons8-mail-100.png'

const Table3 = () => {
  return (
    <div className='table3'>
        <Table3Template
            percent={66}
            pathColor={`rgb(16, 242, 159)`}
            trailColor={'rgb(102, 237, 12, 0.1)'}
            figure={'38,866'}
            word={'Conversion'}
            image={person}
            background={'rgb(0, 123, 85)'}
        />
         <Table3Template
            percent={43}
            pathColor={`rgb(116, 236, 249)`}
            trailColor={'rgb(102, 237, 12, 0.1)'}
            figure={'38,866'}
            word={'Conversion'}
            image={mail}
            background={'rgb(0, 108, 156)'}
            
        />
    </div>
  )
}

export default Table3