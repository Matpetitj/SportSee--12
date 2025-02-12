import "./scoreRadialChart.scoped.scss"

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';



function ScoreRadialChart () {

  const data = [
    {
      name: '18-24',
      uv: 31.47,
      pv: 2400,
      fill: '#8884d8',
    }
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

  const CustomizedLegend = () => {
    return (
      <div className="legendWrapper">
          <div className="score">12%</div>
          <div className="description">de votre objectif</div>
      </div>
    );
  };

  return (
    <>
    <div className="radialChart">
        <ResponsiveContainer width="100%" height="100%">
        <div className="scoreTitle"><h3>Score</h3></div>
          <RadialBarChart
               startAngle={90}
               endAngle={450}
               innerRadius="65%"
               outerRadius="75%" 
               data={data}>
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend content={CustomizedLegend} 
            // wrapperStyle={{
            //   position: "absolute",
            //   top: "200px",
            //   left: "206px",
            //   transform: "translate(-42%, -42%)",
            //   textAlign: "center",}} 
            />
            <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </>
  );

}

export default ScoreRadialChart;