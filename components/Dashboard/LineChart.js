import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "1 Jan",
    average: 4000,
    floor: 2400,
  },
  {
    name: "2 Jan",
    average: 3000,
    floor: 1398,
  },
  {
    name: "3 Jan",
    average: 2000,
    floor: 9800,
  },
  {
    name: "4 Jan",
    average: 2780,
    floor: 3908,
  },
  {
    name: "5 Jan",
    average: 1890,
    floor: 4800,
  },
  {
    name: "6 Jan",
    average: 2390,
    floor: 3800,
  },
  {
    name: "7 Jan",
    average: 3490,
    floor: 4300,
  },
  {
    name: "8 Jan",
    average: 4000,
    floor: 2400,
  },
  {
    name: "9 Jan",
    average: 3000,
    floor: 1398,
  },
  {
    name: "10 Jan",
    average: 2000,
    floor: 9800,
  },
  {
    name: "11 Jan",
    average: 2780,
    floor: 3908,
  },
  {
    name: "12 Jan",
    average: 1890,
    floor: 4800,
  },
  {
    name: "13 Jan",
    average: 2390,
    floor: 3800,
  },
  {
    name: "14 Jan",
    average: 3490,
    floor: 4300,
  },
  {
    name: "15 Jan",
    average: 4000,
    floor: 2400,
  },
  {
    name: "16 Jan",
    average: 3000,
    floor: 1398,
  },
  {
    name: "17 Jan",
    average: 2000,
    floor: 9800,
  },
  {
    name: "18 Jan",
    average: 2780,
    floor: 3908,
  },
  {
    name: "19 Jan",
    average: 1890,
    floor: 4800,
  },
  {
    name: "20 Jan",
    average: 2390,
    floor: 3800,
  },
  {
    name: "21 Jan",
    average: 3490,
    floor: 4300,
  },
  {
    name: "22 Jan",
    average: 4000,
    floor: 2400,
  },
  {
    name: "23 Jan",
    average: 3000,
    floor: 1398,
  },
  {
    name: "24 Jan",
    average: 2000,
    floor: 9800,
  },
  {
    name: "25 Jan",
    average: 2780,
    floor: 3908,
  },
  {
    name: "26 Jan",
    average: 1890,
    floor: 4800,
  },
  {
    name: "27 Jan",
    average: 2390,
    floor: 3800,
  },
  {
    name: "28 Jan",
    average: 3490,
    floor: 4300,
  },
];
const darkTheme = {
  backgroundColor: "#2e2c34",
  color: "#dddddd",
};
const getTooltipStyles = () => {
  const { backgroundColor, color } = darkTheme;
  return {
    contentStyle: { backgroundColor },
    itemStyle: { color },
  };
};
function LineChartx() {
  return (
    <div className="py-12 text-white">
      <ResponsiveContainer height={350} className="dashboard__area">
        <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} />
          <YAxis tickLine={false} />
          <Tooltip {...getTooltipStyles()} />
          <Legend />
          <CartesianGrid />
          <Area
            name="Floor"
            type="monotone"
            dataKey="floor"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            name="Average"
            type="monotone"
            dataKey="average"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartx;
