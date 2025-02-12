import "./performanceRadarChart.scoped.scss"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function PerformanceRadarChart (){

    const data = [
      {
        subject: 'Math',
        A: 120,
        B: 110,
        fullMark: 150,
      },
      {
        subject: 'Chinese',
        A: 98,
        B: 130,
        fullMark: 150,
      },
      {
        subject: 'English',
        A: 86,
        B: 130,
        fullMark: 150,
      },
      {
        subject: 'Geography',
        A: 99,
        B: 100,
        fullMark: 150,
      },
      {
        subject: 'Physics',
        A: 85,
        B: 90,
        fullMark: 150,
      },
      {
        subject: 'History',
        A: 65,
        B: 85,
        fullMark: 150,
      },
    ];

    return (
      <>
        <div className="radarChart">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid radialLines={false}/>
              <PolarAngleAxis dataKey="subject" stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} tickSize={20}/>           
              <Radar name="Mike" dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </>
    );
}

export default PerformanceRadarChart;