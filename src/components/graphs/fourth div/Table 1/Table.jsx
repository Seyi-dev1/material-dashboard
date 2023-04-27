import './table.scss'
import React from 'react'
import BasicTable from './tableTemplate'

const Table1 = () => {
  return (
    <div className='table'>
    <h2>New Invoice</h2>
        <BasicTable/>
        <button>View All</button>
    </div>
  )
}

export default Table1