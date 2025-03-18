import "./duration.scoped.scss";
import { useState, useEffect } from "react";
import { getUserAverageSessions } from "../../services/APIService";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function SessionDuration({ userId }) {
  const [data, setData] = useState([]);
  const weeklyDays = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return; // Vérifie que userId est défini
      const sessionData = await getUserAverageSessions(userId);
      // console.log(sessionData);
      if (sessionData) {
        setData(sessionData.sessions);
      }
    };
    fetchData();
  }, [userId]);

  // CUSTOMIZED TOOLTIP
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
       return (
          <div
             style={{
                backgroundColor: "white",
                width: "45px",
                height: "25px",
                fontSize: "8px",
                fontWeight: "600",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
             }}
          >
             <p className="tooltipText">{`${payload[0].value} min`}</p>
          </div>
       );
    }
    return null;
 };

  return (
    <div className="lineChart">
      <ResponsiveContainer width="100%" height="100%">
        <div className="sessionTitle">Durée moyenne des <br /> sessions</div>
        <LineChart
          data={data}
          margin={{
            top: 20,
            bottom: 20,
          }}
        >
          <XAxis 
            dataKey="day"
            color="#FFFFFF"
            tickLine={false}
            axisLine={false}
            style={{ fill: "white", fontSize: 12, opacity: 0.8 }}
            tickFormatter={(day) => weeklyDays[day - 1] || ""} 
            padding={{left: 15, right: 15}}
            dy={15}
          />
          <YAxis domain={["dataMin - 5", "dataMax + 5"]} hide  />
          <Tooltip content={CustomTooltip} cursor={false} />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity={0.3} />  {/* Faible à gauche */}
              <stop offset="100%" stopColor="white" stopOpacity={1} />   {/* Fort à droite */}
            </linearGradient>
          </defs>
          <Line 
            type="natural"
            dataKey="sessionLength"
            stroke="url(#lineGradient)" // Utilisation du gradient
            strokeWidth={2}
            activeDot={{ r: 4, fill: "white" }}
            dot={null}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SessionDuration;
