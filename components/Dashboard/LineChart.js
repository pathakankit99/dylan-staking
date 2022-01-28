import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'


const data = [
  {
    name: '1 Jan',
    average: 4000,
    floor: 2400,
  },
  {
    name: '2 Jan',
    average: 3000,
    floor: 1398,
  },
  {
    name: '3 Jan',
    average: 2000,
    floor: 9800,
  },
  {
    name: '4 Jan',
    average: 2780,
    floor: 3908,
  },
  {
    name: '5 Jan',
    average: 1890,
    floor: 4800,
  },
  {
    name: '6 Jan',
    average: 2390,
    floor: 3800,
  },
  {
    name: '7 Jan',
    average: 3490,
    floor: 4300,
  },
  {
    name: '8 Jan',
    average: 4000,
    floor: 2400,
    
  },
  {
    name: '9 Jan',
    average: 3000,
    floor: 1398,
    
  },
  {
    name: '10 Jan',
    average: 2000,
    floor: 9800,
    
  },
  {
    name: '11 Jan',
    average: 2780,
    floor: 3908,
    
  },
  {
    name: '12 Jan',
    average: 1890,
    floor: 4800,
    
  },
  {
    name: '13 Jan',
    average: 2390,
    floor: 3800,
    
  },
  {
    name: '14 Jan',
    average: 3490,
    floor: 4300,
    
  },
  {
    name: '15 Jan',
    average: 4000,
    floor: 2400,
    
  },
  {
    name: '16 Jan',
    average: 3000,
    floor: 1398,
    
  },
  {
    name: '17 Jan',
    average: 2000,
    floor: 9800,
    
  },
  {
    name: '18 Jan',
    average: 2780,
    floor: 3908,
    
  },
  {
    name: '19 Jan',
    average: 1890,
    floor: 4800,
    
  },
  {
    name: '20 Jan',
    average: 2390,
    floor: 3800,
    
  },
  {
    name: '21 Jan',
    average: 3490,
    floor: 4300,
    
  },
  {
    name: '22 Jan',
    average: 4000,
    floor: 2400,
    
  },
  {
    name: '23 Jan',
    average: 3000,
    floor: 1398,
    
  },
  {
    name: '24 Jan',
    average: 2000,
    floor: 9800,
    
  },
  {
    name: '25 Jan',
    average: 2780,
    floor: 3908,
    
  },
  {
    name: '26 Jan',
    average: 1890,
    floor: 4800,
    
  },
  {
    name: '27 Jan',
    average: 2390,
    floor: 3800,
    
  },
  {
    name: '28 Jan',
    average: 3490,
    floor: 4300,
    
  },
]

function LineChartx() {

  return (
    <div className="py-12">
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="price" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="floor"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="average" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartx;
