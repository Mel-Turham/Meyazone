'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChevronLeft, ChevronRight, Download, RefreshCw } from 'lucide-react';
import Link from 'next/link';

type keyProps = 'id' | 'status' | 'total' | null;
// Enhanced mock data
const orders = [
  {
    id: '001',
    client: 'John Doe',
    status: 'Delivered',
    deliveryDate: '2023-06-15',
    address: '123 Main St, City',
    total: 150.99,
  },
  {
    id: '002',
    client: 'Jane Smith',
    status: 'In Progress',
    deliveryDate: '2023-06-20',
    address: '456 Elm St, Town',
    total: 89.99,
  },
  {
    id: '003',
    client: 'Bob Johnson',
    status: 'Cancelled',
    deliveryDate: '2023-06-10',
    address: '789 Oak St, Village',
    total: 199.99,
  },
  {
    id: '004',
    client: 'Alice Brown',
    status: 'Delivered',
    deliveryDate: '2023-06-18',
    address: '101 Pine St, Hamlet',
    total: 75.5,
  },
  {
    id: '005',
    client: 'Charlie Davis',
    status: 'In Progress',
    deliveryDate: '2023-06-22',
    address: '202 Maple Ave, Borough',
    total: 129.99,
  },
];

const payments = [
  {
    id: '001',
    client: 'John Doe',
    product: 'Widget A',
    commission: 50,
    status: 'Paid',
    date: '2023-06-15',
    amount: 150.99,
  },
  {
    id: '002',
    client: 'Jane Smith',
    product: 'Gadget B',
    commission: 75,
    status: 'Pending',
    date: '2023-06-20',
    amount: 89.99,
  },
  {
    id: '003',
    client: 'Bob Johnson',
    product: 'Tool C',
    commission: 100,
    status: 'Failed',
    date: '2023-06-10',
    amount: 199.99,
  },
  {
    id: '004',
    client: 'Alice Brown',
    product: 'Device D',
    commission: 60,
    status: 'Paid',
    date: '2023-06-18',
    amount: 75.5,
  },
  {
    id: '005',
    client: 'Charlie Davis',
    product: 'Apparatus E',
    commission: 90,
    status: 'Pending',
    date: '2023-06-22',
    amount: 129.99,
  },
];

const financialData = [
  { name: 'Jan', revenue: 4000, commission: 2400, expenses: 1600 },
  { name: 'Feb', revenue: 3000, commission: 1398, expenses: 1200 },
  { name: 'Mar', revenue: 2000, commission: 9800, expenses: 2800 },
  { name: 'Apr', revenue: 2780, commission: 3908, expenses: 2000 },
  { name: 'May', revenue: 1890, commission: 4800, expenses: 2181 },
  { name: 'Jun', revenue: 2390, commission: 3800, expenses: 2500 },
  { name: 'Jul', revenue: 3490, commission: 4300, expenses: 2100 },
];

