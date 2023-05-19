
import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    C:30,
    fullMark: 20,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    C: 40,
    fullMark: 40,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    C: 50,
    fullMark: 15,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    C: 25,
    fullMark: 10,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    C: 40,
    fullMark: 60,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    C: 35,
    fullMark: 80,
  },
];

export default function Template() {
  return (
    
    <RadarChart cx={188} cy={230} outerRadius={95} width={400}  height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={90} domain={[0, 110]} />
      <Radar name="Mike" dataKey="A" stroke="purple" fill="purple" fillOpacity={0.4} />
      <Radar name="Lily" dataKey="B" stroke="orange" fill="orange" fillOpacity={0.4} />
      <Radar name="Abdul" dataKey="C" stroke="green" fill="green" fillOpacity={0.4} />
      <Legend  wrapperStyle={{display:'grid', justifyContent:'space-between', top:'29rem', left:'6rem', fontSize:window.innerWidth<=540?13:15 }}
        formatter={(value, entry, index) => <span style={{color:'black',}}>{value}</span>}
      />
    </RadarChart>
  );
}
