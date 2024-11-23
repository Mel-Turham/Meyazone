'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OrderAnalytics } from './OrderAnalytics';
import { OrderCharts } from './OrderCharts';
import { MyOrders } from './MyOrders';
import { PendingOrders } from './PendingOrders';
import { CanceledOrders } from './CanceledOrders';
import { ReturnRequests } from './ReturnRequests';

export function OrdersPage() {
  const [activeTab, setActiveTab] = useState('analytics');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className='py-8'>
      <h1 className='text-3xl font-bold mb-6'>Order Management Dashboard</h1>
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className='grid w-full grid-cols-5 mb-8'>
          <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          <TabsTrigger value='all'>All Orders</TabsTrigger>
          <TabsTrigger value='pending'>Pending</TabsTrigger>
          <TabsTrigger value='canceled'>Canceled</TabsTrigger>
          <TabsTrigger value='returns'>Returns</TabsTrigger>
        </TabsList>
        <TabsContent value='analytics'>
          <div className='space-y-8'>
            <OrderAnalytics />
            <OrderCharts />
          </div>
        </TabsContent>
        <TabsContent value='all'>
          <MyOrders />
        </TabsContent>
        <TabsContent value='pending'>
          <PendingOrders />
        </TabsContent>
        <TabsContent value='canceled'>
          <CanceledOrders />
        </TabsContent>
        <TabsContent value='returns'>
          <ReturnRequests />
        </TabsContent>
      </Tabs>
    </div>
  );
}
