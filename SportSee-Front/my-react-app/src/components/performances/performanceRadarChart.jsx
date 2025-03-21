import "./performanceRadarChart.scoped.scss";
import { useState, useEffect } from "react";
import { getUserPerformance } from "../../services/APIService";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

function PerformanceRadarChart({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            if (!userId) return; // Vérifie que userId est défini

            const performanceData = await getUserPerformance(userId);

            if (!performanceData?.data) {
                console.warn("Aucune donnée de performance trouvée.");
                setData([]); // Réinitialise à un tableau vide pour éviter les erreurs
                return;
            }

            setData(performanceData.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des performances :", error);
            setData([]); // Réinitialise en cas d'erreur
        }
    };

    fetchData();
}, [userId]);

  return (
    <div className="radarChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="62%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis 
            dataKey="kind" 
            stroke="#fff" 
            tick={{ fill: "#fff", fontSize: 12, fontWeight: "400" }} 
            tickSize={10}
            tickLine={false}
          />
          <Radar 
            name="Performance" 
            dataKey="value" 
            stroke="#FF0101B2" 
            fill="#FF0101B2" 
            fillOpacity={0.6} 
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceRadarChart;
