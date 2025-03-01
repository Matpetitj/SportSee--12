import "./duration.scoped.scss";
import { useState, useEffect } from "react";
import { getUserAverageSessions } from "../../services/APIService";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function SessionDuration({ userId }) {
  const [data, setData] = useState([]);

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

  return (
    <div className="lineChart">
      <ResponsiveContainer width="100%" height="100%">
        <div className="sessionTitle">Durée moyenne des <br /> sessions</div>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis 
            dataKey="day"
            tickLine={false}
            axisLine={false}
            style={{ fill: "white", fontSize: 12, opacity: 0.8 }}
          />
          <YAxis hide />
          <Tooltip />
          <Line 
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeOpacity={1}
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
