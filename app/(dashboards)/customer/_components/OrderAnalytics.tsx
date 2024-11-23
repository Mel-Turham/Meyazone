'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const orderData = {
  '7days': {
    lineData: [
      { name: 'Mon', orders: 12 },
      { name: 'Tue', orders: 19 },
      { name: 'Wed', orders: 3 },
      { name: 'Thu', orders: 5 },
      { name: 'Fri', orders: 2 },
      { name: 'Sat', orders: 3 },
      { name: 'Sun', orders: 7 },
    ],
    pieData: [
      { name: 'Completed', value: 300 },
      { name: 'Pending', value: 50 },
      { name: 'Canceled', value: 100 },
    ],
  },
  '30days': {
    lineData: [
      { name: 'Week 1', orders: 65 },
      { name: 'Week 2', orders: 59 },
      { name: 'Week 3', orders: 80 },
      { name: 'Week 4', orders: 81 },
    ],
    pieData: [
      { name: 'Completed', value: 1200 },
      { name: 'Pending', value: 200 },
      { name: 'Canceled', value: 300 },
    ],
  },
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function OrderAnalytics() {
  const [timeRange, setTimeRange] = useState('7days');

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
      <Card className='col-span-4'>
        <CardHeader>
          <CardTitle>Order Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className='w-[180px] mb-4'>
              <SelectValue placeholder='Select time range' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='7days'>Last 7 days</SelectItem>
              <SelectItem value='30days'>Last 30 days</SelectItem>
            </SelectContent>
          </Select>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={orderData[timeRange].lineData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='orders'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className='col-span-3'>
        <CardHeader>
          <CardTitle>Order Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <PieChart>
              <Pie
                data={orderData[timeRange].pieData}
                cx='50%'
                cy='50%'
                labelLine={false}
                outerRadius={80}
                fill='#8884d8'
                dataKey='value'
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {orderData[timeRange].pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
