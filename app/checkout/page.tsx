// checkout page component

import BackButton from '@/components/customs/BackButton';
import CouponForm from '@/components/customs/CouponForm';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { buttonVariants, Button } from '@/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import MastercardIcon from '@/icons/mastercard';
import PayPalIcon from '@/icons/paypal';
import StripeIcon from '@/icons/stripe';
import VisaIcon from '@/icons/visa';
import { cn } from '@/lib/utils';
import { Accordion } from '@/components/ui/accordion';

import {
  Banknote,
  CreditCard,
  NotepadText,
  Percent,
  ShoppingBag,
  Truck,
  TruckIcon,
} from 'lucide-react';
import Link from 'next/link';
import ProductSummary from './product-summary';

const CheckoutPage = () => (
  <section className='min-h-screen py-8'>
    <div className='container'>
      <BackButton />
      <form className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* left form */}
        <div className='md:col-span-2'>
          <h1 className='scroll-m-20 mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Order Checkout
          </h1>

          <Card className='w-full mt-8'>
            <div className='space-y-10 w-full  py-8 px-4 '>
              {/* Personal Details */}
              <div className='flex gap-5 justify-between w-full'>
                <h2 className='w-3/12  font-semibold text-lg tracking-wide'>
                  Personal Details
                </h2>
                <div className='grid grid-cols-2 gap-4 w-9/12 '>
                  <div className='space-y-2'>
                    <Label>First Name</Label>
                    <Input type='text' placeholder='First name' required />
                  </div>
                  <div className='space-y-2'>
                    <Label>Last Name</Label>
                    <Input type='text' placeholder='Last name' required />
                  </div>
                  <div className='space-y-2'>
                    <Label>Your Email</Label>
                    <Input type='email' placeholder='Email' required />
                  </div>
                  <div className='space-y-2'>
                    <Label>Phone Number</Label>
                    <Input type='tel' placeholder='Number' required />
                  </div>
                </div>
              </div>

              {/* Shipping Details */}
              <div className='flex gap-5 justify-between w-full'>
                <h2 className='w-3/12  font-semibold text-lg tracking-wide'>
                  Shipping Details
                </h2>
                <div className='w-9/12'>
                  <h3 className='mb-8'>Shipping Address:</h3>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='space-y-2 col-span-3'>
                      <Label>Full Address</Label>
                      <Textarea
                        placeholder='Enter address'
                        className='w-full resize-none px-4 py-3'
                        rows={5}
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label>Zip-Code</Label>
                      <Input type='number' placeholder='zip-code' required />
                    </div>
                    <div className='space-y-2'>
                      <Label>City</Label>
                      <Input type='text' placeholder='Choose a city' />
                    </div>
                    <div className='space-y-2'>
                      <Label>Country</Label>
                      <Input type='text' placeholder='Choose a country' />
                    </div>
                  </div>
                </div>
              </div>
              {/* Payment Method */}
              <div className='flex gap-5 justify-between w-full'>
                <h2 className='w-3/12  font-semibold text-lg tracking-wide'>
                  Payment Method
                </h2>
                <div className='w-9/12'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem className='border-none' value='item-1'>
                      <AccordionTrigger className='pt-0'>
                        <div className='flex items-center justify-between  w-full bg-slate-800 px-4 py-3 rounded-sm no-underline'>
                          <span>PayPal</span>
                          <PayPalIcon className='h-auto w-8' />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='space-y-4'>
                        <p className='border-b pb-3'>
                          Safe Payment Online Credit card needed. PayPal account
                          is not necessary
                        </p>
                        <Input
                          className='email'
                          placeholder='Paypal email'
                          required
                        />
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='border-none' value='item-2'>
                      <AccordionTrigger className='pt-0'>
                        <div className='flex items-center justify-between  w-full bg-slate-800 px-4 py-3 rounded-sm no-underline'>
                          <span>Credit card</span>
                          <div className='flex items-center justify-center '>
                            <VisaIcon className='h-auto w-8' />
                            <StripeIcon className='h-auto w-8' />
                            <MastercardIcon className='h-auto w-8' />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='space-y-4'>
                        <p className='border-b pb-3'>
                          Safe Money Transfer using your bank account. Visa ,
                          Master Card ,Discover , American Express
                        </p>
                        <div className='grid grid-cols-2 gap-4'>
                          <div className='space-y-2 col-span-2'>
                            <Label>Card Number</Label>
                            <Input
                              type='number'
                              placeholder='0000 0000 0000 0000'
                              required
                            />
                          </div>
                          <div className='space-y-2'>
                            <Label>Expiry Date</Label>
                            <Input
                              type='number'
                              placeholder='dd-mm-yyyy'
                              required
                            />
                          </div>
                          <div className='space-y-2'>
                            <Label>CVC/CVV</Label>
                            <Input type='number' placeholder='000' required />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className='md:col-span-1 space-y-4'>
          {/* coupon code card */}
          <CouponForm />
          {/* Order Summary*/}
          <Card>
            <CardHeader className='px-0 pb-4 mb-6  border-b '>
              <CardTitle className='text-xl tracking-wide px-6'>
                Order Summary
              </CardTitle>
              <CardDescription className='px-6'>
                {/* description */}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className=' flex flex-col gap-4'>
              <ProductSummary />
              <div className='space-y-4'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-1 '>
                    <NotepadText className='w-5 h-5' strokeWidth={1} />
                    <span className='text-sm tracking-widest'>Subtotal:</span>
                  </div>
                  <p className='text-sm font-semibold'>$80.00</p>
                </div>
                <Separator />
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-1'>
                    <Banknote className='w-5 h-5' strokeWidth={1} />
                    <span className='text-sm tracking-widest'>Discount:</span>
                  </div>
                  <p className='text-sm font-semibold'> -$60.00</p>
                </div>
                <Separator />
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-1'>
                    <TruckIcon className='w-5 h-5' strokeWidth={1} />
                    <span className='text-sm tracking-widest'>Delivrery:</span>
                  </div>
                  <p className='text-sm font-semibold'>$20.00</p>
                </div>
                <Separator />
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-1'>
                    <Percent className='w-5 h-5' strokeWidth={1} />
                    <span className='text-sm tracking-widest'>
                      Estimated Tax (15.5%):
                    </span>
                  </div>
                  <p className='text-sm font-semibold'>$12.00</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex flex-col gap-4 border-t pt-4'>
              <div className='flex justify-between items-center w-full'>
                <span className='text-sm tracking-widest'>Total:</span>
                <p className='text-sm font-semibold'>$80.00</p>
              </div>
              <div className='w-full flex items-center gap-2 '>
                <Button size={'icon'} className='rounded-sm'>
                  <Truck />
                </Button>
                <p className='text-sm tracking-widest'>
                  Estimated Delivery by 25 April, 2024
                </p>
              </div>
            </CardFooter>
          </Card>
          <div className='w-full flex flex-row-reverse justify-between items-center'>
            <Button
              type='submit'
              aria-label='Checkout button'
              className={cn(
                buttonVariants({
                  variant: 'default',
                  size: 'default',
                }),
                'bg-green-600 text-white hover:bg-green-700'
              )}
            >
              <CreditCard className='w-6 h-6 mr-2' />
              Checkout order
            </Button>
            <Link
              href={'/cart'}
              aria-label='back to cart'
              className={cn(
                buttonVariants({
                  variant: 'default',
                  size: 'default',
                }),
                'bg-myprimary text-white hover:bg-myprimary/90'
              )}
            >
              <ShoppingBag className='w-6 h-6 mr-2' />
              Back to cart
            </Link>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default CheckoutPage;
