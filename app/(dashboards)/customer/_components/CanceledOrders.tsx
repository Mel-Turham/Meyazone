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
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for demonstration
const mockCanceledOrders = [
  {
    id: 6,
    orderId: 'ORD-006',
    date: '2023-05-08',
    total: 120.0,
    reason: 'Changed mind',
    canceledBy: 'Client',
    canceledAt: '2023-05-09 10:30 AM',
  },
  {
    id: 7,
    orderId: 'ORD-007',
    date: '2023-05-09',
    total: 90.0,
    reason: 'Out of stock',
    canceledBy: 'Seller',
    canceledAt: '2023-05-10 02:15 PM',
  },
];

export function CanceledOrders() {
  const [orders] = useState(mockCanceledOrders);
  const [filter, setFilter] = useState('all');

  const filteredOrders =
    filter === 'all'
      ? orders
      : orders.filter((order) => order.canceledBy.toLowerCase() === filter);

  return (
    <div>
      <div className='mb-4'>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Filter by' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Cancellations</SelectItem>
            <SelectItem value='client'>Canceled by Client</SelectItem>
            <SelectItem value='seller'>Canceled by Seller</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Canceled By</TableHead>
            <TableHead>Canceled At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>{order.reason}</TableCell>
              <TableCell>
                <Badge
                  className={
                    order.canceledBy === 'Client' ? 'bg-blue-500' : 'bg-red-500'
                  }
                >
                  {order.canceledBy}
                </Badge>
              </TableCell>
              <TableCell>{order.canceledAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
