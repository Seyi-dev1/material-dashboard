
import React from "react";
import { BarChart, Bar, Tooltip, } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 30,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 20,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 70,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 100,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 45,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 5390,
    pv: 65,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 50,
    amt: 2100
  }
];

export default function GraphTemplate({ color }) {
  return (
    <BarChart width={60} height={40} data={data} layout="horizontal">
    <Tooltip/>
      <Bar dataKey="pv" fill={color} radius={[10, 10, 10, 0]} barSize={4} />
    </BarChart>
  );
}
