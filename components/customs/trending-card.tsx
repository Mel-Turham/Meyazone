'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Heart, X, ShoppingCart } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import formatPrice from '@/utils/formatPrice';

interface TrendingCardProps {
  imageUrl: string;
  title: string;
  price: number;
  rating: number;
  salesCount: number;
  description: string;
}

export function TrendingCard({
  imageUrl,
  title,
  price,
  rating,
  salesCount,
  description,
}: TrendingCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      className='relative hover:border-gray-200 duration-300 ease-in-out border rounded-lg shadow-md overflow-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className='absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center z-10'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <TrendingUp className='w-3 h-3 mr-1' />
        Trending
      </motion.div>
      <motion.button
        className='absolute z-10 top-2 right-2 bg-white rounded-full p-2 shadow-md'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Heart
          className={`w-5 h-5 ${
            isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
          }`}
        />
      </motion.button>
      <div className='relative h-48 w-full pt-5'>
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={300}
          className='w-full h-full object-contain'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold  mb-2 truncate'>{title}</h3>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-2xl font-bold '>
            {formatPrice(price, 'USD')}
          </span>
          <div className='flex items-center'>
            <Star className='w-5 h-5 text-yellow-400 fill-current' />
            <span className='ml-1 text-sm text-gray-600'>
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <p className='text-sm text-gray-500 mb-4'>{salesCount} sales</p>
        <Dialog>
          <DialogTrigger asChild>
            <motion.button
              className='w-full bg-myprimary  text-white py-2 rounded-md font-semibold'
              whileHover={{ backgroundColor: '#a54b17' }}
              whileTap={{ scale: 0.95 }}
            >
              Quick View
            </motion.button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className='fixed inset-0 ' />
            <DialogContent className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg p-6 w-full max-w-md'>
              <DialogTitle className='text-2xl font-bold mb-4'>
                {title}
              </DialogTitle>
              <DialogDescription className=' mb-4'>
                {description}
              </DialogDescription>
              <div className='flex justify-between items-center mb-4'>
                <span className='text-3xl font-bold'>
                  {formatPrice(price, 'USD')}
                </span>
                <div className='flex items-center'>
                  <Star className='w-6 h-6 text-yellow-400 fill-current' />
                  <span className='ml-1 text-lg '>
                    {rating.toFixed(1)} ({salesCount} sales)
                  </span>
                </div>
              </div>
              <motion.button
                className='w-full bg-green-600 text-white py-3 rounded-md font-semibold flex items-center justify-center'
                whileHover={{ backgroundColor: '#059669' }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className='w-5 h-5 mr-2' />
                Add to Cart
              </motion.button>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </motion.div>
  );
}
