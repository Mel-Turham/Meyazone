'use client';
import { useToggleSideBar } from '@/store/useToggleSideBar';
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

const Links = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard className='w-6 h-6' strokeWidth={1.5} />,
    href: '/admin',
  },
  {
    label: 'Users',
    icon: <UserCheck className='w-6 h-6' strokeWidth={1.5} />,
    href: '/admin/users',
  },
  {
    label: 'Products',
    icon: <ShoppingBagIcon className='w-6 h-6' strokeWidth={1.5} />,
    href: '/admin/products',
  },
  {
    label: 'Orders',
    icon: <ListOrdered className='w-6 h-6' strokeWidth={1.5} />,
    href: '/admin/orders',
  },
  {
    label: 'Finances',
    icon: <Wallet className='w-6 h-6' strokeWidth={1.5} />,
    href: '/admin/finances',
  },
  {
    label: 'Settings',
    icon: <Settings className='w-6 h-6' strokeWidth={1.5} />,
    href: '/admin/settings',
  },
  {
    label: 'Reports',
    icon: <MessageSquareWarning className='w-6 h-6' strokeWidth={1.5} />,
    href: '/admin/reports',
  },
  {
    label: 'Supports',
    icon: <ShieldAlert className='w-6 h-6' strokeWidth={1.5} />,
    href: '/admin/supports',
  },
  {
    label: 'Logs',
    icon: <LogsIcon className='w-6 h-6' strokeWidth={1.5} />,
    href: '/admin/logs',
  },
];
const AdminSideBar = () => {
  const { toggleSideBar } = useToggleSideBar();
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
      className={`h-full transition-all duration-300 ease-in-out border-r shadow-sm p-4 pb-0 dark:bg-slate-950 sticky top-0 left-0 ${
        toggleSideBar ? 'w-[6.5%]' : 'w-[20%]'
      }`}
    >
      <Link
        href={'/'}
        className=' flex items-center gap-1 dark:bg-slate-900 rounded-md px-2 py-1.5 sticky top-0 left-0'
      >
        <Image
          src={'/logo-responsive.png'}
          alt='logo meyazone'
          width={100}
          height={100}
          loading='lazy'
          className='transition-all ease-in-out duration-300 w-[45px]'
        />
        {toggleSideBar ? null : (
          <h1 className='text-xl cursor-pointer font-extrabold text-primary'>
            MEYAZONE
          </h1>
        )}
      </Link>
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
                  <AnimatePresence mode='wait'>
                    {toggleSideBar ? null : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: toggleSideBar ? 0 : 1 }}
                        transition={{ duration: 0.6 }}
                        className='text-base font-medium'
                      >
                        {link.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {toggleSideBar && (
                    <AnimatePresence mode='wait'>
                      {isHovered === link.label && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          className='absolute -right-[7.2rem] w-24 flex items-center justify-center px-4 py-1 rounded h-8 z-[40] dark:bg-slate-900 bg-gray-300'
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
