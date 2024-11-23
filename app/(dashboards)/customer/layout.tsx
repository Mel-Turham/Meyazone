import React, { ReactNode } from 'react';
import CustomerSideBar from './_components/customer-sidebar';
import CustomerHeader from './_components/customer-header';
import ScrollProvider from '@/providers/scroll-provider';

const CustomersLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex overflow-hidden h-screen'>
      <CustomerSideBar />
      <div className='flex-1 flex  flex-col overflow-hidden'>
        <CustomerHeader />
        <ScrollProvider>{children}</ScrollProvider>
      </div>
    </div>
  );
};

export default CustomersLayout;
