import {BsAndroid2} from 'react-icons/bs'
import { BsApple }  from 'react-icons/bs'
import { BsWindows }  from 'react-icons/bs'
import { BsBugFill }  from 'react-icons/bs'


const containers = [
    {
        id:1,
        icon:<BsAndroid2/>,
        type:'android',
        figure:'1.35m',
        text:'Weekly Sales'
    },
    {
        id:2,
        icon:<BsApple/>,
        type:'apple',
        figure:'234',
        text:'New Users'
    },
    {
        id:3,
        icon:<BsWindows/>,
        type:'windows',
        figure:'1.72m',
        text:'Item Orders'
    },
    {
        id:4,
        icon:<BsBugFill/>,
        type:'bug',
        figure:'714k',
        text:'Bug Reports'
    }
]

export default containers