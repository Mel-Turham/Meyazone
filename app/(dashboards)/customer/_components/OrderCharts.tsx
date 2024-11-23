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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Mock data for demonstration
const mockData = {
  '30days': [
    { name: 'Week 1', all: 65, pending: 20, canceled: 5, returns: 3 },
    { name: 'Week 2', all: 59, pending: 15, canceled: 8, returns: 2 },
    { name: 'Week 3', all: 80, pending: 25, canceled: 10, returns: 5 },
    { name: 'Week 4', all: 81, pending: 30, canceled: 7, returns: 4 },
  ],
  '6months': [
    { name: 'Jan', all: 200, pending: 50, canceled: 20, returns: 10 },
    { name: 'Feb', all: 180, pending: 45, canceled: 15, returns: 8 },
    { name: 'Mar', all: 220, pending: 55, canceled: 25, returns: 12 },
    { name: 'Apr', all: 250, pending: 60, canceled: 30, returns: 15 },
    { name: 'May', all: 280, pending: 70, canceled: 35, returns: 18 },
    { name: 'Jun', all: 300, pending: 75, canceled: 40, returns: 20 },
  ],
  '12months': [
    { name: 'Jul', all: 300, pending: 75, canceled: 40, returns: 20 },
    { name: 'Aug', all: 320, pending: 80, canceled: 45, returns: 22 },
    { name: 'Sep', all: 340, pending: 85, canceled: 50, returns: 25 },
    { name: 'Oct', all: 360, pending: 90, canceled: 55, returns: 28 },
    { name: 'Nov', all: 380, pending: 95, canceled: 60, returns: 30 },
    { name: 'Dec', all: 400, pending: 100, canceled: 65, returns: 32 },
    { name: 'Jan', all: 420, pending: 105, canceled: 70, returns: 35 },
    { name: 'Feb', all: 440, pending: 110, canceled: 75, returns: 38 },
    { name: 'Mar', all: 460, pending: 115, canceled: 80, returns: 40 },
    { name: 'Apr', all: 480, pending: 120, canceled: 85, returns: 42 },
    { name: 'May', all: 500, pending: 125, canceled: 90, returns: 45 },
    { name: 'Jun', all: 520, pending: 130, canceled: 95, returns: 48 },
  ],
};

export function OrderCharts() {
  const [timeRange, setTimeRange] = useState('30days');

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Order Statistics</CardTitle>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select time range' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='30days'>Last 30 days</SelectItem>
            <SelectItem value='6months'>Last 6 months</SelectItem>
            <SelectItem value='12months'>Last 12 months</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart
            data={mockData[timeRange]}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='all' fill='#8884d8' name='All Orders' />
            <Bar dataKey='pending' fill='#82ca9d' name='Pending Orders' />
            <Bar dataKey='canceled' fill='#ffc658' name='Canceled Orders' />
            <Bar dataKey='returns' fill='#ff8042' name='Returns' />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
