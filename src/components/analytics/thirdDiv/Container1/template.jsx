
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Template() {
  return (
    <BarChart width={700} height={400} data={data}>
    <CartesianGrid strokeDasharray="3" vertical={false} strokeOpacity={0.3}/>
      <XAxis dataKey="name" strokeOpacity={0} tickMargin={10} />
      <YAxis strokeOpacity={0.2} axisLine={false} tickMargin={10} />
      <Bar dataKey="uv"  fill="skyblue" radius={[10, 0, 10, 0]} barSize={30} />
    </BarChart>
  );
}
