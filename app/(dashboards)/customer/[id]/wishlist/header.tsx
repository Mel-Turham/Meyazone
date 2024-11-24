'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Notification = {
  id: number;
  message: string;
  type: 'info' | 'warning' | 'success';
};

export function DashboardHeader() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification: Notification = {
        id: Date.now(),
        message: `New notification ${Math.floor(Math.random() * 100)}`,
        type: ['info', 'warning', 'success'][Math.floor(Math.random() * 3)] as
          | 'info'
          | 'warning'
          | 'success',
      };
      setNotifications((prev) => [...prev, newNotification].slice(-5));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex justify-between items-center mb-8 relative'
    >
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold'>My wishlist </h1>

        <p className='text-muted-foreground text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Badge
          variant='secondary'
          className='text-sm py-1 px-2 cursor-pointer'
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <Bell className='w-4 h-4 mr-1' />
          {notifications.length} New Notifications
        </Badge>
      </motion.div>
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='absolute right-0 top-12 w-80 z-[5]'
          >
            <Card>
              <CardContent className='p-4'>
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className={`flex justify-between items-center mb-2 p-2 rounded ${
                      notification.type === 'info'
                        ? 'bg-blue-100'
                        : notification.type === 'warning'
                        ? 'bg-yellow-100'
                        : 'bg-green-100'
                    }`}
                  >
                    <span>{notification.message}</span>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() => removeNotification(notification.id)}
                    >
                      <X className='w-4 h-4' />
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
