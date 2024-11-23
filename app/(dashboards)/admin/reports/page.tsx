'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LineChart,
  BarChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  BarChart3,
  TrendingUp,
  PieChart as PieChartIcon,
  DollarSign,
  Download,
  Mail,
  CreditCard,
  Users,
  Activity,
} from 'lucide-react';
import { useTheme } from 'next-themes';

// Mock data (replace with actual API calls in a real application)
const performanceData = [
  { name: 'Jan', sales: 4000, returns: 400 },
  { name: 'Feb', sales: 3000, returns: 300 },
  { name: 'Mar', sales: 5000, returns: 500 },
  { name: 'Apr', sales: 4500, returns: 450 },
  { name: 'May', sales: 6000, returns: 600 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Books', value: 200 },
  { name: 'Home & Garden', value: 278 },
  { name: 'Sports', value: 189 },
];

const growthData = [
  { name: 'Q1', customers: 4000, products: 2400, amt: 2400 },
  { name: 'Q2', customers: 3000, products: 1398, amt: 2210 },
  { name: 'Q3', customers: 2000, products: 9800, amt: 2290 },
  { name: 'Q4', customers: 2780, products: 3908, amt: 2000 },
];

const financialData = [
  { name: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { name: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { name: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { name: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
  { name: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
];

export default function AnalyticsDashboard() {
  const { theme } = useTheme();

  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center md:items-start md:gap-4 md:flex-col'>
        <div className='space-y-1'>
          <h2 className='text-3xl font-medium'>Reports and Analytics</h2>
          <p className='text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            officiis!
          </p>
        </div>
        <div className='flex space-x-4'>
          <DatePickerWithRange />
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Export' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='pdf'>Export as PDF</SelectItem>
              <SelectItem value='excel'>Export as Excel</SelectItem>
              <SelectItem value='csv'>Export as CSV</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Mail className='mr-2 h-4 w-4' /> Schedule Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue='performance' className='space-y-4'>
        <TabsList className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          <TabsTrigger value='performance' className='flex items-center gap-2'>
            <BarChart3 className='h-4 w-4' />
            Performance
          </TabsTrigger>
          <TabsTrigger value='trends' className='flex items-center gap-2'>
            <TrendingUp className='h-4 w-4' />
            Trends
          </TabsTrigger>
          <TabsTrigger value='growth' className='flex items-center gap-2'>
            <PieChartIcon className='h-4 w-4' />
            Growth
          </TabsTrigger>
          <TabsTrigger value='financial' className='flex items-center gap-2'>
            <DollarSign className='h-4 w-4' />
            Financial
          </TabsTrigger>
        </TabsList>

        <TabsContent value='performance'>
          <div className='grid gap-4 my-6 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Revenue
                </CardTitle>
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
                <CardTitle className='text-sm font-medium'>
                  Active Users
                </CardTitle>
                <Users className='h-4 w-4 text-muted-foreground' />
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
                <CardTitle className='text-sm font-medium'>Sales</CardTitle>
                <CreditCard className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+12,234</div>
                <p className='text-xs text-muted-foreground'>
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Active Now
                </CardTitle>
                <Activity className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+573</div>
                <p className='text-xs text-muted-foreground'>
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
            <Card className='col-span-4'>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className='pl-2'>
                <ResponsiveContainer width='100%' height={350}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='sales' fill='#8884d8' />
                    <Bar dataKey='returns' fill='#82ca9d' />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className='col-span-3'>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>
                  Top 5 best-selling products this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='w-[100px]'>Product</TableHead>
                      <TableHead>Sales</TableHead>
                      <TableHead>Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className='font-medium'>Product A</TableCell>
                      <TableCell>1,234</TableCell>
                      <TableCell>$12,340</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Product B</TableCell>
                      <TableCell>1,100</TableCell>
                      <TableCell>$11,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Product C</TableCell>
                      <TableCell>1,050</TableCell>
                      <TableCell>$10,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Product D</TableCell>
                      <TableCell>980</TableCell>
                      <TableCell>$9,800</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Product E</TableCell>
                      <TableCell>910</TableCell>
                      <TableCell>$9,100</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='trends'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='col-span-2'>
              <CardHeader>
                <CardTitle>Purchase Trends</CardTitle>
                <CardDescription>
                  Visualize popular purchasing days and hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width='100%' height={350}>
                  <LineChart data={performanceData}>
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
                        backgroundColor:
                          theme === 'dark' ? '#1f2937' : '#ffffff',
                        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                        color: theme === 'dark' ? '#ffffff' : '#000000',
                      }}
                    />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='sales' stroke='#8884d8' />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Category Performance</CardTitle>
                <CardDescription>Highest-grossing categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width='100%' height={350}>
                  <PieChart>
                    <Pie
                      dataKey='value'
                      data={categoryData}
                      fill='#8884d8'
                      label
                    >
                      {categoryData.map((item, index) => (
                        <Cell
                          key={`cell-${index + item.value}`}
                          fill={
                            [
                              '#0088FE',
                              '#00C49F',
                              '#FFBB28',
                              '#FF8042',
                              '#EF7C1A',
                            ][index % categoryData.length]
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <Card className='mt-4'>
            <CardHeader>
              <CardTitle>Customer Behavior Insights</CardTitle>
              <CardDescription>
                Track patterns like repeat purchases and cart abandonment rates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div>
                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Repeat Purchase Rate
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        65% of customers made repeat purchases
                      </p>
                    </div>
                    <div className='font-bold'>65%</div>
                  </div>
                  <Progress value={65} className='mt-2' />
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Cart Abandonment Rate
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        23% of carts were abandoned before checkout
                      </p>
                    </div>
                    <div className='font-bold'>23%</div>
                  </div>
                  <Progress value={23} className='mt-2' />
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Average Order Value
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        $85 per order on average
                      </p>
                    </div>
                    <div className='font-bold'>$85</div>
                  </div>
                  <Progress value={85} max={150} className='mt-2' />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Growth tab */}
        <TabsContent value='growth'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='col-span-2'>
              <CardHeader>
                <CardTitle>Customer and Product Growth</CardTitle>
                <CardDescription>
                  Monthly growth in customers and product listings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width='100%' height={350}>
                  <LineChart data={growthData}>
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
                        backgroundColor:
                          theme === 'dark' ? '#1f2937' : '#ffffff',
                        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                        color: theme === 'dark' ? '#ffffff' : '#000000',
                      }}
                    />
                    <Legend />
                    <Line
                      type='monotone'
                      dataKey='customers'
                      stroke='#8884d8'
                    />
                    <Line type='monotone' dataKey='products' stroke='#82ca9d' />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seller Growth Metrics</CardTitle>
                <CardDescription>
                  Growth rates in registered and active sellers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <div className='flex-1 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        New Sellers
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        This month
                      </p>
                    </div>
                    <div className='text-2xl font-bold'>+245</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex-1 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Active Sellers
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Increase from last month
                      </p>
                    </div>
                    <div className='text-2xl font-bold'>+12%</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex-1 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Top Seller Revenue
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Highest earning seller
                      </p>
                    </div>
                    <div className='text-2xl font-bold'>$52,489</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className='mt-4'>
            <CardHeader>
              <CardTitle>Transaction Volume Growth</CardTitle>
              <CardDescription>
                Total transactions and average transaction value over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={350}>
                <BarChart data={growthData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey='customers'
                    fill='#8884d8'
                    name='Total Transactions'
                  />
                  <Bar
                    dataKey='products'
                    fill='#82ca9d'
                    name='Avg Transaction Value'
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* financial tab */}
        <TabsContent value='financial'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='col-span-2'>
              <CardHeader>
                <CardTitle>Revenue and Profit</CardTitle>
                <CardDescription>
                  Monthly revenue, expenses, and profit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width='100%' height={350}>
                  <LineChart data={financialData}>
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
                        backgroundColor:
                          theme === 'dark' ? '#1f2937' : '#ffffff',
                        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                        color: theme === 'dark' ? '#ffffff' : '#000000',
                      }}
                    />
                    <Legend />
                    <Line type='monotone' dataKey='revenue' stroke='#8884d8' />
                    <Line type='monotone' dataKey='expenses' stroke='#82ca9d' />
                    <Line type='monotone' dataKey='profit' stroke='#ffc658' />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Financial Summary</CardTitle>
                <CardDescription>Key financial metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <div className='flex-1 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Total Revenue
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        This month
                      </p>
                    </div>
                    <div className='text-2xl font-bold'>$124,750</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex-1 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Total Expenses
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        This month
                      </p>
                    </div>
                    <div className='text-2xl font-bold'>$62,375</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex-1 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Net Profit
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        This month
                      </p>
                    </div>
                    <div className='text-2xl font-bold'>$62,375</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex-1 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Profit Margin
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        This month
                      </p>
                    </div>
                    <div className='text-2xl font-bold'>50%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className='mt-4'>
            <CardHeader>
              <CardTitle>Revenue by Category</CardTitle>
              <CardDescription>
                Distribution of revenue across product categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={350}>
                <PieChart>
                  <Pie dataKey='value' data={categoryData} label>
                    {categoryData.map((item, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          [
                            '#0088FE',
                            '#00C49F',
                            '#FFBB28',
                            '#FF8042',
                            '#EF7C1A',
                          ][index % 5]
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',
                      borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                      color: theme === 'dark' ? '#ffffff' : '#000000',
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Customizable Dashboard</CardTitle>
          <CardDescription>
            Drag and drop widgets to customize your view
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {['Revenue', 'Users', 'Products', 'Orders'].map((widget) => (
              <Card key={widget} className='p-4 border-2 border-dashed'>
                <p className='text-sm font-medium'>{widget} Widget</p>
                <p className='text-xs text-muted-foreground'>
                  Drag to reposition
                </p>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className='flex justify-between items-center'>
        <Button variant='outline'>
          <Download className='mr-2 h-4 w-4' />
          Export All Data
        </Button>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Set Alert' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='sales'>Sales Drop Alert</SelectItem>
            <SelectItem value='users'>User Activity Alert</SelectItem>
            <SelectItem value='revenue'>Revenue Milestone Alert</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
