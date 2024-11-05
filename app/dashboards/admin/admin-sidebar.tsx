'use client';
import { useToggleAdminSideBar } from '@/store/useToggleAdminSideBar';
import { LayoutDashboard, UserCheck } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Links = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard />,
    href: '/dashboards/admin',
  },
];
const AdminSideBar = () => {
  const { toggleSideBar } = useToggleAdminSideBar();
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
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
        <div className='h-[calc(100vh-75px)]  overflow-y-scroll gap-4 pt-5  flex flex-col items-center scrollbar-none'>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-full flex items-center dark:hover:bg-slate-900/70 hover:bg-gray-200 gap-2 px-2 py-1.5 cursor-pointer rounded ${
              toggleSideBar && 'justify-center'
            } ${
              pathname === '/dashboards/admin'
                ? 'bg-gray-200  dark:bg-slate-900/70'
                : ''
            }`}
          >
            <LayoutDashboard className='w-6 h-6' strokeWidth={1.5} />
            {toggleSideBar ? null : (
              <span className='text-base font-medium'>Dashboard</span>
            )}
            <AnimatePresence>
              {toggleSideBar && isHovered && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.85,
                  }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  className='absolute dark:bg-slate-900 p-2 font-medium bg-gray-200 z-20 -right-[115px] rounded'
                >
                  Dashbord
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-full flex items-center dark:hover:bg-slate-900/70 hover:bg-gray-200 gap-2 px-2 py-1.5 cursor-pointer rounded ${
              toggleSideBar && 'justify-center'
            } ${
              pathname === '/dashboards/admin'
                ? 'bg-gray-200  dark:bg-slate-900/70'
                : ''
            }`}
          >
            <UserCheck className='w-6 h-6' strokeWidth={1.5} />
            {toggleSideBar ? null : (
              <span className='text-base font-medium'>Users</span>
            )}
            <AnimatePresence>
              {toggleSideBar && isHovered && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.85,
                  }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  className='absolute dark:bg-slate-900 p-2 font-medium bg-gray-200 z-20 -right-[115px] rounded'
                >
                  Users
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSideBar;
