import './appPage.scss'
import React from 'react'
import analytics from '../../assets/Analytics process_Monochromatic.png'
import Carousel from '../../components/carousel/Carousel'
import Graph1 from '../../components/graphs/second div/Graph1'
import down from '../../assets/icons8-chart-arrow-descent-20.png'
import up from '../../assets/icons8-chart-arrow-rise-20.png'
import Container1 from '../../components/graphs/third div/graph one/Container1'
import Container2 from '../../components/graphs/third div/graph two/Container2'
import Table1 from '../../components/graphs/fourth div/Table 1/Table'
import Table from '../../components/graphs/fifth div/table1/table1'
import Table2 from '../../components/graphs/fifth div/table2/table2'
import Table3 from '../../components/graphs/fifth div/table3/Table3'

const AppPage = () => {
  return (
    <div className='appContainer'>

      <div className="firstDiv">
        <div className="one">
          <div className="content">
            <div className="text">
              <h1>Welcome back! <br />Sam Tarley</h1>
              <p>If you are going to use a passage from Lorem Ipsum, you need to be sure there isn't anything.</p>
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
        <Table1/>
      </div>
      <div className="fifthDiv">
        <Table/>
        <Table2/>
        <Table3/>
      </div>
    </div>
  )
}

export default AppPage