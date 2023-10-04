import { useContext } from "react";
import { AuthContext } from "../../AuthProviter/AuthProviter";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';







const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#53c521'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Dahsboard() {
    const { loading } = useContext(AuthContext)



    const data = [
        { name: 'Group A', value: 50 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 200 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 150 },
    ];

    if (loading) {
        return <span className="loading loading-dots w-10 mx-auto block"></span>;
    }
    return (
        <div>
            <div>
                <h2 className="text-center my-5 text-4xl font-semibold ">Dashboard </h2>
            </div>

            <div className="md:w-5/12  md:h-[40vh] h-[100vh] mx-auto md:my-10">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400}  height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center">
                <ul className="flex justify-center flex-wrap gap-4">
                    <li className="flex items-center gap-2 bg-blue-100 p-2 rounded">Local <span className="h-2 w-10 block bg-[#FFBB28]"></span></li>
                    <li className="flex items-center gap-2 bg-blue-100 p-2">International <span className="h-2 w-10 block bg-[#00C49F]"></span></li>
                    <li className="flex items-center gap-2 bg-blue-100 p-2">Sports <span className="h-2 w-10 block bg-[#FF8042]"></span></li>
                    <li className="flex items-center gap-2 bg-blue-100 p-2">Politics <span className="h-2 w-10 block bg-[#53c521]"></span></li>
                    <li className="flex items-center gap-2 bg-blue-100 p-2">Others <span className="h-2 w-10 block bg-[#0088FE]"></span></li>
                </ul>
            </div>
        </div>
    )
}
