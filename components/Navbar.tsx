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
import React, { useEffect, useMemo } from 'react';

import { useTheme } from 'next-themes';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectTrigger,
} from '@/components/ui/select';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useMenuStore } from '@/store/MenuStore';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/NavLink';

const links = [
	{ linkId: 1, label: 'Home', href: '/' },
	{ linkId: 2, label: 'Shop', href: '/shop' },
	{ linkId: 3, label: 'Blog', href: '/blog' },
	{ linkId: 4, label: 'About Us', href: '/about' },
	{ linkId: 5, label: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
	const { setIsOpen, isOpen } = useMenuStore();
	const { theme, systemTheme } = useTheme();
	const pathname = usePathname();

	useEffect(() => {
		const html = document.querySelector<HTMLHtmlElement>('html');
		const body = document.querySelector<HTMLBodyElement>('body');

		if (isOpen) {
			html?.classList.add('scrollbar-w-0', 'scrollbar');
			body?.classList.add('overflow-hidden');
		} else {
			html?.classList.remove('scrollbar-w-0', 'scrollbar');
			body?.classList.remove('overflow-hidden');
		}

		return () => {
			html?.classList.remove('scrollbar-w-0', 'scrollbar');
			body?.classList.remove('overflow-hidden');
		};
	}, [isOpen]);

	const hideFooter = ['/login', '/register'];
	const shouldHide = hideFooter.includes(pathname);

	const logoSrc = useMemo(() => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		return currentTheme === 'light' ? '/logo-dark.png' : '/logo-white.png';
	}, [theme, systemTheme]);

	if (shouldHide) return null;

	return (
		<header className='w-full bg-white text-slate-800 dark:bg-slate-950 dark:text-white flex flex-col border-b border-solid border-slate-100 dark:border-gray-700'>
			{/* Top bar */}
			<div className='container flex items-center justify-between py-2'>
				<span className='text-gray-600 text-sm dark:text-gray-100 font-normal'>
					Welcome to meyazone store
				</span>
				<div className='flex items-center space-x-3 divide-x'>
					{[
						{ icon: MapPin, text: 'Store Locator', className: 'pe-4' },
						{ icon: Bus, text: 'Track your order', className: 'px-4' },
						{ icon: ShoppingBag, text: 'Shop', className: 'px-4' },
						{ icon: User, text: 'My account', className: 'ps-4' },
					].map(({ icon: Icon, text, className }, index) => (
						<div
							key={index}
							className={`flex items-center text-gray-600 text-sm gap-1 cursor-pointer dark:text-gray-100 ${className}`}
						>
							<Icon className='w-4 h-4' strokeWidth={1} />
							<span>{text}</span>
						</div>
					))}
				</div>
			</div>
			<Separator />
			{/* Main navbar */}
			<div className='container flex items-center justify-between py-2'>
				<Link href='/' className='w-2/12'>
					<Image
						src={logoSrc}
						alt='logo'
						loading='lazy'
						title='meyazone'
						width={200}
						height={200}
					/>
				</Link>

				<div className='w-7/12 flex items-center gap-2 justify-between'>
					<div
						onClick={() => setIsOpen(!isOpen)}
						className='mr-8 flex items-center justify-center'
					>
						<Menu className='w-7 h-7 cursor-pointer' />
					</div>
					<form className='flex items-center w-[95%] rounded-full ps-2 border border-solid overflow-hidden border-gray-200 bg-gray-50 p-1'>
						<Select>
							<SelectTrigger className='focus-visible:ring-transparent focus-visible:ring-0 rounded-full border-none outline-none w-[40%] bg-transparent dark:text-gray-500'>
								<SelectValue placeholder='All Categories' />
							</SelectTrigger>
							<SelectContent>
								{[
									'All',
									'Uncategorized',
									'Accessories',
									'Cameras & Photographie',
									'Computers',
									'Gadgets',
									'Home Entertainment',
									'Laptops & Computers',
									'Smart Phone',
									'Video Games',
									'Stereos',
									'Home Theatre',
								].map((category) => (
									<SelectItem
										key={category}
										value={category.toLowerCase().replace(/ /g, '-')}
									>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Input
							type='search'
							placeholder='Search for products'
							className='outline-none focus-visible:ring-transparent focus-visible:ring-0 border-none rounded-full w-[48%] pl-6 bg-transparent text-slate-600'
						/>
						<Button
							type='submit'
							size='icon'
							className='rounded-full h-[38.8px] w-[38.8px] p-0 ml-auto dark:bg-slate-900 text-white'
						>
							<Search strokeWidth={2} className='w-6 h-6' />
						</Button>
					</form>
				</div>
				<div className='w-2/12 flex items-center between gap-5'>
					<TooltipProvider>
						{[
							{ icon: Repeat, tooltip: 'Compare' },
							{ icon: Heart, tooltip: 'Wishlist' },
							{ icon: User, tooltip: 'My Account' },
							{
								icon: ShoppingCart,
								tooltip: 'Cart',
								extra: <span className='absolute -right-12'>$0.00</span>,
							},
						].map(({ icon: Icon, tooltip, extra }, index) => (
							<Tooltip key={index}>
								<TooltipTrigger className='relative flex items-center gap-5'>
									<Icon
										strokeWidth={1.5}
										className='text-gray-600 w-5 h-5 dark:text-gray-100'
									/>
									{extra}
								</TooltipTrigger>
								<TooltipContent side='bottom'>
									<p>{tooltip}</p>
								</TooltipContent>
							</Tooltip>
						))}
					</TooltipProvider>
				</div>
			</div>

			{/* Bottom navbar */}
			<div className='container flex items-center justify-between h-14 relative border-t border-solid border-gray-700 py-1'>
				{pathname === '/' && (
					<Card className='w-[260px] rounded-sm absolute top-7 left-20 overflow-hidden z-10'>
						<CardHeader className='bg-myprimary p-2'>
							<CardTitle className='flex items-center'>
								<Menu className='w-6 h-6' />
								<span className='text-sm ml-5 font-normal tracking-wide'>
									All Departments
								</span>
							</CardTitle>
						</CardHeader>
						<CardContent className='py-3 px-0 rounded-none'>
							{Array.from({ length: 10 }).map((_, index) => (
								<div className='flex flex-col gap-2' key={index}>
									<div className='flex items-center justify-between cursor-pointer hover:bg-slate-700 transition-all duration-300 ease-in-out text-white px-4'>
										<p className='text-sm font-normal tracking-wide leading-8'>
											Value of the day
										</p>
										<ChevronRight
											className='w-6 h-6 text-muted-foreground'
											strokeWidth={1.5}
										/>
									</div>
									<Separator />
								</div>
							))}
						</CardContent>
					</Card>
				)}
				<div className='w-[260px]'></div>
				<nav className='flex items-center'>
					<ul className='flex items-center text-slate-600 font-medium dark:text-white'>
						{links.map((link) => (
							<li key={link.linkId} className='px-4'>
								<NavLink label={link.label} href={link.href} />
							</li>
						))}
					</ul>
				</nav>
				<div className='h-full px-2 py-1 bg-[#EF7C1A] flex gap-2 rounded items-center cursor-pointer text-black'>
					<Image
						src='/call.png'
						alt='headphone'
						loading='lazy'
						width={40}
						height={40}
						className='w-[20%] h-full object-contain'
					/>
					<div className='flex flex-col h-full'>
						<small className='font-light leading-none text-xs'>
							Call us 7j/24
						</small>
						<p className='text-lg text-nowrap font-black'>+237 672 54 22 25</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
