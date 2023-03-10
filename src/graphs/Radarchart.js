import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "0-4 yrs",
    A: 30,
    fullMark: 300,
  },
  {
    subject: "5-8 yrs",
    A: 60,
    fullMark: 300,
  },
  {
    subject: "9-13 yrs",
    A: 90,
    fullMark: 300,
  },
  {
    subject: "14-17 yrs",
    A: 60,
    fullMark: 300,
  },
  {
    subject: "18+ yrs",
    A: 60,
    fullMark: 300,
  },
];

export default function Radarchart() {
  return (
    <RadarChart
      cx={100}
      cy={100}
      outerRadius={50}
      width={200}
      height={200}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#E49531"
        fill="#00A654"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
