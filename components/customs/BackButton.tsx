// button back to previous page
'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className=' group flex items-center gap-1 dark:bg-slate-900 dark:hover:bg-slate-900/50 transition-all duration-300 ease-in-out cursor-pointer w-fit px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300'
    >
      <ArrowLeft className='w-6 h-6 group-hover:-translate-x-1 transition-all duration-300 ease-in-out' />
      <span className='text-sm font-semibold tracking-wide'>Back</span>
    </button>
  );
};

export default BackButton;
