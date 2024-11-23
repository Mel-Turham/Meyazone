import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const CustomerHeader = () => {
  return (
    <header className='flex justify-between items-center py-4 px-4 border-b'>
      <h1 className='text-2xl font-semibold'>Welcome back, Alex!</h1>
      <Avatar>
        <AvatarImage className='object-cover' src='/user-1.jpg' alt='Alex' />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default CustomerHeader;
