'use client';

import React from 'react';
import { ShoppingCart, Users, Package, DollarSign } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from 'recharts';
import { recentOrders, revenueData, userGrowthData } from '@/db';
import { useTheme } from 'next-themes';

const DashboardPage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className='space-y-3'>
        <h2 className=' text-3xl font-medium'>Dashboard</h2>
        <p className='text-muted-foreground '>Overview of your account</p>
      </div>

      {/* Key Metrics */}
      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$45,231.89</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Transactions</CardTitle>
            <ShoppingCart className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+2350</div>
            <p className='text-xs text-muted-foreground'>
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Users</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>12,234</div>
            <p className='text-xs text-muted-foreground'>
              +7.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Active Products
            </CardTitle>
            <Package className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>1,234</div>
            <p className='text-xs text-muted-foreground'>
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card className='text-white'>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray='3 3'
                  stroke={theme === 'dark' ? '#374151' : '#e5e7eb'}
                />
                <XAxis
                  dataKey='name'
                  stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
                />
                <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                    color: theme === 'dark' ? '#ffffff' : '#000000',
                  }}
                />
                <Area
                  type='monotone'
                  dataKey='value'
                  stroke='#8884d8'
                  fill={theme === 'dark' ? '#4c1d95' : '#c7d2fe'}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Users Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid
                  strokeDasharray='3 3'
                  stroke={theme === 'dark' ? '#374151' : '#e5e7eb'}
                />
                <XAxis
                  dataKey='name'
                  stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
                />
                <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                    color: theme === 'dark' ? '#ffffff' : '#000000',
                  }}
                />
                <Line type='monotone' dataKey='customers' stroke='#8884d8' />
                <Line type='monotone' dataKey='vendors' stroke='#82ca9d' />
                <Line type='monotone' dataKey='delivery' stroke='#ffc658' />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className='mt-8'>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>
            You have {recentOrders.length} orders this month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
