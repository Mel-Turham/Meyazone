'use client';
import React, { ReactNode } from 'react';
import AdminSideBar from './admin-sidebar';
import { useToggleSideBar } from '@/store/useToggleSideBar';
import Header from './header';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { toggleSideBar } = useToggleSideBar();

  return (
    <div className='flex h-screen overflow-hidden '>
      <AdminSideBar />
      <div className={`${toggleSideBar ? 'flex-1' : 'w-[80%]'}  flex flex-col`}>
        <Header />
        <div className='px-4 pt-20 overflow-scroll'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
