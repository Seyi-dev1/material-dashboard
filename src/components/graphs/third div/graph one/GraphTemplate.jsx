import React, { useCallback, useState } from "react";
import './graphTemplate.scss'
import { PieChart, Pie, Sector, Tooltip, Cell, Legend } from "recharts";

const data = [
  { name: "", value: 0 },
  { name: "Android", value: 40850 },
  { name: "Mac", value: 30570 },
  { name: "Windows", value: 35000 },
  { name: "iOS", value: 25786 }
];
const COLORS = ["transparent", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];



export default function Piechart() {


  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;
   
  
    return (
      <g >
        
          {activeIndex?<foreignObject  height="200" width="200" fill={fill}  x={200} y={175} dy={5} textAnchor="middle" className="pieText">
      <div className="custom">
      <div className="label" style={{color:fill}}>{payload.name}</div>
      <div className="value">{payload.value}</div>
      </div>
    </foreignObject>:
         <foreignObject height="200" width="200"  x={200} y={175} dy={5} textAnchor="middle" className="pieText">
      <div className="custom"> 
      <div className="label">Total</div>
      <div className="value">384000</div>
      </div>
    </foreignObject>}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
        <div className="color" style={{backgroundColor:COLORS[activeIndex]}}></div>
          <p className="label">{`${payload[0].name}  ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };




  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const onPieLeave = useCallback(
    (_, index) => {
      setActiveIndex(0);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={600} height={420}>
      <Tooltip content={CustomTooltip} wrapperStyle={{outline:'none'}}/>
      <Legend 
      formatter={(value, entry, index) => <span className="legend">{value}</span>}
  payload={
    data.map(
      (item, index) => ({
        id: item.name,
        type: item.name && "circle",
        value: `${item.name}`,
        color: COLORS[index]
      })
    )
  }
/>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
       
        innerRadius={148}
        outerRadius={162}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        onMouseLeave={onPieLeave}
      >
         {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} radius={'5px'} />
        ))}
        </Pie>
    </PieChart>
  )
         }