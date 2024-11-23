'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  Package,
  ShoppingCart,
  CreditCard,
  Gift,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const orderStatuses = {
  'In Progress': 'bg-blue-500',
  'Pending Confirmation': 'bg-yellow-500',
  Completed: 'bg-green-500',
};

const recentOrders = [
  {
    id: 1,
    product: 'Wireless Earbuds',
    status: 'In Progress',
    date: '2023-11-15',
  },
  {
    id: 2,
    product: 'Smart Watch',
    status: 'Pending Confirmation',
    date: '2023-11-14',
  },
  { id: 3, product: 'Laptop Stand', status: 'Completed', date: '2023-11-13' },
];

const recommendations = [
  {
    id: 1,
    name: 'Bluetooth Speaker',
    price: '$49.99',
    image: '/product-1.png',
  },
  {
    id: 2,
    name: 'Ergonomic Mouse',
    price: '$29.99',
    image: '/product-2.png',
  },
  {
    id: 3,
    name: 'Portable Charger',
    price: '$39.99',
    image: '/product-3.png',
  },
];

const notifications = [
  { id: 1, message: 'Your order #1234 has been shipped!', type: 'order' },
  { id: 2, message: 'New 20% off sale on electronics!', type: 'promotion' },
  {
    id: 3,
    message: 'Your review for Wireless Earbuds has been posted.',
    type: 'review',
  },
];

const spendingData = [
  { month: 'Jan', amount: 120 },
  { month: 'Feb', amount: 150 },
  { month: 'Mar', amount: 200 },
  { month: 'Apr', amount: 180 },
  { month: 'May', amount: 250 },
  { month: 'Jun', amount: 300 },
];
const CustomerDashboadPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  return (
    <div className='w-full space-y-4'>
      <div className='space-y-3 max-w-xl'>
        <h2 className='text-4xl font-semibold'>Dashboard</h2>
        <p className='text-balance text-base text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsum
          quidem aspernatur repellat veniam laudantium quasi error cumque fugit
          provident!
        </p>
      </div>
      <Tabs defaultValue='activity' className='w-full'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='activity'>Recent Activity</TabsTrigger>
          <TabsTrigger value='stats'>Personal Stats</TabsTrigger>
          <TabsTrigger value='rewards'>Rewards</TabsTrigger>
        </TabsList>
        <TabsContent value='activity'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your latest orders and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {recentOrders.map((order) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className='flex items-center justify-between p-4 bg-muted rounded-lg'
                    >
                      <div className='flex items-center space-x-4'>
                        <Package className='h-6 w-6' />
                        <div>
                          <p className='font-medium'>{order.product}</p>
                          <p className='text-sm text-muted-foreground'>
                            {order.date}
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={
                          orderStatuses[
                            order.status as keyof typeof orderStatuses
                          ]
                        }
                      >
                        {order.status}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        <TabsContent value='stats'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Personal Statistics</CardTitle>
                <CardDescription>Your activity on the platform</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <Card>
                    <CardHeader className='flex-row justify-between items-center'>
                      <CardTitle>Total Orders</CardTitle>
                      <ShoppingCart className='h-5 w-5 text-muted-foreground' />
                    </CardHeader>
                    <CardContent className='flex items-center justify-between'>
                      <p>Your total orders </p>
                      <span className='text-2xl font-bold'>24</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex-row justify-between items-center'>
                      <CardTitle>Total Spent</CardTitle>
                      <CreditCard className='mr-2 h-5 w-5 text-muted-foreground' />
                    </CardHeader>
                    <CardContent className='flex items-center justify-between'>
                      <p>Your total Spent</p>
                      <span className='text-2xl font-bold'>$1,234.56</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className='flex-row justify-between items-center'>
                      <CardTitle>Loyalty Points</CardTitle>
                      <Gift className='mr-2 h-5 w-5 text-muted-foreground' />
                    </CardHeader>
                    <CardContent className='flex items-center justify-between'>
                      <p>Your Loyalty Points</p>
                      <div className='flex flex-col items-end'>
                        <Progress value={45} className='mt-2 h-2' />
                        <span className='text-2xl font-bold'>450</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className='mt-6'>
                  <h3 className='font-medium mb-2'>Monthly Spending</h3>
                  <div className='h-[200px]'>
                    <ResponsiveContainer width='100%' height='100%'>
                      <AreaChart data={spendingData}>
                        <XAxis dataKey='month' />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type='monotone'
                          dataKey='amount'
                          stroke='#8884d8'
                          fill='#8884d8'
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        <TabsContent value='rewards'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Loyalty Rewards</CardTitle>
                <CardDescription>
                  Your benefits and available discounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='p-4 bg-muted rounded-lg'>
                    <h3 className='font-medium mb-2'>Current Tier: Gold</h3>
                    <p className='text-sm text-muted-foreground'>
                      Enjoy 10% off on all purchases
                    </p>
                  </div>
                  <div className='p-4 bg-muted rounded-lg'>
                    <h3 className='font-medium mb-2'>Next Reward</h3>
                    <p className='text-sm text-muted-foreground'>
                      50 more points for free shipping on your next order
                    </p>
                    <Progress value={80} className='mt-2' />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant='outline' className='w-full'>
                  View All Rewards
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Personalized Recommendations
              </CardTitle>
              <Button variant='ghost' size='sm'>
                View all
                <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {recommendations.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className='flex items-center space-x-4'
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-16 h-16 rounded-md object-cover'
                    />
                    <div>
                      <p className='font-medium'>{item.name}</p>
                      <p className='text-sm text-muted-foreground'>
                        {item.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Notifications
              </CardTitle>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => toggleSection('notifications')}
              >
                {expandedSection === 'notifications' ? (
                  <ChevronUp className='h-4 w-4' />
                ) : (
                  <ChevronDown className='h-4 w-4' />
                )}
              </Button>
            </CardHeader>
            <AnimatePresence>
              {(expandedSection === 'notifications' ||
                expandedSection === null) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent>
                    <div className='space-y-4'>
                      {notifications.map((notification) => (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className='flex items-center space-x-4 p-2 bg-muted rounded-lg'
                        >
                          <Bell className='h-4 w-4 text-muted-foreground' />
                          <p className='text-sm'>{notification.message}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerDashboadPage;
