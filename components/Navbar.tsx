'use client';

import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
	Bus,
	ChevronRight,
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
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Navbar = () => {
	const { theme } = useTheme();
	return (
		<header className='w-full  bg-white text-slate-800 dark:bg-slate-950 dark:text-white flex flex-col shadow-sm shadow-slate-50 dark:shadow-gray-50'>
			<div className='container flex items-center  justify-between py-2'>
				<span className='text-gray-600 text-sm dark:text-gray-100  font-normal'>
					Welcom to meyazone store
				</span>
				<div className='flex items-center space-x-3 divide-x'>
					<div className='flex items-center justify-center text-gray-600 text-sm gap-1 cursor-pointer  dark:text-gray-100 pe-4'>
						<MapPin className='w-4 h-4' strokeWidth={1} />
						<span>Store Locator</span>
					</div>

					<div className='flex items-center text-gray-600 text-sm gap-1 justify-center  dark:text-gray-100 px-4'>
						<Bus className='w-4 h-4' strokeWidth={1} />
						<span>Track your order</span>
					</div>
					<div className='flex items-center text-gray-600 text-sm gap-1 dark:text-gray-100 px-4'>
						<ShoppingBag className='w-4 h-4' strokeWidth={1} />
						<span>Shop</span>
					</div>
					<div className='flex items-center text-gray-600 text-sm gap-1 dark:text-gray-100 ps-4'>
						<User className='w-4 h-4' strokeWidth={1} />
						<span>My account</span>
					</div>
				</div>
			</div>
			<Separator />
			<div className='container flex items-center justify-between  py-2 '>
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
					<div className='mr-8 flex items-center justify-center'>
						<Menu className='w-7 h-7 cursor-pointer' />
					</div>
					<form className='flex items-center w-[95%]  py-1 bg-[#EF7C1A] ps-1 pe-6 rounded-sm'>
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
							<Search strokeWidth={1.5} />
						</button>
					</form>
				</div>
				<div className='w-2/12 flex items-center between gap-5'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Repeat
									strokeWidth={1.5}
									className='text-gray-600 w-5 h-5 dark:text-gray-100'
								/>
							</TooltipTrigger>
							<TooltipContent side='bottom'>
								<p>Compare</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<Heart
									strokeWidth={1.5}
									className='text-gray-600 w-5 h-5 dark:text-gray-100'
								/>
							</TooltipTrigger>
							<TooltipContent side='bottom'>
								<p>Wishlist</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<User
									strokeWidth={1.5}
									className='text-gray-600 w-5 h-5 dark:text-gray-100'
								/>
							</TooltipTrigger>
							<TooltipContent side='bottom'>
								<p>My Account</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger className='relative flex items-center gap-5'>
								<ShoppingCart
									strokeWidth={1.5}
									className='text-gray-600 w-5 h-5 dark:text-gray-100'
								/>
								<span className='absolute -right-12'>$0.00</span>
							</TooltipTrigger>
							<TooltipContent side='bottom'>
								<p>Cart</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</div>

			<div className='container flex items-center justify-between h-14 relative '>
				<Card className='w-[260px] rounded-sm absolute top-7  left-20 overflow-hidden'>
					<CardHeader className='bg-[#EF7C1A] p-2'>
						<CardTitle className='flex items-center'>
							<div>
								<Menu className='w-6 h-6' />
							</div>
							<span className='text-sm ml-5 font-semibold'>
								All Departments
							</span>
						</CardTitle>
					</CardHeader>
					<CardContent className='divide-y spacey-1 py-3 px-2 rounded-none'>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
						<div className='flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out py-2 px-1.5 rounded '>
							<p className='text-muted-foreground text-sm font-medium'>
								Value of the day
							</p>
							<ChevronRight
								className='w-6 h-6 text-muted-foreground  '
								strokeWidth={1.5}
							/>
						</div>
					</CardContent>
				</Card>
				<div className='w-[260px]'></div>
				<nav className=' flex items-center'>
					<ul className='flex items-center gap-10 text-slate-600 font-semibold dark:text-white'>
						<li className='px-2'>Home</li>
						<li className='px-2'>Featured brands</li>
						<li className='px-2'>Trending Styles</li>
						<li className='px-2'>Gift Card</li>
					</ul>
				</nav>
				<small className='text-slate-500  font-medium leading-none dark:text-gray-100 text-sm'>
					Free Shipping on Orders $50+
				</small>
			</div>
		</header>
	);
};

export default Navbar;
