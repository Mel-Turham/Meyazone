import TabSinguelProduct from '@/components/customs/TabSinguelProduct';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import React from 'react';

const randomImages = ['/product-3.png', '/product-4.png', '/product-8.png'];

const Accessories = () => {
  return (
    <section className='py-8' id='accessories'>
      <div className='container'>
        <TabSinguelProduct activeLink='accessories' />
        <div className='pt-8 flex gap-5 mt-8'>
          <div className='w-8/12 flex flex-col gap-5'>
            <div className='grid grid-cols-3 gap-4'>
              {randomImages.map((img, index) => (
                <Card key={index} className='rounded'>
                  <CardHeader>
                    <CardDescription>Categorie</CardDescription>
                    <CardTitle className='text-sm font-semibold'>
                      Ultra Wireless S50 Headphones S50 with{' '}
                    </CardTitle>
                    <CardContent className='p-0'>
                      <article className='h-[160px] w-full relative'>
                        <Image
                          src={img}
                          alt=''
                          width={150}
                          height={300}
                          className='object-contain aspect-square w-[80%] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2'
                        />
                      </article>
                    </CardContent>
                  </CardHeader>
                  <CardFooter className='font-semibold text-lg'>
                    <span>$350.00</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center gap-3 mt-4'>
                <Checkbox id='1' className='accent-myprimary' />
                <Label htmlFor='1' className='font-bold'>
                  This product: Ultra Wireless S50 Headphones S50 with Bluetooth
                  - <span className='text-myprimary  ml-1'>$350.00</span>
                </Label>
              </div>
              <div className='flex items-center gap-3 mt-4'>
                <Checkbox id='2' className='checked:bg-myprimary' />
                <Label htmlFor='2' className='font-bold'>
                  Universal Headphones Case in Black -{' '}
                  <span className='text-myprimary  ml-1'>$159.00</span>
                </Label>
              </div>
              <div className='flex items-center gap-3 mt-4'>
                <Checkbox id='3' className='checked:bg-myprimary' />
                <Label htmlFor='3' className='font-bold'>
                  Headphones USB Wires -{' '}
                  <span className='text-myprimary  ml-1'>$50.00</span>
                </Label>
              </div>
            </div>
          </div>
          <div className='w-4/12 '>
            <Card className='rounded-sm'>
              <CardHeader>
                <CardTitle>$559.00</CardTitle>
                <CardDescription>for 3 item(s) </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size='lg'>Add all to card</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
