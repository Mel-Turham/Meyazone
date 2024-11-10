import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  Banknote,
  CreditCard,
  Delete,
  Heart,
  Minus,
  NotepadText,
  Percent,
  Plus,
  ShoppingBag,
  Trash,
  Truck,
  TruckIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CartPage = () => {
  return (
    <section className='min-h-screen py-8'>
      <div className='container space-y-5'>
        {/* Link to previous page */}
        <Link
          href={'/'}
          className=' group flex items-center gap-1 dark:bg-slate-900 dark:hover:bg-slate-900/50 transition-all duration-300 ease-in-out cursor-pointer w-fit px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300'
        >
          <ArrowLeft className='w-6 h-6 group-hover:-translate-x-1 transition-all duration-300 ease-in-out' />
          <span className='text-sm font-semibold tracking-wide'>Back</span>
        </Link>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='md:col-span-2'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              My order cart
            </h1>
            <div className='mt-8 w-full rounded-lg bg-myprimary text-white p-4 text-sm tracking-wider flex items-center justify-between '>
              <p> There are 4 product in your cart </p>
              <Button variant={'link'}>Clear cart</Button>
            </div>

            {/* cart list  */}
            <div className='grid grid-cols-1 gap-4 mt-8'>
              {Array.from({ length: 4 }, (_, index) => (
                <Card key={index}>
                  <CardHeader className=' flex-row  items-center justify-between '>
                    <div className=' flex gap-4'>
                      {/* image product*/}
                      <div className=' w-[90px] h-[90px] dark:bg-slate-900 bg-[#EEF2F7] rounded-sm'>
                        <Image
                          src={'/product-1.png'}
                          alt='product'
                          width={100}
                          height={100}
                          className='w-full h-full object-contain'
                          loading='lazy'
                        />
                      </div>
                      {/* description , name , quantity */}
                      <div className='space-y-4'>
                        <h3 className=' text-lg tracking-wider truncate '>
                          Dell XPS 13
                        </h3>
                        <div className='flex items-center gap-6 text-sm'>
                          <span>Color: Red</span>
                          <span>Size: M</span>
                        </div>
                        {/* buttons manage quantity */}

                        <div className='flex items-center justify-between w-[120px] gap-2 border rounded-full h-8 px-3 py-4'>
                          <Button
                            size={'icon'}
                            variant='outline'
                            className='w-5 h-5 rounded-full'
                          >
                            <Minus />
                          </Button>
                          <span className='text-sm'>1</span>
                          <Button
                            size={'icon'}
                            variant='outline'
                            className='w-5 h-5 rounded-full'
                          >
                            <Plus />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* item price and taxes */}
                    <div className='flex h-full self-start flex-col gap-2'>
                      <span className='text-lg font-semibold'>
                        Product price{' '}
                      </span>
                      <p className='text-lg font-bold'>
                        $80.00/
                        <span
                          className='
                      text-xs text-slate-500 font-medium ml-2'
                        >
                          3.00 Tex
                        </span>
                      </p>
                    </div>
                  </CardHeader>
                  <CardFooter className='flex items-center justify-between pb-4'>
                    <div className='flex items-center gap-2'>
                      <Button size={'sm'} variant='destructive'>
                        <Trash className='w-4 h-4 mr-2' />
                        <span className='text-sm tracking-tight'>Remove</span>
                      </Button>
                      <Button size={'sm'} variant={'outline'}>
                        <Heart className='w-4 h-4 mr-2' />
                        <span className='text-sm tracking-tight'>
                          Add Wishlist
                        </span>
                      </Button>
                    </div>

                    <span className='text-base font-semibold'>
                      Total: $80.00
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className='md:col-span-1 space-y-4'>
            {/* coupon code card */}
            <div className='rounded-lg bg-myprimary p-4 text-sm tracking-wider w-full'>
              <h3 className='text-lg font-bold text-white'>Coupon code</h3>
              <p className='mt-4 text-white tracking-wide text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                molestias.
              </p>
              <div className='mt-4 grid grid-cols-3 gap-3'>
                <Input
                  className='col-span-2'
                  type='text'
                  placeholder='Coupon code'
                />
                <Button className=' w-full col-span-1'>Apply</Button>
              </div>
            </div>
            {/* summary card */}
            <Card>
              <CardHeader className='px-0 pb-4 mb-6  border-b '>
                <CardTitle className='text-xl tracking-wide px-6'>
                  Summary
                </CardTitle>
                <CardDescription className='px-6'>
                  {/* description */}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent className=' flex flex-col gap-4'>
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
            <div className='w-full flex items-center gap-4'>
              <Link
                href={'/checkout'}
                aria-label='Checkout'
                className={cn(
                  buttonVariants({
                    variant: 'default',
                    size: 'default',
                  }),
                  'bg-green-600 text-white hover:bg-green-700'
                )}
              >
                <CreditCard className='w-6 h-6 mr-2' />
                Checkout
              </Link>
              <Link
                href={'/shop'}
                aria-label='Continue Shopping'
                className={cn(
                  buttonVariants({
                    variant: 'default',
                    size: 'default',
                  }),
                  'bg-myprimary text-white hover:bg-myprimary/90'
                )}
              >
                <ShoppingBag className='w-6 h-6 mr-2' />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
