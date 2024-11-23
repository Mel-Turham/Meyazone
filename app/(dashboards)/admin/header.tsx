'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useToggleSideBar } from '@/store/useToggleSideBar';
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Moon,
  Search,
  Settings,
  Sun,
  User,
} from 'lucide-react';
import { useTheme } from 'next-themes';
const Header = () => {
  const { toggleSideBar, setToggleSideBar } = useToggleSideBar();
  const { theme, setTheme } = useTheme();
  return (
    <header className='dark:bg-slate-950  flex justify-between items-center py-5 px-6  top-0 left-0 z-10 bg-white border-b backdrop-blur-lg w-full sticky'>
      <Button
        onClick={() => setToggleSideBar(!toggleSideBar)}
        size={'icon'}
        className='h-8 w-8 p-1'
      >
        {toggleSideBar ? <ChevronLeft /> : <ChevronRight />}
      </Button>
      {/* left  */}
      <div className='flex items-center'>
        <div className='relative mx-4'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <Search className='w-5 h-5 text-gray-500 dark:text-gray-400' />
          </span>
          <Input
            type='text'
            placeholder='Search...'
            className='pl-10 pr-4 dark:bg-gray-700 dark:text-white'
          />
        </div>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? (
            <Moon className='w-5 h-5' />
          ) : (
            <Sun className='w-5 h-5' />
          )}
        </Button>
        <Button variant='ghost' size='icon'>
          <Bell className='w-5 h-5' />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='ml-4'>
              <Avatar>
                <AvatarImage src='/placeholder-user.jpg' alt='User' />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className='ml-2 dark:text-white'>Admin</span>
              <ChevronDown className='w-4 h-4 ml-2' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className='w-4 h-4 mr-2' />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='w-4 h-4 mr-2' />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className='dark:hover:bg-red-600 text-red-600'>
              <LogOut className='w-4 h-4 mr-2' />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
