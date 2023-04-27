import React from 'react'
import TableTemplate2 from './tableTemplate2'
import './table1.scss'
import germany from '../../../../assets/icons8-germany-40.png'
import uk from '../../../../assets/icons8-great-britain-35.png'
import france from '../../../../assets/icons8-france-35.png'
import usa from '../../../../assets/icons8-usa-40.png'
import spain from '../../../../assets/icons8-spain-flag-35.png'
import android from '../../../../assets/icons8-android-os-20.png'
import apple from '../../../../assets/icons8-apple-logo-20.png'
import windows from '../../../../assets/icons8-windows-client-20.png'
const Table = () => {
  return (
    <div className='table1'>
    <h2>Top Installed Countries</h2>
    <div className="content">
    <TableTemplate2 
        img1={usa}
        img2={android}
        img3={apple}
        img4={windows}
        text1='USA'
        text2='82k'
        text3={'13.2k'}
        text4={'15k'}
    />
         <TableTemplate2 
        img1={germany}
        img2={android}
        img3={apple}
        img4={windows}
        text1='Germany'
        text2='22k'
        text3={'11.9k'}
        text4={'10k'}
    />
     <TableTemplate2 
        img1={spain}
        img2={android}
        img3={apple}
        img4={windows}
        text1='Spain'
        text2='15k'
        text3={'13.2k'}
        text4={'1.8k'}
    />
     <TableTemplate2 
        img1={france}
        img2={android}
        img3={apple}
        img4={windows}
        text1='France'
        text2='19k'
        text3={'50.4k'}
        text4={'77k'}
    />
     <TableTemplate2 
        img1={uk}
        img2={android}
        img3={apple}
        img4={windows}
        text1='UK'
        text2='52k'
        text3={'13.6k'}
        text4={'12k'}
    />
    </div>
    </div>
  )
}

export default Table