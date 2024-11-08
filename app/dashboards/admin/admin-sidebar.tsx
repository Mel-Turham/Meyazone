'use client';
import { useToggleAdminSideBar } from '@/store/useToggleAdminSideBar';
import {
  LayoutDashboard,
  ListOrdered,
  LogOutIcon,
  LogsIcon,
  MessageSquareWarning,
  Settings,
  ShieldAlert,
  ShoppingBagIcon,
  UserCheck,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Links = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard className='w-6 h-6' strokeWidth={1.5} />,
    href: '/dashboards/admin',
  },
  {
    label: 'Users',
    icon: <UserCheck className='w-6 h-6' strokeWidth={1.5} />,
    href: '/dashboards/admin/users',
  },
  {
    label: 'Products',
    icon: <ShoppingBagIcon className='w-6 h-6' strokeWidth={1.5} />,
    href: '/dashboards/admin/products',
  },
  {
    label: 'Orders',
    icon: <ListOrdered className='w-6 h-6' strokeWidth={1.5} />,
    href: '/dashboards/admin/orders',
  },
  {
    label: 'Finance',
    icon: <Wallet className='w-6 h-6' strokeWidth={1.5} />,
    href: '/dashboards/admin/finance',
  },
  {
    label: 'Settings',
    icon: <Settings className='w-6 h-6' strokeWidth={1.5} />,
    href: '/dashboards/admin/settings',
  },
  {
    label: 'Reports',
    icon: <MessageSquareWarning className='w-6 h-6' strokeWidth={1.5} />,
    href: '/dashboards/admin/reports',
  },
  {
    label: 'Support',
    icon: <ShieldAlert className='w-6 h-6' strokeWidth={1.5} />,
    href: '/dashboards/admin/support',
  },
  {
    label: 'Logs',
    icon: <LogsIcon className='w-6 h-6' strokeWidth={1.5} />,
    href: '/dashboards/admin/logs',
  },
];
const AdminSideBar = () => {
  const { toggleSideBar } = useToggleAdminSideBar();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const pathname = usePathname();

  const handlerMouseEnter = (label: string) => {
    setIsHovered(label);
  };

  const handlerMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <aside
      className={`min-h-screen transition-all duration-300 ease-in-out border-r shadow-sm p-4 pb-0 dark:bg-slate-900/20 sticky top-0 left-0 ${
        toggleSideBar ? 'w-[6.5%]' : 'w-[20%]'
      }`}
    >
      <div className=' flex items-center gap-1 dark:bg-slate-900 rounded-md px-2 py-1.5 sticky top-0 left-0'>
        <Image
          src={'/logo-responsive.png'}
          alt='log meyazone'
          width={100}
          height={100}
          loading='lazy'
          className='transition-all ease-in-out duration-300 w-[45px]'
        />
        {toggleSideBar ? null : (
          <h1 className='text-xl font-extrabold text-primary'>MEYAZONE</h1>
        )}
      </div>
      <div className='min-h-full relative'>
        <div className='h-[calc(100vh-75px)] relative scrollbar-none'>
          <div className=' gap-4 pt-5  flex flex-col items-center'>
            {Links.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={{ ...link }.href}
                  onMouseEnter={() => handlerMouseEnter(link.label)}
                  onMouseLeave={handlerMouseLeave}
                  className={`w-full flex items-center dark:hover:bg-slate-900/70 hover:bg-gray-200 gap-2 px-2 py-1.5 cursor-pointer rounded ${
                    toggleSideBar && 'justify-center'
                  } ${
                    pathname === { ...link }.href
                      ? 'bg-gray-200  dark:bg-slate-900/70'
                      : ''
                  }`}
                >
                  {link.icon}
                  {toggleSideBar ? null : (
                    <span className='text-base font-medium'>{link.label}</span>
                  )}
                  {toggleSideBar && (
                    <AnimatePresence mode='wait'>
                      {isHovered === link.label && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          className='absolute -right-[7.2rem] w-24 flex items-center justify-center px-4 py-1 rounded h-8 z-[10] dark:bg-slate-900 bg-gray-300'
                        >
                          {link.label}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </Link>
              );
            })}
          </div>
          <button
            className={`w-full mt-10 flex items-center dark:hover:bg-slate-900/70 hover:bg-gray-200 gap-2 px-2 py-1.5 cursor-pointer rounded ${
              toggleSideBar && 'justify-center'
            }`}
          >
            <LogOutIcon />
            {toggleSideBar ? null : (
              <span className='text-base font-medium'>Logout</span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSideBar;