export default function EnhancedOrdersDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState<{
    key: keyProps;
    direction: string;
  }>({
    key: null,
    direction: 'ascending',
  });

  const filteredOrders = orders
    .filter(
      (order) =>
        (order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.id.includes(searchTerm) ||
          order.status.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (statusFilter === 'all' || order.status === statusFilter)
    )
    .sort((a, b) => {
      if (sortConfig.key) {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
      }
      return 0;
    });

  const filteredPayments = payments.filter(
    (payment) =>
      payment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const requestSort = (key: keyProps) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className='min-h-screen'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='spayce-y-4 '>
            <h1 className='text-3xl font-bold '>Orders Dashboard</h1>
            <p className='mt-2 '>
              Manage your orders, track payments, and view financial reports
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-between  gap-4 my-6 rounded-lg '>
        <Input
          type='search'
          placeholder='Search orders, payments, or reports...'
          className='max-w-sm'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='flex gap-2'>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Filter by status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Statuses</SelectItem>
              <SelectItem value='Delivered'>Delivered</SelectItem>
              <SelectItem value='In Progress'>In Progress</SelectItem>
              <SelectItem value='Cancelled'>Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button variant='outline' size='icon'>
            <RefreshCw className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <Tabs defaultValue='orders' className='space-y-4'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='orders'>Order History</TabsTrigger>
          <TabsTrigger value='payments'>Payment Tracking</TabsTrigger>
          <TabsTrigger value='reports'>Financial Reports</TabsTrigger>
        </TabsList>

        <TabsContent value='orders' className='space-y-4'>
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>
                View and manage your recent orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[100px]'>
                      <Button variant='ghost' onClick={() => requestSort('id')}>
                        Order ID{' '}
                        {sortConfig.key === 'id' &&
                          (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                      </Button>
                    </TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>
                      <Button
                        variant='ghost'
                        onClick={() => requestSort('status')}
                      >
                        Status{' '}
                        {sortConfig.key === 'status' &&
                          (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                      </Button>
                    </TableHead>
                    <TableHead>Delivery Details</TableHead>
                    <TableHead>
                      <Button
                        variant='ghost'
                        onClick={() => requestSort('total')}
                      >
                        Total{' '}
                        {sortConfig.key === 'total' &&
                          (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                      </Button>
                    </TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className='font-medium'>
                        <Link
                          href={`/orders/${order.id}`}
                          className='text-blue-600 hover:underline'
                        >
                          {order.id}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link
                          href={`dashboard/admin/users/${order.client}`}
                          className='text-blue-600 hover:underline'
                        >
                          {order.client}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            order.status === 'Delivered'
                              ? 'secondary'
                              : order.status === 'In Progress'
                              ? 'default'
                              : 'destructive'
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <p>{order.deliveryDate}</p>
                        <p className='text-sm text-gray-500'>{order.address}</p>
                      </TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <Button variant='outline' size='sm'>
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className='flex items-center justify-between border-t pt-6'>
              <p className='text-sm text-gray-600'>
                Showing {filteredOrders.length} of {orders.length} orders
              </p>
              <div className='space-x-2'>
                <Button variant='outline' size='sm'>
                  <ChevronLeft className='h-4 w-4 mr-2' />
                  Previous
                </Button>
                <Button variant='outline' size='sm'>
                  Next
                  <ChevronRight className='h-4 w-4 ml-2' />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value='payments' className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-4 w-4 text-muted-foreground'
                >
                  <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                </svg>
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
                <CardTitle className='text-sm font-medium'>
                  Seller Commissions
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-4 w-4 text-muted-foreground'
                >
                  <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                  <circle cx='9' cy='7' r='4' />
                  <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>$23,456.78</div>
                <p className='text-xs text-muted-foreground'>
                  +15.2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Successful Transactions
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-4 w-4 text-muted-foreground'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>1,234</div>
                <p className='text-xs text-muted-foreground'>
                  +8.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Recent Payment
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-4 w-4 text-muted-foreground'
                >
                  <rect width='20' height='14' x='2' y='5' rx='2' />
                  <path d='M2 10h20' />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>$1,234.56</div>
                <div className='flex items-center pt-1'>
                  <span className='text-xs text-muted-foreground mr-2'>
                    Seller: John Doe
                  </span>
                  <Badge variant='outline'>Paid</Badge>
                </div>
                <p className='text-xs text-muted-foreground pt-1'>
                  June 15, 2023
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>
                Overview of recent payment transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Purchased Product</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Seller's Commission</TableHead>
                    <TableHead>Payment Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.client}</TableCell>
                      <TableCell>
                        <Link
                          href={`/products/${payment.product}`}
                          className='text-blue-600 hover:underline'
                        >
                          {payment.product}
                        </Link>
                      </TableCell>
                      <TableCell>${payment.amount.toFixed(2)}</TableCell>
                      <TableCell>${payment.commission}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            payment.status === 'Paid'
                              ? 'secondary'
                              : payment.status === 'Pending'
                              ? 'default'
                              : 'destructive'
                          }
                        >
                          {payment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{payment.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='reports' className='space-y-4'>
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>
                Monthly revenue, commission, and expenses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={300}>
                <BarChart data={financialData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className='bg-white p-4 border rounded shadow-lg'>
                            <p className='font-bold'>{`${label}`}</p>
                            {payload.map((entry, index) => (
                              <p
                                key={`item-${index}`}
                                style={{ color: entry.color }}
                              >
                                {`${entry.name}: $${entry.value}`}
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                  <Bar dataKey='revenue' fill='#8884d8' name='Revenue' />
                  <Bar dataKey='commission' fill='#82ca9d' name='Commission' />
                  <Bar dataKey='expenses' fill='#ffc658' name='Expenses' />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={300}>
                <LineChart data={financialData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type='monotone'
                    dataKey='revenue'
                    stroke='#8884d8'
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Summary Financial Report</CardTitle>
              <CardDescription>
                Key financial metrics at a glance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Total Sales</TableCell>
                    <TableCell>$100,000</TableCell>
                    <TableCell className='text-green-600'>↑ 15%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Commissions</TableCell>
                    <TableCell>$20,000</TableCell>
                    <TableCell className='text-green-600'>↑ 10%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Transaction Fees</TableCell>
                    <TableCell>$5,000</TableCell>
                    <TableCell className='text-red-600'>↓ 5%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Net Revenue</TableCell>
                    <TableCell>$75,000</TableCell>
                    <TableCell className='text-green-600'>↑ 20%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className='flex justify-end space-x-2'>
            <Button>
              <Download className='mr-2 h-4 w-4' /> Export to PDF
            </Button>
            <Button>
              <Download className='mr-2 h-4 w-4' /> Export to Excel
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
