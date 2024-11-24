'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Slider } from '@/components/ui/slider';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { toast } from '@/hooks/use-toast';

// Mock data for price history
const generatePriceHistory = () => {
  const data = [];
  let price = 100;
  for (let i = 0; i < 30; i++) {
    price += Math.random() * 10 - 5;
    data.push({ day: i + 1, price: Math.max(0, price) });
  }
  return data;
};

const priceHistoryData = generatePriceHistory();

// Mock data for notifications
const initialNotifications = [
  { id: 1, product: 'Product 1', oldPrice: 29.99, newPrice: 24.99 },
  { id: 2, product: 'Product 2', oldPrice: 49.99, newPrice: 39.99 },
];

export function PriceNotifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [enableNotifications, setEnableNotifications] = useState(true);
  const [notificationFrequency, setNotificationFrequency] = useState('daily');
  const [priceDropThreshold, setPriceDropThreshold] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        product: `Product ${Math.floor(Math.random() * 100)}`,
        oldPrice: Math.random() * 100 + 50,
        newPrice: Math.random() * 50 + 25,
      };
      setNotifications((prev) => [newNotification, ...prev].slice(0, 5));
      toast({
        title: 'New price drop!',
        description: `${
          newNotification.product
        } is now $${newNotification.newPrice.toFixed(2)}`,
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handlePriceDropThresholdChange = (value: number[]) => {
    setPriceDropThreshold(value[0]);
    toast({
      title: 'Price drop threshold updated',
      description: `You'll be notified of price drops greater than ${value[0]}%`,
    });
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Price Notifications</h2>
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex items-center justify-between mb-4'>
            <span>Enable price alerts</span>
            <Switch
              checked={enableNotifications}
              onCheckedChange={(checked) => {
                setEnableNotifications(checked);
                toast({
                  title: checked
                    ? 'Price alerts enabled'
                    : 'Price alerts disabled',
                  description: checked
                    ? 'You will receive price drop notifications.'
                    : 'You will not receive price drop notifications.',
                });
              }}
            />
          </div>
          <div className='flex items-center justify-between mb-4'>
            <span>Notification frequency</span>
            <Select
              value={notificationFrequency}
              onValueChange={(value) => {
                setNotificationFrequency(value);
                toast({
                  title: 'Notification frequency updated',
                  description: `You'll receive notifications ${value}.`,
                });
              }}
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select frequency' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='immediate'>Immediate</SelectItem>
                <SelectItem value='daily'>Daily</SelectItem>
                <SelectItem value='weekly'>Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='mb-4'>
            <span>Price drop threshold</span>
            <Slider
              value={[priceDropThreshold]}
              onValueChange={handlePriceDropThresholdChange}
              max={50}
              step={1}
              className='mt-2'
            />
            <span className='text-sm text-gray-500'>
              Notify me of price drops greater than {priceDropThreshold}%
            </span>
          </div>
        </CardContent>
      </Card>
      <h3 className='text-xl font-semibold mb-4'>Recent Price Drops</h3>
      <ScrollArea className='h-[400px]'>
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className='mb-4'>
                <CardHeader>
                  <CardTitle>{notification.product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex items-center'>
                    <ArrowDown className='text-green-500 mr-2' />
                    <p className='text-green-500 font-bold'>
                      Price dropped by{' '}
                      {(
                        ((notification.oldPrice - notification.newPrice) /
                          notification.oldPrice) *
                        100
                      ).toFixed(2)}
                      %
                    </p>
                  </div>
                  <p>Old Price: ${notification.oldPrice.toFixed(2)}</p>
                  <p className='text-green-500 font-bold'>
                    New Price: ${notification.newPrice.toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant='outline'>View Product</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </ScrollArea>
      <h3 className='text-xl font-semibold my-4'>Price History</h3>
      <Card>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={priceHistoryData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='day' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='price'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
