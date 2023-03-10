import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "January",
    lions: 40,
  },
  {
    name: "February",
    lions: 140,
  },
  {
    name: "March",
    lions: 340,
  },
  {
    name: "April",

    lions: 464,
  },
  {
    name: "May",

    lions: 694,
  },
  {
    name: "June",

    lions: 1198,
  },
  {
    name: "July",

    lions: 1250,
  },
  {
    name: "August",

    lions: 1690,
  },
  {
    name: "September",

    lions: 2110,
  },
  {
    name: "October",

    lions: 2342,
  },
  {
    name: "November",

    lions: 2400,
  },
  {
    name: "December",

    lions: 2602,
  },
];

export default function Bargraph() {
  return (
    <BarChart
      width={1000}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="lions" fill="#00A654" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
