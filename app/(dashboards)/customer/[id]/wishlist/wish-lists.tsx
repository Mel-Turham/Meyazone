'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { toast } from '@/hooks/use-toast';

// Mock data for wish lists
const initialWishLists = [
  {
    id: 1,
    name: 'Birthday Gifts',
    products: [
      { id: 1, name: 'Product 1', price: 19.99 },
      { id: 2, name: 'Product 2', price: 29.99 },
    ],
  },
  {
    id: 2,
    name: 'Christmas List',
    products: [
      { id: 3, name: 'Product 3', price: 39.99 },
      { id: 4, name: 'Product 4', price: 49.99 },
    ],
  },
];

export function WishLists() {
  const [wishLists, setWishLists] = useState(initialWishLists);
  const [newListName, setNewListName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingList, setEditingList] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const addWishList = () => {
    if (newListName.trim()) {
      setWishLists([
        ...wishLists,
        { id: Date.now(), name: newListName, products: [] },
      ]);
      setNewListName('');
      toast({
        title: 'Wish list created',
        description: `Your new wish list "${newListName}" has been created.`,
      });
    }
  };

  const deleteWishList = (id: number) => {
    setWishLists(wishLists.filter((list) => list.id !== id));
    toast({
      title: 'Wish list deleted',
      description: 'The wish list has been deleted.',
      variant: 'destructive',
    });
  };

  const startEditingList = (list: { id: number; name: string }) => {
    setEditingList(list);
    setIsDialogOpen(true);
  };

  const saveEditedList = () => {
    if (editingList) {
      setWishLists(
        wishLists.map((list) =>
          list.id === editingList.id
            ? { ...list, name: editingList.name }
            : list
        )
      );
      setIsDialogOpen(false);
      setEditingList(null);
      toast({
        title: 'Wish list updated',
        description: `The wish list has been renamed to "${editingList.name}".`,
      });
    }
  };

  return (
    <div className='mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Custom Wish Lists</h2>
      <div className='flex mb-4'>
        <Input
          placeholder='New list name'
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          className='mr-2'
        />
        <Button onClick={addWishList}>
          <Plus className='w-4 h-4 mr-2' />
          Create a List
        </Button>
      </div>
      <ScrollArea className='h-[500px]'>
        <AnimatePresence>
          <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            {wishLists.map((list) => (
              <motion.div
                key={list.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Collapsible>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center justify-between'>
                        <CardTitle>{list.name}</CardTitle>
                        <CollapsibleTrigger asChild>
                          <Button variant='ghost' size='sm'>
                            <ChevronDown className='h-4 w-4' />
                            <span className='sr-only'>Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{list.products.length} products</p>
                    </CardContent>
                    <CollapsibleContent>
                      <CardContent>
                        {list.products.length > 0 ? (
                          <ul>
                            {list.products.map((product) => (
                              <li
                                key={product.id}
                                className='flex justify-between items-center py-2'
                              >
                                <span>{product.name}</span>
                                <span>${product.price.toFixed(2)}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <h4>No products</h4>
                        )}
                      </CardContent>
                    </CollapsibleContent>
                    <CardFooter className='flex justify-between'>
                      <Button
                        variant='outline'
                        onClick={() => startEditingList(list)}
                      >
                        <Edit2 className='w-4 h-4 mr-2' />
                        Edit
                      </Button>
                      <Button
                        variant='destructive'
                        onClick={() => deleteWishList(list.id)}
                      >
                        <Trash2 className='w-4 h-4 mr-2' />
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                </Collapsible>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </ScrollArea>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Wish List</DialogTitle>
            <DialogDescription>
              Change the name of your wish list.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={editingList?.name || ''}
            onChange={(e) =>
              setEditingList((prev) =>
                prev ? { ...prev, name: e.target.value } : null
              )
            }
          />
          <DialogFooter>
            <Button variant='outline' onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEditedList}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
