'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CategroryLinks, products } from '@/db';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	ArrowRight,
	Eye,
	Heart,
	Repeat,
	ShoppingCart,
	Star,
} from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
// import Swiper core and required modules
import { Pagination, Autoplay, EffectFade, Grid } from 'swiper/modules';
import TabFeatured from '@/components/TabFeatured';
import { TabTypes } from '@/types';
import TabOnsale from '@/components/TabOnsale';
import TabTopRated from '@/components/TabTopRated';
import Link from 'next/link';

const Home = () => {
	const [activeTab, setActiveTab] = useState<TabTypes>('featured');
	const TabFeaturedProducts = products.slice(0, 6);
	const TabOnSaleProducts = products.slice(7, 13);
	const TabTopRatedProducts = products.slice(14, 20);
	const BestSellersProducts = products.slice(0, 10);

	const CategoriesProducts = TabTopRatedProducts.slice(0, 5);
	return (
		<>
			{/* Hero section */}
			<section className='w-full h-[calc(100dvh-10.9rem)] flex items-center justify-end text-gray-500 bg-white overflow-hidden relative dark:bg-black dark:text-gray-100'>
				<div className='w-[70%] items-center flex h-full justify-between'>
					<Swiper
						className='h-full'
						effect={'fade'}
						autoplay
						modules={[Pagination, Autoplay, EffectFade]}
						slidesPerView={1}
						pagination={{ clickable: true }}
					>
						<SwiperSlide className='bg-white dark:bg-black'>
							<div className='flex w-full h-full justify-between'>
								<div className='w-6/12 h-full flex flex-col justify-center'>
									<motion.p
										initial={{ opacity: 0, x: 100 }}
										animate={{ opacity: 1, x: 0 }}
										className='scroll-m-20 text-xl font-semibold uppercase tracking-tight text-sky-400'
									>
										Shop to get what you love
									</motion.p>
									<motion.h2
										initial={{ opacity: 0, scale: 1.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.8, ease: 'easeInOut' }}
										className='scroll-m-20 text-4xl font-thin leading-loose uppercase lg:text-5xl mb-10 mt-5'
									>
										Timepieces that make a statement
										<br />
										up to
										<span className='font-black ml-2'>40% off</span>
									</motion.h2>
									<motion.div
										initial={{ y: '-50%', opacity: 0 }}
										animate={{ y: '0%', opacity: 1 }}
										transition={{ delay: 1, ease: 'linear' }}
									>
										<Button
											className='bg-[#EF7C1A] font-normal text-lg hover:bg-[#A54B17] text-black hover:text-white capitalize transition-all duration-300 ease-in-out w-52'
											size='lg'
										>
											Start buying
										</Button>
									</motion.div>
								</div>
								<div className='w-6/12 h-full relative overflow-hidden'>
									<motion.div
										className='absolute w-full h-full dark:bg-black z-[2] bg-white'
										initial={{ x: 0 }}
										animate={{ x: 600 }}
										transition={{
											stiffness: 100,
											type: 'tween',
											duration: 2,
											ease: 'linear',
										}}
									></motion.div>
									<motion.div
										className='h-full w-full'
										initial={{ x: 300 }}
										animate={{ x: 0 }}
										transition={{
											stiffness: 100,
											type: 'tween',
											duration: 2,
											ease: 'linear',
										}}
									>
										<Image
											src='/Sounddevice.webp'
											alt='Sounddevice'
											title=''
											loading='lazy'
											width={500}
											height={300}
											className='object-cover h-full w-full'
										/>
									</motion.div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='bg-white dark:bg-black'>
							<div className='flex w-full h-full justify-between'>
								<div className='w-6/12 h-full flex flex-col justify-center'>
									<motion.p
										initial={{ opacity: 0, x: 100 }}
										animate={{ opacity: 1, x: 0 }}
										className='scroll-m-20 text-xl font-semibold uppercase tracking-tight text-sky-400'
									>
										Shop to get what you love
									</motion.p>
									<motion.h2
										initial={{ opacity: 0, scale: 1.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.8, ease: 'easeInOut' }}
										className='scroll-m-20 text-4xl font-thin leading-loose uppercase lg:text-5xl mb-10 mt-5'
									>
										Timepieces that make a statement
										<br />
										up to
										<span className='font-black ml-2'>40% off</span>
									</motion.h2>
									<motion.div
										initial={{ y: '-50%', opacity: 0 }}
										animate={{ y: '0%', opacity: 1 }}
										transition={{ delay: 1, ease: 'linear' }}
									>
										<Button
											className='bg-[#EF7C1A] font-normal text-lg hover:bg-[#A54B17] text-black hover:text-white capitalize transition-all duration-300 ease-in-out w-52'
											size='lg'
										>
											Start buying
										</Button>
									</motion.div>
								</div>
								<div className='w-6/12 h-full relative overflow-hidden'>
									<motion.div
										className='absolute w-full h-full dark:bg-black z-[2] bg-white'
										initial={{ x: 0 }}
										animate={{ x: 600 }}
										transition={{
											stiffness: 100,
											type: 'tween',
											duration: 2,
											ease: 'linear',
										}}
									></motion.div>
									<motion.div
										className='h-full w-full'
										initial={{ x: 300 }}
										animate={{ x: 0 }}
										transition={{
											stiffness: 100,
											type: 'tween',
											duration: 2,
											ease: 'linear',
										}}
									>
										<Image
											src='/Smartphones.webp'
											alt='Smartphones'
											title=''
											loading='lazy'
											width={500}
											height={300}
											className='object-cover h-full w-full'
										/>
									</motion.div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='bg-white dark:bg-black'>
							<div className='flex w-full h-full justify-between'>
								<div className='w-6/12 h-full flex flex-col justify-center'>
									<motion.h2
										initial={{ opacity: 0, scale: 1.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.8, ease: 'easeInOut' }}
										className='scroll-m-20 text-4xl font-thin leading-loose uppercase lg:text-6xl mb-10 '
									>
										<p>The new standard </p>
										<p className='text-base my-5 font-semibold'>
											under favorable smartwatches
										</p>

										<p className='text-sm mb-2'>From</p>
										<p className='font-black mt-3'>
											<sup>$</sup>749<sup>99</sup>
										</p>
									</motion.h2>
									<motion.div
										initial={{ y: '-50%', opacity: 0 }}
										animate={{ y: '0%', opacity: 1 }}
										transition={{ delay: 1, ease: 'linear' }}
									>
										<Button
											className='bg-[#EF7C1A] font-normal text-lg hover:bg-[#A54B17] text-black hover:text-white capitalize transition-all duration-300 ease-in-out w-52'
											size='lg'
										>
											Start buying
										</Button>
									</motion.div>
								</div>
								<div className='w-6/12 h-full relative overflow-hidden'>
									<motion.div
										className='absolute w-full h-full dark:bg-black z-[2] bg-white'
										initial={{ x: 0 }}
										animate={{ x: 600 }}
										transition={{
											stiffness: 100,
											type: 'tween',
											duration: 2,
											ease: 'linear',
										}}
									></motion.div>
									<motion.div
										className='h-full w-full'
										initial={{ x: 300 }}
										animate={{ x: 0 }}
										transition={{
											stiffness: 100,
											type: 'tween',
											duration: 2,
											ease: 'linear',
										}}
									>
										<Image
											src='/smartwatches-resized.webp'
											alt='smartwatches'
											title=''
											loading='lazy'
											width={500}
											height={300}
											className='object-cover h-full w-full object-left'
										/>
									</motion.div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
			{/* top products section */}
			<section className='container py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<Card className='dark:bg-slate-900 rounded-none py-4 cursor-pointer bg-white/40 hover:dark:bg-slate-800 transition-all duration-300 ease-in-out shadow-sm dark:shadow-none hover:scale-105 group'>
					<CardContent className='flex  mb-0 pb-0  gap-8'>
						<div className='w-5/12 h-full '>
							<Image
								src='/laptop.webp'
								alt='laptop'
								loading='lazy'
								width={250}
								height={250}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-7/12 '>
							<CardTitle className='font-normal capitalize space-y-1'>
								<p>Tablets smartphones</p>
								<div className='flex items-center'>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
								</div>
							</CardTitle>
						</div>
					</CardContent>
					<div className='flex items-center justify-end px-10 text-[#EF7C1A] font-semibold my-2'>
						$99.0
					</div>
					<CardFooter className='pb-0 flex items-center justify-between pt-2'>
						<div className='flex items-center justify-center gap-3 '>
							<Heart
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
							<Repeat
								className='w-5 h-5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 '
								strokeWidth={1.5}
							/>
							<Eye
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
						</div>
						<Button size='sm' className='rounded' variant='outline'>
							<span>Add to cart</span>
							<ArrowRight className='w-5 h-5 ml-2 ' strokeWidth={1} />
						</Button>
					</CardFooter>
				</Card>
				<Card className='dark:bg-slate-900 rounded-none py-4 cursor-pointer bg-gray-50 hover:dark:bg-slate-800 transition-all duration-300 ease-in-out shadow-sm dark:shadow-none hover:scale-105 group'>
					<CardContent className='flex  mb-0 pb-0  gap-8'>
						<div className='w-5/12 h-full '>
							<Image
								src='/laptop.webp'
								alt='laptop'
								loading='lazy'
								width={250}
								height={250}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-7/12 '>
							<CardTitle className='font-normal capitalize space-y-1'>
								<p>Tablets smartphones</p>
								<div className='flex items-center'>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
								</div>
							</CardTitle>
						</div>
					</CardContent>
					<div className='flex items-center justify-end px-10 text-[#EF7C1A] font-semibold my-2'>
						$99.0
					</div>
					<CardFooter className='pb-0 flex items-center justify-between pt-2'>
						<div className='flex items-center justify-center gap-3 '>
							<Heart
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
							<Repeat
								className='w-5 h-5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 '
								strokeWidth={1.5}
							/>
							<Eye
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
						</div>
						<Button size='sm' className='rounded' variant='outline'>
							<span>Add to cart</span>
							<ArrowRight className='w-5 h-5 ml-2 ' strokeWidth={1} />
						</Button>
					</CardFooter>
				</Card>
				<Card className='dark:bg-slate-900 rounded-none py-4 cursor-pointer bg-gray-50 hover:dark:bg-slate-800 transition-all duration-300 ease-in-out shadow-sm dark:shadow-none hover:scale-105 group'>
					<CardContent className='flex  mb-0 pb-0  gap-8'>
						<div className='w-5/12 h-full '>
							<Image
								src='/laptop.webp'
								alt='laptop'
								loading='lazy'
								width={250}
								height={250}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-7/12 '>
							<CardTitle className='font-normal capitalize space-y-1'>
								<p>Tablets smartphones</p>
								<div className='flex items-center'>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
								</div>
							</CardTitle>
						</div>
					</CardContent>
					<div className='flex items-center justify-end px-10 text-[#EF7C1A] font-semibold my-2'>
						$99.0
					</div>
					<CardFooter className='pb-0 flex items-center justify-between pt-2'>
						<div className='flex items-center justify-center gap-3 '>
							<Heart
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
							<Repeat
								className='w-5 h-5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 '
								strokeWidth={1.5}
							/>
							<Eye
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
						</div>
						<Button size='sm' className='rounded' variant='outline'>
							<span>Add to cart</span>
							<ArrowRight className='w-5 h-5 ml-2 ' strokeWidth={1} />
						</Button>
					</CardFooter>
				</Card>
			</section>
			{/* tab sections*/}
			<section className=' container w-full gap-5 grid grid-cols-3 overflow-hidden pb-5'>
				<div className='col-span-1'>
					<Card className='cursor-pointer rounded'>
						<CardHeader>
							<CardTitle className='font-light'>Offer special</CardTitle>
						</CardHeader>
						<CardContent>
							<Image
								src='/consal.webp'
								alt='consal'
								loading='lazy'
								width={400}
								height={700}
								className='w-full h-full object-contain'
								title='consal'
							/>
							<h3 className='text-center scroll-m-20 text-sm font-semibold tracking-tight text-blue-600 '>
								Game Console Controller + USB 3.0 Cable
							</h3>
							<p className='scroll-m-20 text-3xl font-normal text-slate-500 tracking-tight first:mt-0 text-center mt-10 mb-5 dark:text-slate-100'>
								$99.0
							</p>
						</CardContent>
						<CardFooter className='flex-col gap-3'>
							<div className='flex items-center justify-between w-full'>
								<p className='text-slate-500 text-xs dark:text-slate-100'>
									Already Sold: <span className='font-bold '>81</span>
								</p>
								<p className='text-slate-500 text-xs dark:text-slate-100'>
									Available: <span className='font-bold'>19</span>
								</p>
							</div>
							<div className='relative w-full rounded-full bg-gray-100 shadow-inner overflow-hidden h-[10px] dark:bg-slate-800'>
								<div className='absolute top-0 left-0 w-9/12 bg-[#EF7C1A] h-full rounded-full'></div>
							</div>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-2'>
					<div
						className='w-full flex items-center justify-center  border-b border-solid border-gray-200 dark:border-white mb-5 gap-10 font-light text-slate-500
					dark:text-slate-100
					'
					>
						<button
							onClick={() => setActiveTab('featured')}
							aria-label='tab-bar '
							className={`pb-2 relative flex items-center justify-center tracking-wide 
								
								${
									activeTab === 'featured'
										? 'before:w-full before:absolute before:-bottom-[0.3px] before:left-0 before:h-[1.5px] before:rounded before:bg-[#EF7C1A] after:absolute after:w-[12px] after:h-1 after:rounded-full after:-bottom-[2.8px] after:bg-[#EF7C1A] after:mx-auto after:left-[50%] after:-translate-x-[50%] font-bold '
										: ''
								}
								
								`}
						>
							Featured
						</button>

						<button
							onClick={() => setActiveTab('onsale')}
							aria-label='tab-bar'
							className={`pb-2 relative flex items-center justify-center tracking-wide 
								
								${
									activeTab === 'onsale'
										? 'before:w-full before:absolute before:-bottom-[0.3px] before:left-0 before:h-[1.5px] before:rounded before:bg-[#EF7C1A] after:absolute after:w-[12px] after:h-1 after:rounded-full after:-bottom-[2.8px] after:bg-[#EF7C1A] after:mx-auto after:left-[50%] after:-translate-x-[50%] font-bold '
										: ''
								}
								
								`}
						>
							On Sale
						</button>
						<button
							onClick={() => setActiveTab('toprated')}
							aria-label='tab-bar'
							className={`pb-2 relative flex items-center justify-center tracking-wide 
								
								${
									activeTab === 'toprated'
										? 'before:w-full before:absolute before:-bottom-[0.3px] before:left-0 before:h-[1.5px] before:rounded before:bg-[#EF7C1A] after:absolute after:w-[12px] after:h-1 after:rounded-full after:-bottom-[2.8px] after:bg-[#EF7C1A] after:mx-auto after:left-[50%] after:-translate-x-[50%] font-bold '
										: ''
								}
								
								`}
						>
							Top Rated
						</button>
					</div>
					<div className='w-full grid grid-cols-3 gap-2'>
						{activeTab === 'featured' && (
							<TabFeatured tabFeaturedProducts={TabFeaturedProducts} />
						)}

						{activeTab === 'onsale' && (
							<TabOnsale tabOnSaleProducts={TabOnSaleProducts} />
						)}
						{activeTab === 'toprated' && (
							<TabTopRated tabTopRated={TabTopRatedProducts} />
						)}
					</div>
				</div>
			</section>
			{/* Section categories */}
			<section className='container bg-[#F4F4F4] dark:bg-slate-900 pt-6 pb-8 '>
				<nav className=' w-full flex items-center justify-center h-3/12'>
					<ul className='flex w-full justify-evenly items-center gap-5 border-b border-solid border-slate-200 dark:border-gray-300'>
						{CategroryLinks.map((link, index) => (
							<Link
								className={`py-4 relative text-sm  ${
									index === 0
										? 'before:w-full before:absolute before:-bottom-[0.3px] before:left-0 before:h-[1.8px] before:rounded before:bg-[#EF7C1A] after:absolute after:w-[12px] after:h-1 after:rounded-full after:-bottom-[2.8px] after:bg-[#EF7C1A] after:mx-auto after:left-[50%] after:-translate-x-[50%] font-bold '
										: 'font-light'
								}`}
								key={index}
								href={link.href}
							>
								{link.link}
							</Link>
						))}
					</ul>
				</nav>
				<div className=' grid grid-cols-4 gap-1  grid-rows-2 mt-4 [&>*:nth-child(2)]:col-start-2 [&>*:nth-child(2)]:col-end-4 [&>*:nth-child(2)]:row-start-1 [&>*:nth-child(2)]:row-end-3 min-h-[80%]'>
					{CategoriesProducts.map((product) => {
						return (
							<article
								key={product.id}
								className='h-full w-full overflow-hidden cursor-pointer'
							>
								<Card className='rounded  w-full h-full overflow-hidden flex flex-col ga-1 justify-between'>
									<CardHeader className='px-3'>
										<CardDescription className='flex items-center gap-2'>
											{product.category?.name.map((categories, index) => {
												return (
													<span className='text-xs mb-0.5 ' key={index}>
														{categories}
													</span>
												);
											})}
										</CardDescription>
										<CardTitle className='text-sm font-semibold text-blue-600  mb-0'>
											{product.name}
										</CardTitle>
									</CardHeader>
									<CardContent className=' px-3 mt-0 '>
										<Image
											src={product.image}
											alt={product.name}
											width={300}
											height={300}
											className='w-full h-full object-cover'
											loading='lazy'
										/>
									</CardContent>
									<CardFooter className='px-3  justify-between  items-center'>
										<span className='text-xl'>${product.price}</span>
										<Button
											aria-label='add to cart'
											size={'icon'}
											className='rounded-full'
										>
											<ShoppingCart className='w-6 h-6' strokeWidth={1.5} />
										</Button>
									</CardFooter>
								</Card>
							</article>
						);
					})}
				</div>
			</section>
			{/* Best sellers component section */}

			<section className='container py-6 '>
				<div className='flex items-center justify-between relative border-b border-solid
				text-gray-600 dark:text-gray-100 border-gray-300'>
					<h3 className='text-xl  font-medium relative before:absolute before:left-0 before:top-[100%] before:rounded-sm before:bg-[#EF7C1A] before:w-full before:h-1 before:translate-y-[-50%] pb-3'>Best Sellers</h3>
					<nav className='font-light text-xs pb-3'>
						<ul className='flex items-center justify-center gap-5'>
							<li className='px-2 py-1 border-2 border-solid border-[#EF7C1A] rounded-full'>Top 20</li>
							<li className='px-2 py-1 cursor-pointer hover:text-slate-400 transition-all duration-300 ease-in-out'>Smart Phones & Tablets</li>
							<li className='px-2 py-1 cursor-pointer hover:text-slate-400 transition-all duration-300 ease-in-out'>Laptops and Computers</li>
							<li className='px-2 py-1 cursor-pointer hover:text-slate-400 transition-all duration-300 ease-in-out'>Video Cameras</li>
						</ul>
					</nav>
				</div>
				<div
					className=' w-full grid grid-col-1 overflow-hidden h-[27.5rem]
				mt-6'
				>
					<Swiper
						className='w-full h-full'
						slidesPerView={3}
						autoplay
						modules={[Grid, Pagination, Autoplay]}
						grid={{
							rows: 2,
						}}
						spaceBetween={10}
						pagination={{
							clickable: true,
						}}
					>
						{BestSellersProducts.map((product) => {
							return (
								<SwiperSlide key={product.id}>
									<Card className='rounded-none flex gap-4 p-4 cursor-pointer shadow-none hover:shadow-md transition-all duration-300 ease-in-out h-[185px]'>
										<div className='h-full w-[55%] relative'>
											<Image
												src={product.image}
												alt={product.name}
												loading='lazy'
												width={500}
												height={500}
												className='object-contain w-full h-full overflow-none'
											/>
										</div>
										<div className='flex flex-col h-full justify-between'>
								<div>
											<p className='flex items-center  gap-1 text-gray-400 text-xs font-light'>
												{product.category?.name.map((categorie, index) => {
													return (
														<span key={index}>{categorie}</span>
													);
												})}
										</p>
											<h4 className='font-semibold text-blue-600 mt-2'>
												{product.name}
										</h4>
								</div>
											<div className='flex items-center justify-between mt-auto '>
												<span className='font-medium text-xl text-gray-600 '>
													${product.price}
												</span>
												<Button size='icon' className='rounded-full p-0'>
													<ShoppingCart className='w-6 h-6' strokeWidth={1.5} />
												</Button>
											</div>
										</div>
									</Card>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</section>

			{/* section pub */}
			<section className='container py-8'>
				<Link href='#'>
				 <Image src='/home-banner.webp' alt='publication' loading='lazy' width={500} height={600} className='w-full h-full object-cover cursor-pointer'/>
				</Link>
			</section>
		</>
	);
};

export default Home;
