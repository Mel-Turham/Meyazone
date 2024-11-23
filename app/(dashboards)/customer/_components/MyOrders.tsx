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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { OrderDetails } from './OrderDetails';
import { DeliveryTracking } from './DeliveryTracking';
import { toast } from '@/hooks/use-toast';

// Mock data for demonstration
const mockOrders = [
  {
    id: 1,
    orderId: 'ORD-001',
    date: '2023-05-01',
    total: 150.0,
    status: 'Delivered',
  },
  {
    id: 2,
    orderId: 'ORD-002',
    date: '2023-05-05',
    total: 75.5,
    status: 'Shipped',
  },
  {
    id: 3,
    orderId: 'ORD-003',
    date: '2023-05-10',
    total: 200.0,
    status: 'In Progress',
  },
  {
    id: 4,
    orderId: 'ORD-004',
    date: '2023-05-15',
    total: 100.0,
    status: 'Delivered',
  },
  {
    id: 5,
    orderId: 'ORD-005',
    date: '2023-05-20',
    total: 300.0,
    status: 'Shipped',
  },
];

type OrderKey = 'id' | 'orderId' | 'date' | 'total' | 'status';

interface Order {
  id: number;
  orderId: string;
  date: string;
  total: number;
  status: string;
}

interface SortConfig {
  key: OrderKey | null; // Peut être null si aucune clé n'est choisie
  direction: 'ascending' | 'descending';
}

export function MyOrders() {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [trackingOrder, setTrackingOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState<{
    key: OrderKey | null;
    direction: string;
  }>({ key: null, direction: 'ascending' });

  type Status = 'Delivered' | 'Shipped' | 'In Progress';

  const handleViewDetails = (order: any) => {
    setSelectedOrder(order);
  };

  const handleTrackDelivery = (order: any) => {
    setTrackingOrder(order);
    toast({
      title: 'Delivery Tracking',
      description: 'Click on the map to track the delivery.',
    });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusFilter = (value: string) => {
    setStatusFilter(value);
  };

  const handleSort = (key: OrderKey) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const filteredOrders = orders
    .filter((order) =>
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((order) =>
      statusFilter === 'all' ? true : order.status === statusFilter
    );

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  const getStatusBadge = (status: Status) => {
    const colors: Record<Status, string> = {
      Delivered: 'bg-green-500',
      Shipped: 'bg-blue-500',
      'In Progress': 'bg-yellow-500',
    };
    return <Badge className={`${colors[status]} text-white`}>{status}</Badge>;
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <Input
          placeholder='Search orders...'
          value={searchTerm}
          onChange={handleSearch}
          className='max-w-sm'
        />
        <Select value={statusFilter} onValueChange={handleStatusFilter}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Filter by status' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Statuses</SelectItem>
            <SelectItem value='Delivered'>Delivered</SelectItem>
            <SelectItem value='Shipped'>Shipped</SelectItem>
            <SelectItem value='In Progress'>In Progress</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className='cursor-pointer'
              onClick={() => handleSort('orderId')}
            >
              Order ID
            </TableHead>
            <TableHead
              className='cursor-pointer'
              onClick={() => handleSort('date')}
            >
              Date
            </TableHead>
            <TableHead
              className='cursor-pointer'
              onClick={() => handleSort('total')}
            >
              Total
            </TableHead>
            <TableHead
              className='cursor-pointer'
              onClick={() => handleSort('status')}
            >
              Status
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>{getStatusBadge(order.status as Status)}</TableCell>
              <TableCell>
                <Button
                  variant='outline'
                  size='sm'
                  className='mr-2'
                  onClick={() => handleViewDetails(order)}
                >
                  View Details
                </Button>
                {order.status === 'Shipped' && (
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => handleTrackDelivery(order)}
                  >
                    Track Delivery
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
      {trackingOrder && (
        <DeliveryTracking
          order={trackingOrder}
          onClose={() => setTrackingOrder(null)}
        />
      )}
    </div>
  );
}
