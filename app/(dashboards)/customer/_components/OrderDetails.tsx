import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data for demonstration
const mockOrderDetails = {
  products: [
    { name: 'Wireless Headphones', quantity: 1, price: 99.99 },
    { name: 'Phone Case', quantity: 2, price: 19.99 },
  ],
  seller: {
    name: 'TechGadgets Inc.',
    email: 'support@techgadgets.com',
    phone: '+1 (555) 123-4567',
  },
  deliveryAddress: '123 Main St, Anytown, AN 12345',
  billingAddress: '456 Oak Rd, Somewhere, SW 67890',
  deliveryFee: 5.99,
  paymentMethod: 'Credit Card (Visa ending in 1234)',
  orderNotes: 'Please leave the package at the front door.',
};

export function OrderDetails({
  order,
  onClose,
}: {
  order: any;
  onClose: () => void;
}) {
  const subtotal = mockOrderDetails.products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const total = subtotal + mockOrderDetails.deliveryFee;

  return (
    <Dialog open={!!order} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl'>
        <DialogHeader>
          <DialogTitle>Order Details: {order?.orderId}</DialogTitle>
          <DialogDescription>Order placed on {order?.date}</DialogDescription>
        </DialogHeader>
        <div className='grid grid-cols-2 gap-4'>
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrderDetails.products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>
                        ${(product.price * product.quantity).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Delivery Fee:</span>
                  <span>${mockOrderDetails.deliveryFee.toFixed(2)}</span>
                </div>
                <div className='flex justify-between font-bold'>
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Status:</span>
                  <Badge>{order?.status}</Badge>
                </div>
                <div className='flex justify-between'>
                  <span>Payment Method:</span>
                  <span>{mockOrderDetails.paymentMethod}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Seller Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <p>
                  <strong>Name:</strong> {mockOrderDetails.seller.name}
                </p>
                <p>
                  <strong>Email:</strong> {mockOrderDetails.seller.email}
                </p>
                <p>
                  <strong>Phone:</strong> {mockOrderDetails.seller.phone}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div>
                  <strong>Delivery Address:</strong>
                  <p>{mockOrderDetails.deliveryAddress}</p>
                </div>
                <div>
                  <strong>Billing Address:</strong>
                  <p>{mockOrderDetails.billingAddress}</p>
                </div>
                <div>
                  <strong>Order Notes:</strong>
                  <p>{mockOrderDetails.orderNotes}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
