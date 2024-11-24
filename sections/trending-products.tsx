'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { trendingItems } from '@/db';
import { TrendingCard } from '@/components/customs/trending-card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TrendingProducts = () => {
  const [sortBy, setSortBy] = useState('popularity');

  const sortedItems = [...trendingItems].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.salesCount - a.salesCount; // default: popularity
  });
  return (
    <div className='py-8 container mb-6'>
      <motion.h2
        className='text-4xl text-center font-bold mb-6'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Trending Products
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-sm text-balance text-center mb-7 max-w-3xl mx-auto'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        corrupti repellat quasi, deleniti ratione repellendus, velit explicabo
        error, voluptatem voluptates quam consequuntur atque libero iusto sed
        incidunt vel doloremque aspernatur corporis praesentium? Eos, numquam
        voluptatem consequatur tempora odio porro facere!
      </motion.p>
      <div className='mb-6'>
        <Select
          value={sortBy}
          // onChange={(e) => setSortBy(e.target.value)}
          onValueChange={setSortBy}
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Sort by' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='popularity'>Popularity</SelectItem>
              <SelectItem value='price'>Price</SelectItem>
              <SelectItem value='rating'>Rating</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {sortedItems.map((item, index) => (
          <TrendingCard key={index} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

export default TrendingProducts;
