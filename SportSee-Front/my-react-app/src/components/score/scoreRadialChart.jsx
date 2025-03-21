import "./scoreRadialChart.scoped.scss";
import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { getUserScore } from "../../services/APIService";

function ScoreRadialChart({ userId }) {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!userId) return; // Vérifie que userId est défini
    
                const userData = await getUserScore(userId);
    
                if (userData?.score === undefined) {
                    console.warn("Aucune donnée de score trouvée.");
                    setScore(0); // Réinitialise le score si aucune donnée valide
                    return;
                }
    
                setScore(userData.score);
            } catch (error) {
                console.error("Erreur lors de la récupération du score :", error);
                setScore(0); // Réinitialise en cas d'erreur
            }
        };
    
        fetchData();
    }, [userId]);

    const data = [
        {
            name: "Score",
            uv: score * 100, // Conversion en pourcentage
            fill: "#FF0000",
        },
    ];

    return (
        <div className="radialChart">
            <ResponsiveContainer width="100%" height="100%">
                <div className="scoreTitle"><h3>Score</h3></div>
                <div className="legend">
                    <div className="score">{`${score * 100}%`}</div>
                    <div className="description">de votre <br/> objectif</div>
                </div>
                <RadialBarChart startAngle={90} endAngle={450} innerRadius="65%" outerRadius="75%" data={data}>
                    <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        dataKey="uv"
                    />
                    {/* <Legend content={CustomizedLegend} /> */}
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ScoreRadialChart;
