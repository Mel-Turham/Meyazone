'use client';

import { useToggleSideBar } from '@/store/useToggleSideBar';
import { LayoutDashboard, Sidebar } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CustomerSideBar = () => {
  const { toggleSideBar, setToggleSideBar } = useToggleSideBar();
  return (
    <aside
      className={` ${
        toggleSideBar ? 'w-[20%]' : 'w-[6.5%]'
      } border-r pt-4 px-4 transition-all duration-300 ease-in-out dark:bg-slate-950 sticky top-0 left-0`}
    >
      <div className='pb-4 flex items-center justify-between'>
        {toggleSideBar ? (
          <h1 className='text-2xl font-bold'>Dashboard</h1>
        ) : null}
        <Sidebar
          onClick={() => setToggleSideBar(!toggleSideBar)}
          className={`cursor-pointer h-7 w-7 text-muted-foreground ${
            toggleSideBar ? '' : 'mx-auto'
          }`}
        />
      </div>
      <ul>
        <li className=' py-2'>
          <Link href={'/customer/2'} className='flex items-center gap-4'>
            <LayoutDashboard className='w-6 h-6' strokeWidth={1.5} />
            <span className='text-base font-medium'>Dashboard</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default CustomerSideBar;
