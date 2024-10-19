'use client';
import { Input } from '@/components/ui/input';
import {
	ArrowRight,
	Facebook,
	Headphones,
	Instagram,
	Linkedin,
	Map,
	Phone,
	Twitter,
	Youtube,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import CurrencySelector from '@/components/CurrencySelector';

const Footer = () => {
	const { theme } = useTheme();
	const pathname = usePathname();

	const hideFooter = ['/login', '/register'];
	if (hideFooter.includes(pathname)) return null;

	const socialLinks = [
		{ Icon: Facebook, href: '#', label: 'Facebook' },
		{ Icon: Instagram, href: '#', label: 'Instagram' },
		{ Icon: Linkedin, href: '#', label: 'LinkedIn' },
		{ Icon: Twitter, href: '#', label: 'Twitter' },
		{ Icon: Youtube, href: '#', label: 'YouTube' },
	];

	const footerSections = [
		{
			title: 'Account',
			links: ['Dashboard', 'Orders', 'Wishlist', 'My garage', 'Address'],
		},
		{
			title: 'Catalog',
			links: [
				'Shop by parts',
				'Shop by brands',
				'Shop by make',
				'Promotions',
				'Sitemap',
			],
		},
		{
			title: 'Help',
			links: ['Features', 'FAQ', 'About us', 'Career', 'Contact us'],
		},
	];

	const contactInfo = [
		{ Icon: Map, text: 'Douala cameroun', label: 'Address' },
		{
			Icon: Phone,
			text: 'Call us between 8 AM - 10 PM',
			subtext: '+237 672 54 22 25',
			label: 'Phone',
		},
		{
			Icon: Headphones,
			text: 'Live chat',
			subtext: 'Live with an expert',
			label: 'Live Chat',
		},
	];

	return (
		<footer
			className='border-t border-solid border-slate-300 dark:border-gray-800 mt-8'
			role='contentinfo'
		>
			<div className='bg-myprimary '>
				<div className='container pt-5 flex items-center justify-between gap-8'>
					<div className='flex'>
						<Image
							src={'/Phone-footer.png'}
							alt='Icon'
							loading='lazy'
							width={100}
							height={80}
							className='w-[90px] object-top aspect-square object-contain'
						/>
						<div className='space-y-1'>
							<h4 className='font-semibold'>Expert Service</h4>
							<p className='text-xs text-balance'>
								Our Friendly team&apos;s on hand seven days a week
							</p>
						</div>
					</div>
					<div className='flex gap-2 items-center mb-5'>
						<Image
							src={'/cart-footer.png'}
							alt='Icon'
							loading='lazy'
							width={90}
							height={50}
							className='w-[70px]  object-top aspect-square object-contain'
						/>
						<div className='space-y-1'>
							<h4 className='font-semibold'>Amezing Value</h4>
							<p className='text-xs text-balance'>
								The brands you prefer, at the prices you crave
							</p>
						</div>
					</div>
					<div className='flex gap-2'>
						<Image
							src={'/delivrerie-footer.png'}
							alt='Icon'
							loading='lazy'
							width={100}
							className='w-[70px] object-top aspect-square object-contain'
							height={80}
						/>
						<div className='space-y-1'>
							<h4 className='font-semibold'>Fast & Free Shipping</h4>
							<p className='text-xs text-balance'>
								Order Ships out it a snap, and delivers in 1-3 days
							</p>
						</div>
					</div>
					<div className='flex'>
						<Image
							src={'/box-footer.png'}
							alt='Icon'
							loading='lazy'
							width={100}
							height={80}
						/>
						<div className='space-y-1 mt-4'>
							<h4 className='font-semibold'>Unbeatable Selection</h4>
							<p className='text-xs text-balance'>
								Everything you want for your car all, in one playe
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container flex items-center gap-8 py-10 border-b border-solid dark:border-slate-800 border-gray-200 '>
				<div className='flex flex-col gap-5 w-3/12'>
					<Link href='/' aria-label='Go to homepage'>
						<Image
							src={theme === 'light' ? '/logo-dark.png' : '/logo-white.png'}
							width={200}
							height={200}
							alt='Meyazone logo'
							loading='lazy'
							title='Meyazone'
						/>
					</Link>
					<div className='flex items-center gap-6'>
						{socialLinks.map(({ Icon, href, label }, index) => (
							<Link
								key={index}
								href={href}
								aria-label={label}
								className='flex items-center justify-center'
							>
								<Icon className='w-5 h-5' strokeWidth={1.5} />
							</Link>
						))}
					</div>
					<p className='leading-5 font-normal text-sm'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
						commodi?
					</p>
					<form
						action='#'
						className='flex items-center gap-3 border border-solid dark:border-slate-800 rounded-sm overflow-hidden p-1 w-full border-gray-200'
					>
						<Input
							placeholder='Email address'
							aria-label='Subscribe to newsletter'
							className='rounded-none w-3/4 ring-0 border-0 focus:outline-none'
						/>
						<button
							type='submit'
							aria-label='Subscribe'
							className='w-[50px] ml-auto flex items-center justify-center py-2 rounded-md bg-myprimary'
						>
							<ArrowRight className='w-5 h-5' strokeWidth={1.8} />
						</button>
					</form>
				</div>
				{footerSections.map((section, index) => (
					<div key={index} className='flex flex-col gap-5 w-2/12'>
						<h4 className='text-lg font-semibold tracking-tight'>
							{section.title}
						</h4>
						<nav aria-label={`${section.title} links`}>
							<ul className='flex flex-col gap-5'>
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<Link
											href='#'
											className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-normal dark:text-gray-300'
										>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				))}
				<div className='flex flex-col gap-5 w-3/12'>
					<h4 className='text-lg font-semibold tracking-tight'>
						Need help? / Contact us
					</h4>
					<nav aria-label='Contact information'>
						<ul className='flex flex-col gap-8'>
							{contactInfo.map(({ Icon, text, subtext, label }, index) => (
								<li key={index}>
									<Link
										href='#'
										aria-label={label}
										className='flex  gap-3 text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-normal dark:text-gray-300'
									>
										<Icon
											className='w-6 h-6'
											strokeWidth={1.5}
											aria-hidden='true'
										/>
										<div className='flex flex-col gap-1'>
											<span>{text}</span>
											{subtext && (
												<span className='font-bold text-myprimary'>
													{subtext}
												</span>
											)}
										</div>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			<div className='w-full container py-4 flex flex-col gap-6'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center justify-center gap-5'>
						<h4 className='text-sm font-normal tracking-tight dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
							Languages
						</h4>
						<div className='flex items-center gap-2'>
							{['Anglais', 'Francais'].map((lang, index) => (
								<button
									key={index}
									className='flex items-center gap-2 cursor-pointer'
									aria-label={`Change language to ${lang}`}
								>
									<span className='text-sm font-normal tracking-tight dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
										{lang}
									</span>
									<Image
										src={`/${lang.toLowerCase()}.png`}
										alt={`${lang} flag`}
										loading='lazy'
										width={20}
										height={20}
									/>
								</button>
							))}
						</div>
					</div>
					<div className='flex items-center justify-center gap-5'>
						<h4 className='text-sm font-normal tracking-tight dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
							Payment options
						</h4>
						<Image
							src='/patment-icon1.webp'
							alt='Available payment options'
							loading='lazy'
							width={250}
							height={250}
						/>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<h4 className='text-sm font-normal tracking-tight dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
						Select currency:
					</h4>
					<CurrencySelector />
				</div>
				<div className='flex items-center justify-between'>
					<p className='text-sm font-normal dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
						Copyright &copy; {new Date().getFullYear()} Agora Tech Academy. All
						Rights Reserved
					</p>
					<nav aria-label='Legal links'>
						<ul className='flex items-center justify-center gap-8'>
							{[
								'Terms of Use',
								'Privacy Policy',
								'Interest-Based Ads',
								'Accessibility',
							].map((item, index) => (
								<li key={index}>
									<Link
										className='text-sm font-normal dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'
										href='#'
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
