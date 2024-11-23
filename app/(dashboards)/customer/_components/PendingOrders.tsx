'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

// Mock data for demonstration
const mockPendingOrders = [
  {
    id: 4,
    orderId: 'ORD-004',
    date: '2023-05-12',
    total: 100.0,
    status: 'Pending Confirmation',
  },
  {
    id: 5,
    orderId: 'ORD-005',
    date: '2023-05-13',
    total: 85.0,
    status: 'Pending Payment',
  },
  {
    id: 6,
    orderId: 'ORD-006',
    date: '2023-05-14',
    total: 150.0,
    status: 'Pending Shipment',
  },
];

export function PendingOrders() {
  const [orders, setOrders] = useState(mockPendingOrders);
  const [cancelOrderId, setCancelOrderId] = useState<number | null>(null);

  const handleCancelOrder = (orderId: number) => {
    setCancelOrderId(orderId);
  };

  const confirmCancelOrder = () => {
    if (cancelOrderId) {
      setOrders(orders.filter((order) => order.id !== cancelOrderId));
      toast({
        title: 'Order Canceled',
        description: `Order with ID ${cancelOrderId} has been canceled.`,
      });
      setCancelOrderId(null);
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>
                <Badge variant='outline'>{order.status}</Badge>
              </TableCell>
              <TableCell>
                <Button
                  variant='destructive'
                  size='sm'
                  onClick={() => handleCancelOrder(order.id)}
                >
                  Cancel Order
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AlertDialog
        open={!!cancelOrderId}
        onOpenChange={() => setCancelOrderId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to cancel this order?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The order will be permanently
              canceled.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmCancelOrder}>
              Confirm Cancellation
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
