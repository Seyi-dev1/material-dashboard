import './table2.scss'
import React from 'react'
import Table2Template from './table2Template'
import avatar1 from '../../../../assets/avatar_1.jpg'
import trophy1 from '../../../../assets/icons8-trophy-33.png'
import avatar2 from '../../../../assets/avatar_2.jpg'
import avatar3 from '../../../../assets/avatar_3.jpg'
import trophy2 from '../../../../assets/icons8-trophy-33 (2).png'
import trophy3 from '../../../../assets/icons8-trophy-33 (1).png'

const Table2 = () => {
  return (
    <div className='table2'>
        <h2>Top Authors</h2>
        <Table2Template
            img1={avatar1}
            img2={trophy1}
            name={'Jane Doe'}
            figure={'17.4k'}
            clarse={'trophy1'}
        />
         <Table2Template
            img1={avatar2}
            img2={trophy2}
            name={'Johanne Mosh'}
            figure={'10.1k'}
            clarse={'trophy2'}
        />
         <Table2Template
            img1={avatar3}
            img2={trophy3}
            name={'Dwight Gayle'}
            figure={'13.2k'}
            clarse={'trophy3'}
        />
    </div>
  )
}

export default Table2