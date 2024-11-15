'use client';
import { motion } from 'framer-motion';
import { ShoppingCart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  const popularCategories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Toys',
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-primary/20 to-background flex flex-col items-center justify-center p-4'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ShoppingCart className='w-32 h-32 text-primary mb-8' />
      </motion.div>

      <motion.h1
        className='text-4xl font-bold text-primary mb-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oops! Page Not Found
      </motion.h1>

      <motion.p
        className='text-xl text-muted-foreground mb-8 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Looks like this item is out of stock. Let's find something else!
      </motion.p>

      <motion.div
        className={`mb-8 }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2 className='text-lg font-semibold mb-2'>Popular Categories:</h2>
        <div className='flex flex-wrap justify-center gap-2'>
          {popularCategories.map((category, index) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/category/${category.toLowerCase().replace(' & ', '-')}`}
                className='inline-block bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm'
              >
                {category}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link href='/'>
          <Button className='flex items-center'>
            <Home className='w-4 h-4 mr-2' />
            Back to Homepage
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
