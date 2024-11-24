'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { Trash2, Heart, DotIcon as DragHandleDots2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/hooks/use-toast';

// Mock data for favorites
const initialFavorites = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/placeholder.svg' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/placeholder.svg' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/placeholder.svg' },
  { id: 4, name: 'Product 4', price: 49.99, image: '/placeholder.svg' },
  { id: 5, name: 'Product 5', price: 59.99, image: '/placeholder.svg' },
];

export function Favorites() {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
    toast({
      title: 'Product removed',
      description: 'The product has been removed from your favorites.',
    });
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    setIsDialogOpen(false);
    toast({
      title: 'All favorites cleared',
      description: 'Your favorites list has been cleared.',
      variant: 'destructive',
    });
  };

  return (
    <div className='mt-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold'>My Favorites</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant='destructive'>
              <Trash2 className='w-4 h-4 mr-2' />
              Clear All
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete all
                your favorite items.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant='outline' onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant='destructive' onClick={clearAllFavorites}>
                Clear All
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <ScrollArea className='h-[600px] '>
        <Reorder.Group
          axis='y'
          values={favorites}
          onReorder={setFavorites}
          className=' w-full h-full grid grid-cols-1 md:grid-cols-2 mt-6 gap-4 '
        >
          <AnimatePresence>
            {favorites.map((product) => (
              <Reorder.Item key={product.id} value={product}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader className='flex flex-row items-center'>
                      <DragHandleDots2Icon className='w-5 h-5 mr-2 cursor-move' />
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className='flex items-center'>
                      <img
                        src={product.image}
                        alt={product.name}
                        className='w-24 h-24 object-cover rounded mr-4'
                      />
                      <div>
                        <p className='text-2xl font-bold'>
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className='flex justify-between'>
                      <Button
                        variant='outline'
                        onClick={() => removeFavorite(product.id)}
                      >
                        Remove from favorites
                      </Button>
                      <Button>
                        <Heart className='w-4 h-4 mr-2' />
                        Add to Wish List
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </ScrollArea>
    </div>
  );
}
