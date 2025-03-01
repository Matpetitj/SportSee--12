import "./scoreRadialChart.scoped.scss";
import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { getUserScore } from "../../services/APIService";

function ScoreRadialChart({ userId }) {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const userData = await getUserScore(userId);
                if (userData && userData.score !== undefined) {
                    setScore(userData.score);
                }
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

    const CustomizedLegend = () => {
        return (
            <div className="legendWrapper">
                <div className="score">{`${score * 100}%`}</div>
                <div className="description">de votre objectif</div>
            </div>
        );
    };

    return (
        <div className="radialChart">
            <ResponsiveContainer width="100%" height="100%">
                <div className="scoreTitle"><h3>Score</h3></div>
                <RadialBarChart startAngle={90} endAngle={450} innerRadius="65%" outerRadius="75%" data={data}>
                    <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        dataKey="uv"
                    />
                    <Legend content={CustomizedLegend} />
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ScoreRadialChart;
