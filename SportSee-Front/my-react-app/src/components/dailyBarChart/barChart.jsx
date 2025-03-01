import "./barChart.scoped.scss";
import React, { useEffect, useState } from "react";
import { getUserActivity } from "../../services/APIService";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DailyBarChart = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userActivity = await getUserActivity(userId);
      if (userActivity && userActivity.sessions) {
        setData(
          userActivity.sessions.map((session, index) => ({
            name: index + 1, // Jour sous forme de numéro (1, 2, 3...)
            kg: session.kilogram, // Poids (kg)
            kCal: session.calories, // Calories brûlées
          }))
        );
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const customizedLegend = () => {
    return (
      <div className="legendWrapper">
        <div className="legendKg">
          <div className="legendDot" style={{ backgroundColor: "black" }}></div>
          <div>Poids (kg)</div>
        </div>
        <div className="legendCal">
          <div className="legendDot" style={{ backgroundColor: "red" }}></div>
          <div>Calories brûlées (kCal)</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="90%">
        <div className="dailyTitle">
          <h3>Activité quotidienne</h3>
        </div>
        <BarChart
          data={data} // Ici on utilise les vraies données récupérées
          margin={{ top: 40, right: 10, left: 50, bottom: 5 }}
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
            style={{ fontWeight: "600", fontSize: "14px", fill: "#9B9EAC" }}
          />
          {/* POIDS */}
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            style={{ fontWeight: "600", fontSize: "14px", fill: "#9B9EAC" }}
            dx={25}
            domain={["dataMin -1", "dataMax +2"]}
            interval={1}
          />
          <CartesianGrid strokeDasharray="2" vertical={false} />
          {/* CALORIES */}
          <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} hide />
          <Tooltip />
          <Legend verticalAlign="top" height={50} content={customizedLegend} />
          <Bar dataKey="kg" fill="black" yAxisId="right" radius={[4.5, 4.5, 0, 0]} />
          <Bar dataKey="kCal" fill="red" yAxisId="left" radius={[4.5, 4.5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DailyBarChart;
