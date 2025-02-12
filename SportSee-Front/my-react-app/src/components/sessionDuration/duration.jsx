import "./duration.scoped.scss";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function SessionDuration (){
    const data = [
        {
          name: 'L',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'M',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'M',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'J',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'V',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'S',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'D',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
  ];

  return (
    <>
      <div className="lineChart">
      <ResponsiveContainer width="100%" height="100%">
        <div className="sessionTitle">Durée moyenne des <br></br> sessions</div>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" 
          tickLine={false} 
          axisLine={false} 
          style={{fill: "white", fontSize: 12, opacity: 0.8}}/>
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" 
          dataKey="pv" 
          stroke="white" 
          strokeOpacity={1} 
          strokeWidth={2} 
          activeDot={{ r: 4, fill: "white" }} 
          dot={null} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  );
}

export default SessionDuration;