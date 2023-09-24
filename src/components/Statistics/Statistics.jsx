import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
          name: 'Assignment-1',
          uv: 50,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Assignment-2',
          uv: 59,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Assignment-3',
          uv: 55,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Assignment-4',
          uv: 40,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Assignment-5',
          uv: 26,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Assignment-6',
          uv:26,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Assignment-7',
          uv: 60,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Assignment-8',
          uv: 51,
          pv: 4300,
          amt: 2100,
        },
      ];
      
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-5 text-gray-800'>My Assignment Marks</h1>
            <div className='mt-10 flex px-32' style={{ width: '100%', height: 600, position: 'center' }}>
                <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </ResponsiveContainer>
          </div>
            
        </div>
    );
};

export default Statistics;