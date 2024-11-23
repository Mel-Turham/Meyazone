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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

// Mock data for demonstration
const mockReturnRequests = [
  {
    id: 1,
    orderId: 'ORD-001',
    productName: 'Wireless Headphones',
    status: 'Processing',
    refundMethod: 'Credit to account',
    estimatedRefundDate: '2023-05-20',
  },
  {
    id: 2,
    orderId: 'ORD-002',
    productName: 'Smart Watch',
    status: 'Approved',
    refundMethod: 'Bank refund',
    estimatedRefundDate: '2023-05-18',
  },
];

export function ReturnRequests() {
  const [returnRequests, setReturnRequests] = useState(mockReturnRequests);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    orderId: '',
    productName: '',
    reason: '',
    image: File,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev: any) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to submit the return request
    console.log('Return request submitted:', formData);
    toast({
      title: 'Return request submitted',
      description: 'Your return request has been submitted successfully.',
    });
    setReturnRequests((prev: any) => {
      return [...prev, { ...formData, id: Date.now() }];
    });
    setShowForm(false);
    setFormData({ orderId: '', productName: '', reason: '', image: File });
  };

  return (
    <div>
      <Button onClick={() => setShowForm(!showForm)} className='mb-4'>
        {showForm ? 'Cancel' : 'Initiate Return'}
      </Button>
      {showForm && (
        <form onSubmit={handleSubmit} className='space-y-4 mb-8'>
          <div>
            <Label htmlFor='orderId'>Order ID</Label>
            <Input
              id='orderId'
              name='orderId'
              value={formData.orderId}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor='productName'>Product Name</Label>
            <Input
              id='productName'
              name='productName'
              value={formData.productName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor='reason'>Reason for Return</Label>
            <Select
              name='reason'
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, reason: value }))
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder='Select a reason' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='damaged'>Damaged Product</SelectItem>
                <SelectItem value='wrong-item'>Wrong Item Received</SelectItem>
                <SelectItem value='not-as-described'>
                  Not as Described
                </SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {formData.reason === 'other' && (
            <div>
              <Label htmlFor='otherReason'>Please Specify</Label>
              <Textarea
                id='otherReason'
                name='otherReason'
                onChange={handleInputChange}
              />
            </div>
          )}
          <div>
            <Label htmlFor='image'>Upload Image (optional)</Label>
            <Input
              id='image'
              name='image'
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
            />
          </div>
          <Button type='submit'>Submit Return Request</Button>
        </form>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Refund Method</TableHead>
            <TableHead>Estimated Refund Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {returnRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.orderId}</TableCell>
              <TableCell>{request.productName}</TableCell>
              <TableCell>{request.status}</TableCell>
              <TableCell>{request.refundMethod}</TableCell>
              <TableCell>{request.estimatedRefundDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
