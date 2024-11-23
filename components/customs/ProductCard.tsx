'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Info, BarChart2, Star, Heart } from 'lucide-react';
import {
  Button,
  buttonVariants as variantButtons,
} from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductInterface } from '@/utils/getProducts';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import VendorProfil from './vendor-profil';
import formatPrice from '@/utils/formatPrice';
import { useCurrencyStore } from '@/store/useCurrencyStore';

interface ProductOrientation {
  orientation: 'horizontal' | 'vertical';
}

export default function ProductCard({
  id,
  orientation = 'horizontal',
  name,
  price,
  oldPrice,
  image,
  details,
}: ProductInterface & ProductOrientation) {
  const [isHovered, setIsHovered] = useState(false);
  const { currency } = useCurrencyStore();

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      className={` overflow-hidden group h-full`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={` overflow-hidden group-hover:border h-full rouded-non w-full group-hover:dark:border-slate-200 group-hover:border-myprimary relative  transition-all duration-300 ease-in-out ${
          orientation === 'horizontal' ? 'md:flex' : 'flex flex-col'
        }`}
      >
        <VendorProfil />
        <div
          className={`relative py-3 ${
            orientation === 'horizontal' ? 'md:w-1/2' : 'w-full'
          } ${orientation === 'vertical' ? 'h-48 sm:h-1/2' : 'h-full'}`}
        >
          <Image
            src={image}
            alt={name}
            width={200}
            height={100}
            loading='lazy'
            className='object-contain w-[300px] h-[200px]'
          />
          {price !== undefined &&
            oldPrice !== undefined &&
            price < oldPrice && (
              <Badge className='absolute top-2 left-2 bg-green-600 text-white'>
                Sale
              </Badge>
            )}
        </div>
        <CardContent
          className={`pb-0 p-4 flex flex-col justify-between ${
            orientation === 'horizontal' ? 'md:w-1/2' : 'w-full flex-grow'
          }`}
        >
          <div className='h-full'>
            <h2 className='font-semibold mb-2 truncate'>{name}</h2>
            <p className='text-sm text-pretty mb-2 line-clamp-2'>{details}</p>
            <div className='flex items-center gap-0.5 mb-3 flex-wrap'>
              {price !== undefined ? (
                <>
                  <span className='text-sm font-semibold truncate'>
                    {formatPrice(price, currency)}
                  </span>
                  {oldPrice && (
                    <span className='text-xs ml-1 text-red-500 line-through'>
                      {formatPrice(oldPrice, currency)}
                    </span>
                  )}
                </>
              ) : (
                <span className='text-2xl font-bold'>Price not available</span>
              )}
            </div>

            <div className='flex items-center flex-wrap gap-1'>
              <div className='flex items-center'>
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className='w-4 h-4'
                    fill='#ef7c1a'
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className='capitalize inline-block text-xs text-nowrap'>
                reviews (32)
              </span>
            </div>
          </div>
          <AnimatePresence mode='popLayout'>
            {isHovered && (
              <motion.div
                className={`flex flex-col justify-center items-start absolute  px-4  gap-2 left-0 ${
                  orientation === 'vertical'
                    ? 'bottom-0 w-full h-[55%] '
                    : 'w-1/2 top-0 h-full'
                }`}
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div variants={buttonVariants}>
                        <Link
                          href={`/product/${id}`}
                          className={`${variantButtons({
                            variant: 'outline',
                            size: 'icon',
                            className: 'rounded-full',
                          })} rounded-full`}
                        >
                          <Info className=' h-5 w-5' strokeWidth={1.5} />
                        </Link>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent align='center' side='left'>
                      <p>Details</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div variants={buttonVariants}>
                        <Button
                          className='rounded-full'
                          variant='default'
                          size={'icon'}
                        >
                          <ShoppingCart
                            className=' h-5 w-5'
                            strokeWidth={1.5}
                          />
                        </Button>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent align='center' side='left'>
                      <p>Add to cart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div variants={buttonVariants}>
                        <Button
                          size={'icon'}
                          variant='secondary'
                          className='rounded-full'
                        >
                          <BarChart2 className=' h-5 w-5' strokeWidth={1.5} />
                        </Button>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent align='center' side='left'>
                      <p>Compare</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div variants={buttonVariants}>
                        <Button
                          size={'icon'}
                          variant='destructive'
                          className='rounded-full'
                        >
                          <Heart className='h-5 w-5' strokeWidth={1.5} />
                        </Button>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent align='center' side='left'>
                      <p>Wishlist</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
