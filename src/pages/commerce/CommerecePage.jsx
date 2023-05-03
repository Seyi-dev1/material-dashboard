import Carousel from '../../components/carousel/Carousel'
import './commercePage.scss'
import React from 'react'
import analytics from '../../assets/Data analytics _Isometric.png'
import Graph1 from '../../components/commerce/second div/graph1'
import up  from '../../assets/icons8-chart-arrow-rise-20.png'
import down from '../../assets/icons8-chart-arrow-descent-20.png'
import  Container1  from '../../components/commerce/third div/Container1'
import Container2 from '../../components/commerce/third div/Container2'
import Container1d4 from '../../components/commerce/fourth div/Container1'
import Container2d4 from '../../components/commerce/fourth div/Container2'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { useSelector } from 'react-redux'



const CommerecePage = () => {


  const user = useSelector(state=>selectCurrentUser(state))
  const firstName = user.firstName


  return (
    <div className='commercePage'>
       <div className="firstDiv">
        <div className="one">
          <div className="content">
            <div className="text">
              <h1>Congratulations! <br />{firstName}</h1>
              <p>
              You have done 72% 🤩 more sales today.

Check your new raising badge in your profile.
              </p>
              <button>Go Now</button>
            </div>
            <div className="image">
              <img src={analytics} alt="analytic" />
            </div>
          </div>
        </div>
        <div className="two">
          <Carousel/>
        </div>
      </div>
      <div className="secondDiv">
      <Graph1
          title={'Total Active Users'}
          image={up}
          figure={'+2.6%'}
          number={"15,588"}
          fill={'#47b85c'}
        />
        <Graph1
           title={'Total Active Users'}
          image={up}
          figure={'+8.2%'}
          number={"13,800"}
          fill={'#4ebdd8'}
        />
        <Graph1
           title={'Total Active Users'}
          image={down}
          figure={'-3.8%'}
          number={"7,558"}
          fill={'#f9c310'}
        />
      </div>
      <div className="thirdDiv">
        <Container1/>
        <Container2/>
      </div>
      <div className="fourthDiv">
      <Container1d4/>
      <Container2d4/>
      </div>
    </div>
  )
}

export default CommerecePage