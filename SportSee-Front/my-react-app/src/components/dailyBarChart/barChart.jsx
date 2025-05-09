import "./barChart.scoped.scss";
import React, { useEffect, useState } from "react";
import { getUserActivity } from "../../services/APIService";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DailyBarChart = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userActivity = await getUserActivity(userId);
  
        if (!userActivity || !userActivity.sessions) {
          throw new Error("Données utilisateur invalides ou indisponibles");
        }
  
        setData(
          userActivity.sessions.map((session, index) => ({
            name: index + 1, // Jour sous forme de numéro (1, 2, 3...)
            kg: session.kilogram ?? 0, // Poids (kg), valeur par défaut 0 en cas de problème
            kCal: session.calories ?? 0, // Calories brûlées, valeur par défaut 0
          }))
        );
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setData([]); // Réinitialisation des données en cas d'erreur
      }
    };
  
    if (userId) {
      fetchData();
    }
  }, [userId]);

     // CUSTOMIZED TOOLTIP
     const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
         return (
            <div
               style={{
                  backgroundColor: "red",
                  width: "55px",
                  height: "75px",
                  color: "#ffffff",
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <p className="label" style={{ margin: "10px" }}>
                  {`${payload[0].value}kg`}
               </p>
               <p className="label" style={{ margin: "10px" }}>
                  {`${payload[1].value}Kcal`}
               </p>
            </div>
         );
      }
      return null;
   };

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
      <ResponsiveContainer width="100%" height="100%">
        <div className="dailyTitle">
          <h3>Activité quotidienne</h3>
        </div>
        <BarChart
          data={data} // Ici on utilise les vraies données récupérées
          margin={{ top: 40, right: 10, left: 50, bottom: 5 }}
          barSize={6}
          barGap={6}
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
          <Tooltip content={CustomTooltip} cursor={{ fill:"#C4C4C480"}}/>
          <Legend verticalAlign="top" height={50} content={customizedLegend} />
          <Bar dataKey="kg" fill="black" yAxisId="right" radius={[4.5, 4.5, 0, 0]} />
          <Bar dataKey="kCal" fill="red" yAxisId="left" radius={[4.5, 4.5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DailyBarChart;
