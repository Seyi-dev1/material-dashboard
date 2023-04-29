import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: `Feb '04`,
    Android: 590,
    Mac: 700,
    Windows: 1400,
    cnt: 490
  },
  {
    name:  `Mar '04`,
    Android: 868,
    Mac: 967,
    Windows: 1506,
    cnt: 590
  },
  {
    name:  `Apr '04`,
    Android: 1397,
    Mac: 600,
    Windows: 989,
    cnt: 350
  },
  {
    name:  `May '04`,
    Android: 1480,
    Mac: 800,
    Windows: 2000,
    cnt: 480
  },
  {
    name:  `Jun '04`,
    Android: 1520,
    Mac: 300,
    Windows: 1100,
    cnt: 460
  },
  {
    name:  `Jul '04`,
    Android: 1000,
    Mac: 680,
    Windows: 1700,
    cnt: 380
  },
  {
    name:  `Aug '04`,
    Android: 1500,
    Mac: 500,
    Windows: 900,
    cnt: 460
  },
];

export default function Template() {
  return (
    <ComposedChart
      width={700}
      height={500}
      data={data}
      margin={{
        top: 40,
        right: 5,
        bottom: 20,
        left: 5
      }}
    >
     <CartesianGrid strokeDasharray="3" vertical={false} strokeOpacity={0.3}/>
      <XAxis dataKey="name" strokeOpacity={0} tickMargin={10} />
      <YAxis strokeOpacity={0.2} axisLine={false} tickMargin={10} />
      <Tooltip />
      <Legend verticalAlign="top" vertOriginX="left" align="right"
        iconType="circle"
        formatter={(value, entry, index) => <span style={{color:'black', marginRight:'20px', marginBottom:'50px'}}>{value}</span>}
        wrapperStyle={{top:-10}}
        iconSize={16}
      />
      <Area type="monotone" dataKey="Windows" fill="gold" fillOpacity={0.1} stroke="gold" strokeWidth={3} />
      <Bar dataKey="Mac" fill="skyblue" radius={[10, 10, 10, 0]} barSize={7} />
      <Line type="monotone" dataKey="Android"  stroke="green"
        strokeWidth={3}
        dot={false} />
    </ComposedChart>
  );
}