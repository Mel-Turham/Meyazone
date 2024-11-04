'use client';
import React, { ReactNode } from 'react';
import AdminSideBar from './admin-sidebar';
import { useToggleAdminSideBar } from '@/store/useToggleAdminSideBar';
import Header from './header';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { toggleSideBar } = useToggleAdminSideBar();

  return (
    <div className='flex h-screen overflow-hidden'>
      <AdminSideBar />

      {/* Conteneur principal */}
      <div className={`${toggleSideBar ? 'flex-1' : 'w-[80%]'} flex flex-col`}>
        {/* Header fixe */}
        <Header />

        {/* Zone de contenu avec défilement */}
        <main className='flex-1 px-6 py-8 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
