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

const Footer = () => {
	const { theme } = useTheme();
	return (
		<footer className=''>
			{/* top footer */}
			<div className='container py-6 bg-gradient-to-bl from-[#EF7C1A] via-[#EF7C1A]/80 to-[#A54B17]'>
				top footer there!!!
			</div>
			{/* middle footer */}

			<div className='container flex items-center gap-8 py-10 border-b border-solid dark:border-slate-800 border-gray-200'>
				{/* first  */}
				<div className=' flex flex-col gap-5 w-3/12'>
					<Link href='/'>
						<Image
							src={theme === 'light' ? '/logo-dark.png' : '/logo-white.png'}
							width={200}
							height={200}
							alt='logo meyazone'
							loading='lazy'
							title='meyazone'
						/>
					</Link>
					<div className='flex items-center gap-6'>
						<Link href='#' className='flex items-center justify-center'>
							<Facebook className='w-5 h-5' strokeWidth={1.5} />
						</Link>
						<Link href='#' className='flex items-center justify-center'>
							<Instagram className='w-5 h-5' strokeWidth={1.5} />
						</Link>
						<Link href='#' className='flex items-center justify-center'>
							<Linkedin className='w-5 h-5' strokeWidth={1.5} />
						</Link>
						<Link href='#' className='flex items-center justify-center'>
							<Twitter className='w-5 h-5' strokeWidth={1.5} />
						</Link>
						<Link href='#' className='flex items-center justify-center'>
							<Youtube className='w-5 h-5' strokeWidth={1.5} />
						</Link>
					</div>
					<p className='leading-5 font-normal text-sm'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
						commodi?
					</p>
					<form
						action='#'
						className=' flex items-center gap-3 border border-solid dark:border-slate-800 rounded-sm overflow-hidden p-1 w-full border-gray-200'
					>
						<Input
							placeholder='Email address'
							aria-label='new-latters'
							className='rounded-none w-3/4 ring-0  border-0 focus:outline-none'
						/>
						<button
							type='submit'
							aria-label='submit button'
							className=' w-[50px] ml-auto  flex items-center justify-center py-2 rounded-md bg-[#EF7C1A]'
						>
							<ArrowRight className='w-5 h-5' strokeWidth={1.8} />
						</button>
					</form>
				</div>
				<div className='flex flex-col gap-5 w-2/12'>
					<h4 className='text-lg font-semibold tracking-tight'>Account</h4>
					<menu className='flex flex-col gap-5'>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Dashbord
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Orders
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Wishlist
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							My garage
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Address
						</Link>
					</menu>
				</div>
				<div className='flex flex-col gap-5 w-2/12'>
					<h4 className='text-lg font-semibold tracking-tight'>Catalog</h4>
					<menu className='flex flex-col gap-5'>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Shop by parts
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Shop by brands
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Shop by make
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Promtions
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Sitemape
						</Link>
					</menu>
				</div>
				<div className='flex flex-col gap-5 w-2/12'>
					<h4 className='text-lg font-semibold tracking-tight'>Help</h4>
					<menu className='flex flex-col gap-5'>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Featurres
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							FAQ
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							About us
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Carreer
						</Link>
						<Link
							href='#'
							className='text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							Contact us
						</Link>
					</menu>
				</div>
				<div className='flex flex-col gap-5 w-3/12 '>
					<h4 className='text-lg font-semibold tracking-tight'>
						Need help? / Contact us
					</h4>
					<menu className='flex flex-col gap-5'>
						<Link
							href='#'
							className='flex items-center gap-3 text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							<p>
								<Map className='w-6 h-6' strokeWidth={1.5} />
							</p>
							<span className='text-nowrap'>Douala cameroun </span>
						</Link>
						<Link
							href='#'
							className='flex items-center gap-3 text-xs hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300 '
						>
							<p>
								<Phone className='w-6 h-6' strokeWidth={1.5} />
							</p>
							<p className='flex flex-col gap-3'>
								<small>Call us between 8 AM - 10 PM</small>
								<small className='font-bold '>+237 672 54 22 25</small>
							</p>
						</Link>
						<Link
							href='#'
							className='flex items-center gap-3 text-sm hover:dark:text-slate-600 transition-all duration-300 ease-linear font-light dark:text-gray-300'
						>
							<p>
								<Headphones className='w-6 h-6' strokeWidth={1.5} />
							</p>
							<p className='flex flex-col'>
								<span className='mb-3'>Live chat </span>
								<span>Live with an expert</span>
							</p>
						</Link>
					</menu>
				</div>
			</div>
			{/* bottom footer  */}
			<div className='w-full container py-4 flex flex-col gap-10'>
				{/* top bottom footer */}
				<div className='flex items-center justify-between'>
					{/* languages */}
					<div className='flex items-center justify-center gap-5'>
						<h4 className='text-sm font-normal tracking-tight dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
							Languages
						</h4>
						{/* flags */}
						<div className='flex items-center gap-2'>
							<div className='flex items-center gap-2 cursor-pointer'>
								<span className='text-sm font-normal tracking-tight dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
									Anglais
								</span>
								<Image
									src='/anglais.png'
									alt='anglais'
									loading='lazy'
									title='anglais'
									width={20}
									height={20}
								/>
							</div>
							<div className='flex items-center gap-2 cursor-pointer'>
								<span className='text-sm font-normal tracking-tight dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
									Francais
								</span>
								<Image
									src='/france.png'
									alt='francais'
									loading='lazy'
									title='francais'
									width={20}
									height={20}
								/>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-center gap-5'>
						{/* payment options */}
						<h4 className='text-sm font-normal tracking-tight dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
							Payment options
						</h4>
						<Image
							src='/patment-icon1.webp'
							alt='payements option '
							loading='lazy'
							title='payements options'
							width={250}
							height={250}
						/>
						{/* account payments */}
						<div></div>
					</div>
				</div>
				{/* bootom bottom footer */}
				<div className='flex items-center justify-between'>
					<p className='text-sm font-light dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'>
						Copyright &copy; 2024. All Rights Reserved
					</p>
					<ul className='flex items-center justify-center gap-8'>
						<Link
							className='text-sm font-light dark:text-slate-400 capitalize dark:hover:text-gray-200 text-slate-600'
							href='#'
						>
							Terms of Use
						</Link>
						<Link
							className='text-slate-600 text-sm font-light dark:text-slate-400 capitalize dark:hover:text-gray-200'
							href='#'
						>
							Privacy Policy
						</Link>
						<Link
							className='text-slate-600 text-sm font-light dark:text-slate-400 capitalize dark:hover:text-gray-200'
							href='#'
						>
							Interest-Based Ads
						</Link>
						<Link
							className='text-slate-600 text-sm font-light dark:text-slate-400 capitalize dark:hover:text-gray-200'
							href='#'
						>
							Accessibility
						</Link>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
