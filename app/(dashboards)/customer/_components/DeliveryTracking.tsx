'use client';

import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MapPin, Package, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data for demonstration
const mockTrackingInfo = {
  status: 'In Transit',
  location: 'Distribution Center, New York',
  estimatedDelivery: '2023-05-15',
  updates: [
    {
      date: '2023-05-12',
      time: '10:00 AM',
      description: 'Package picked up',
      icon: Package,
    },
    {
      date: '2023-05-13',
      time: '2:30 PM',
      description: 'Arrived at sorting facility',
      icon: MapPin,
    },
    {
      date: '2023-05-14',
      time: '9:15 AM',
      description: 'Departed sorting facility',
      icon: Truck,
    },
  ],
};

export function DeliveryTracking({
  order,
  onClose,
}: {
  order: any;
  onClose: () => void;
}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key='AIzaSyC7Qj8Qe67RUAltqpnqXUz7MrDrc99L1xo'&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: { lat: 40.7128, lng: -74.006 }, // New York coordinates
        zoom: 8,
      });

      new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.006 },
        map: map,
        title: 'Package Location',
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Dialog open={!!order} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl'>
        <DialogHeader>
          <DialogTitle>Tracking Information: {order?.orderId}</DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-2 gap-4'>
          <Card>
            <CardHeader>
              <CardTitle>Current Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex items-center'>
                  <Package className='mr-2' />
                  <span className='font-semibold'>
                    {mockTrackingInfo.status}
                  </span>
                </div>
                <div className='flex items-center'>
                  <MapPin className='mr-2' />
                  <span>{mockTrackingInfo.location}</span>
                </div>
                <div>
                  <Badge variant='outline'>
                    Estimated Delivery: {mockTrackingInfo.estimatedDelivery}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Package Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div id='map' style={{ height: '200px', width: '100%' }}></div>
            </CardContent>
          </Card>
          <Card className='col-span-2'>
            <CardHeader>
              <CardTitle>Tracking Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className='relative border-l border-gray-200 dark:border-gray-700'>
                {mockTrackingInfo.updates.map((update, index) => (
                  <li key={index} className='mb-10 ml-6'>
                    <span className='absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                      <update.icon className='w-5 h-5 text-blue-800 dark:text-blue-300' />
                    </span>
                    <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                      {update.description}
                      {index === 0 && <Badge className='ml-3'>Latest</Badge>}
                    </h3>
                    <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                      {update.date} at {update.time}
                    </time>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
