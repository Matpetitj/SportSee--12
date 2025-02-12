import "./barChart.scoped.scss"

import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DailyBarChart (){

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
];

const customizedLegend = () => {
  return (
    <div className="legendWrapper">
      <div className="legendKg">
        <div
            className="legendDot"
            style={{ backgroundColor: "black" }}
        ></div>
        <div>Poids (kg)</div>
      </div>
      <div className="legendCal">
        <div
            className="legendDot"
            style={{ backgroundColor: "red" }}
        ></div>
        <div>Calories brûlées (kCal)</div>
      </div>
    </div>
  )
}

  return (
    <>
        <ResponsiveContainer width="100%" height="90%">
        <div className="dailyTitle"><h3>Activité quotidienne</h3></div>
          <BarChart
            data={data}
            margin={{
              top: 40,
              right: 10,
              left: 50,
              bottom: 5,
            }}
            barSize={10}
            barGap={8}
          >
            <XAxis
              dataKey={"name"}
              height={55}
              width={"auto"}
              tickLine={false}
              axisLine={{ stroke: "#d1d2d6" }}
              dy={15}
              style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  fill: "#9B9EAC",
              }}
            />
            {/*POIDS*/}
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  fill: "#9B9EAC",
              }}
              dx={25}
              domain={["dataMin -1", "dataMax +2"]}
              interval={1}
            />
            <CartesianGrid strokeDasharray="2" vertical={false} />
            {/*CALORIES*/}
            <YAxis
              yAxisId="left"
              orientation="left"
              axisLine={false}
              tickLine={false}
              hide
            />
            <Tooltip />
            <Legend verticalAlign="top" height={50} content={customizedLegend}/>
            <Bar dataKey="uv" 
            fill="black"
            yAxisId="right"
            radius={[4.5, 4.5, 0, 0]}/>
            <Bar 
            dataKey="pv"
            fill="red"
            yAxisId="left"
            radius={[4.5, 4.5, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
    </>
  );
}

export default DailyBarChart;