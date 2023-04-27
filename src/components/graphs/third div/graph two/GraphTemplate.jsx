import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    Europe: 4000,
    Africa: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    Europe: 3000,
    Africa: 1398,
    amt: 2210
  },
  {
    name: "Mar",
    Europe: 2000,
    Africa: 9800,
    amt: 2290
  },
  {
    name: "Apr",
    Europe: 2780,
    Africa: 3908,
    amt: 2000
  },
  {
    name: "May",
    Europe: 1890,
    Africa: 4800,
    amt: 2181
  },
  {
    name: "Jun",
    Europe: 2390,
    Africa: 3800,
    amt: 2500
  },
  {
    name: "Jul",
    Europe: 3490,
    Africa: 4300,
    amt: 2100
  },
  {
    name: "Jul",
    Europe: 200,
    Africa: 1000,
    amt: 2100
  },
  {
    name: "Jul",
    Europe: 4326,
    Africa: 2900,
    amt: 2100
  }
];

export default function Linechart() {
  return (
    <LineChart
      width={800}
      height={410}
      data={data}
      margin={{
        top: 0,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3" vertical={false} strokeOpacity={0.5}/>
      <XAxis dataKey="name" strokeOpacity={0} />
      <YAxis  strokeOpacity={0.2} axisLine={false}/>
      <Tooltip />
      <Legend verticalAlign="top" vertOriginX="left" align="right"
        iconType="circle"
        formatter={(value, entry, index) => <span style={{color:'black', marginRight:'20px', marginBottom:'50px'}}>{value}</span>}
        wrapperStyle={{top:-40}}
        iconSize={16}
      />
      <Line
        type="monotone"
        dataKey="Europe"
        stroke="gold"
        strokeWidth={4}
        dot={false}
        // activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Africa" stroke="green"  strokeWidth={4}
        dot={false} />
    </LineChart>
  );
}