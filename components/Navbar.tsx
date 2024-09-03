'use client';

import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
	Bus,
	Heart,
	MapPin,
	Menu,
	Repeat,
	Search,
	ShoppingBag,
	ShoppingCart,
	User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useTheme } from 'next-themes';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectTrigger,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const Navbar = () => {
	const { theme } = useTheme();
	return (
		<header className='w-full  fixed top-0  bg-white text-slate-800 dark:bg-slate-900 dark:text-white flex flex-col  h-18 '>
			<div className='container flex items-center h-1/2 justify-between py-2'>
				<span className='text-gray-600 text-lg capitalize font-medium'>
					Welcom to meyazone store
				</span>
				<div className='flex items-center space-x-2'>
					<div className='flex items-center justify-center text-gray-600 text-sm gap-1 cursor-pointer '>
						<MapPin className='w-4 h-4' strokeWidth={1} />
						<span>Store Locator</span>
					</div>
					<Separator orientation='vertical' />
					<div className='flex items-center text-gray-600 text-sm gap-1 justify-center  '>
						<Bus className='w-4 h-4' strokeWidth={1} />
						<span>Track your order</span>
					</div>
					<Separator orientation='vertical' />
					<div className='flex items-center text-gray-600 text-sm gap-1 '>
						<ShoppingBag className='w-4 h-4' strokeWidth={1} />
						<span>Shop</span>
					</div>
					<Separator orientation='vertical' />
					<div className='flex items-center text-gray-600 text-sm gap-1 '>
						<User className='w-4 h-4' strokeWidth={1} />
						<span>My account</span>
					</div>
				</div>
			</div>
			<Separator />
			<nav className='container flex items-center justify-between  py-4'>
				<Link href='/' className='w-2/12'>
					<Image
						src={theme === 'light' ? '/logo-dark.png' : '/logo-white.png'}
						alt='logo'
						loading='lazy'
						title='meyazone'
						width={200}
						height={200}
					/>
				</Link>

				<div className='w-7/12 flex items-center gap-2 justify-between'>
					<div>
						<Menu />
					</div>
					<form className='flex items-center w-[95%]  py-1 bg-yellow-300 ps-1 pe-6 rounded-sm'>
						<Input
							type='search'
							placeholder='Search for products'
							className='outline-none focus-visible:ring-transparent focus-visible:ring-0 border-none rounded-none'
						/>
						<Select>
							<SelectTrigger className='focus-visible:ring-transparent focus-visible:ring-0 rounded-none border-none outline-none'>
								<SelectValue placeholder='All Categories' />
							</SelectTrigger>
							<SelectContent className=''>
								<SelectItem value='All'>All Categories</SelectItem>
								<SelectItem value='Uncategorized'>Uncategorized</SelectItem>
								<SelectItem value='Accessories'>Accessories</SelectItem>
								<SelectItem value='Cameras & Phothographie'>
									Cameras & Photographie
								</SelectItem>
								<SelectItem value='Computer'>Computers</SelectItem>
								<SelectItem value='Gadgets'>Gadgets</SelectItem>
								<SelectItem value='home entertaiment'>
									Home Entertaiment
								</SelectItem>
								<SelectItem value='laptop-computers'>
									Laptops & Computers
								</SelectItem>
								<SelectItem value='Smartp'>Smart Phone</SelectItem>
								<SelectItem value='videogame'>Video Games</SelectItem>
								<SelectItem value='stero'>Steros</SelectItem>
								<SelectItem value='home theatre'>Home Theatre</SelectItem>
							</SelectContent>
						</Select>

						<button
							type='submit'
							className='flex items-center justify-end w-[100px] h-[40px]'
						>
							<Search strokeWidth={1} />
						</button>
					</form>
				</div>
				<div className='w-2/12 flex items-center justify-end gap-5'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Repeat strokeWidth={1.5} className='text-gray-600 w-5 h-5' />
							</TooltipTrigger>
							<TooltipContent>
								<p>Compare</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<Heart />
							</TooltipTrigger>
							<TooltipContent>
								<p>Wishlist</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<User />
							</TooltipTrigger>
							<TooltipContent>
								<p>My Account</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<ShoppingCart />
							</TooltipTrigger>
							<TooltipContent>
								<p>Cart</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
