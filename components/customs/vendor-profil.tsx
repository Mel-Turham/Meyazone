import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Image from 'next/image';

const IsVerifed = true;

export default function VendorProfil() {
  return (
    <div className='absolute top-3 right-3 z-10'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size={'icon'} className='rounded-full'>
            {IsVerifed && (
              <div className='absolute bottom-1 right-0 z-20 w-4 h-4 rounded-full '>
                <Image
                  src={'/verifed.png'}
                  width={56}
                  className='w-full aspect-square object-cover origin-center'
                  height={56}
                  alt='verifed-image'
                  loading='lazy'
                />
              </div>
            )}
            <Avatar>
              <AvatarImage src='/user-3.jpg' />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Vendor</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className='flex items-center gap-2'>
            <User />
            <span>John Doe</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
