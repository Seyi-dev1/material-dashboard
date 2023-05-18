
import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "America", value: 400 },
  { name: "Europe", value: 300 },
  { name: "Asia", value: 300 },
  { name: "Africa", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: anys) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Template() {

    const [activeIndex] = useState(0);
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
  return (
    <ResponsiveContainer width={400}>
    <PieChart  height={400}>
     <Tooltip content={CustomTooltip} wrapperStyle={{outline:'none'}}/>
     <Legend wrapperStyle={{display:'grid', justifyContent:'space-between', top:'26rem', left:'3rem' }}
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
        data={data}
        cx={197}
        cy={190}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={140}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </ResponsiveContainer>
  );
}
