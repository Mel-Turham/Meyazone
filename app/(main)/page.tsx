'use client';
import type { Metadata } from 'next';
import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BrandsImages, CategroryLinks } from '@/db';
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
	ChevronLeft,
	Eye,
	Heart,
	Repeat,
	ShoppingCart,
	Star,
	ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
// import Swiper core and required modules
import { Pagination, Autoplay, Grid, Navigation } from 'swiper/modules';
import TabFeatured from '@/components/TabFeatured';
import { TabTypes } from '@/types';
import TabOnsale from '@/components/TabOnsale';
import TabTopRated from '@/components/TabTopRated';
import Link from 'next/link';
import Braind from '@/components/Braind';
import ReacentProduct from '@/components/ReacentProduct';
import Hero from '@/sections/Hero';
import UserTestimonial from '@/sections/UserTestimonial';
import FeaturedCategories from '@/sections/FeaturedCategories';

import { getSubCategories } from '@/utils/getSubCategories';
import { getAllProducts } from '@/utils/getProducts';
import formatPrice from '@/utils/formatPrice';
import { useCurrencyStore } from '@/store/useCurrencyStore';
import Pricing from '@/components/Pricing';
export const metadeta: Metadata = {
	title: 'Meyazone Home',
	description: 'Meyazone e-commerce web site ',
};

const Home = () => {
	const products = getAllProducts();
	const [activeTab, setActiveTab] = useState<TabTypes>('featured');
	const TabFeaturedProducts = useMemo(() => products.slice(0, 6), [products]);
	const TabOnSaleProducts = useMemo(() => products.slice(7, 13), [products]);
	const TabTopRatedProducts = useMemo(() => products.slice(14, 20), [products]);
	const BestSellersProducts = useMemo(() => products.slice(0, 10), [products]);
	const CategoriesProducts = useMemo(
		() => TabTopRatedProducts.slice(0, 5),
		[TabTopRatedProducts],
	);
	const subCategories = getSubCategories();
	const { currency } = useCurrencyStore();

	return (
		<>
			{/* Hero section */}

			<section
				className='section-hero  w-full h-[calc(100dvh-10.9rem)] flex items-center justify-end text-slate-800
		overflow-hidden relative bg-bg-hero bg-cover bg-center'
			>
				<Hero />
			</section>
			<section className='py-8 dark:bg-slate-900 mt-8 bg-gray-300/15'>
				<FeaturedCategories subCategories={subCategories} />
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
				<div className='col-span-1 flex flex-col gap-2'>
					<Card className='cursor-pointer rounded dark:bg-slate-900'>
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
					<Image
						src='/banner.jpg'
						alt='image'
						width={200}
						height={150}
						loading='lazy'
						className='w-[400px] object-cover h-[260px]'
					/>
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
			<section className='container bg-[#F4F4F4] dark:bg-slate-950 pt-6 pb-8 '>
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
							<Link
								href={`/product/${product.id}`}
								key={product.id}
								className='h-full w-full overflow-hidden cursor-pointer'
							>
								<Card className='rounded dark:bg-slate-900  w-full h-full overflow-hidden flex flex-col ga-1 justify-between'>
									<CardHeader className='px-3'>
										<CardDescription className='flex items-center gap-2'>
											categorie
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
										<span className='text-xl'>
											{formatPrice(product.price, currency)}
										</span>
										<Button
											aria-label='add to cart'
											size={'icon'}
											className='rounded-full'
										>
											<ShoppingCart className='w-6 h-6' strokeWidth={1.5} />
										</Button>
									</CardFooter>
								</Card>
							</Link>
						);
					})}
				</div>
			</section>
			{/* Best sellers component section */}

			<section className='container py-6 '>
				<div
					className='flex items-center justify-between relative border-b border-solid
				text-gray-600 dark:text-gray-100 border-gray-300'
				>
					<h3 className='text-xl  font-semibold relative before:absolute before:left-0 before:top-[100%] before:rounded-sm before:bg-myprimary before:w-full before:h-1 before:translate-y-[-50%] pb-3'>
						Best Sellers
					</h3>
					<nav className='font-light text-xs pb-3'>
						<ul className='flex items-center justify-center gap-5'>
							<li className='px-2 py-1 border-2 border-solid border-myprimary rounded-full'>
								Top 20
							</li>
							<li className='px-2 py-1 cursor-pointer hover:text-slate-400 transition-all duration-300 ease-in-out'>
								Smart Phones & Tablets
							</li>
							<li className='px-2 py-1 cursor-pointer hover:text-slate-400 transition-all duration-300 ease-in-out'>
								Laptops and Computers
							</li>
							<li className='px-2 py-1 cursor-pointer hover:text-slate-400 transition-all duration-300 ease-in-out'>
								Video Cameras
							</li>
						</ul>
					</nav>
				</div>
				<div
					className=' w-full grid grid-col-1 overflow-hidden h-[25.8rem]
				mt-6'
				>
					<Swiper
						className='w-full h-full'
						slidesPerView={3}
						autoplay
						modules={[Grid, Autoplay]}
						grid={{
							rows: 2,
						}}
						spaceBetween={10}
					>
						{BestSellersProducts.map((product) => {
							return (
								<SwiperSlide key={product.id}>
									<Link href={`/product/${product.id}`}>
										<Card className='rounded-none dark:bg-slate-900 flex gap-4 p-4 cursor-pointer shadow-none hover:shadow-md transition-all duration-300 ease-in-out h-[185px]'>
											<div className='h-full w-[45%] relative'>
												<Image
													src={product.image}
													alt={product.name}
													loading='lazy'
													width={200}
													height={200}
													className='object-contain w-full h-full overflow-none'
												/>
											</div>
											<div className='flex flex-col h-full justify-betweenw-[55%]'>
												<div>
													<p className='flex items-center  gap-1 text-gray-400 text-xs font-light'>
														categorie
													</p>
													<h4 className='font-semibold text-blue-600 mt-2'>
														{product.name}
													</h4>
												</div>
												<div className='flex items-center justify-between mt-auto '>
													<div className='flex items-center flex-col gap-1'>
														<span className='text-red-600 text-xs font-medium line-through'>
															{formatPrice(
																product?.oldPrice as number,
																currency,
															)}
														</span>
														<span className='font-medium text-lg text-gray-600 dark:text-gray-100 '>
															{formatPrice(product.price, currency)}
														</span>
													</div>
													<Button size='icon' className='rounded-full p-0'>
														<ShoppingCart
															className='w-6 h-6'
															strokeWidth={1.5}
														/>
													</Button>
												</div>
											</div>
										</Card>
									</Link>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</section>

			{/* section pub */}
			<section className='container py-8'>
				<Link href='#'>
					<Image
						src='/home-banner.webp'
						alt='publication'
						loading='lazy'
						width={500}
						height={600}
						className='w-full h-full object-cover cursor-pointer'
					/>
				</Link>
			</section>
			{/* recend added */}
			<section className='container pt-5 pb-7 relative'>
				<div
					className='flex items-center justify-between relative border-b border-solid
				text-gray-600 dark:text-gray-100 border-gray-300'
				>
					<h3 className='text-xl  relative before:absolute before:left-0 before:-bottom-[7.5px] before:rounded-sm before:bg-myprimary before:w-full before:h-1 before:translate-y-[-50%] pb-2 font-semibold'>
						Recently Added
					</h3>
					<div className='flex items-center gap-5 pb-3'>
						<div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer dark:bg-slate-700  ring-slate-600 custom-prev'>
							<ChevronLeft
								className='w-6 h-6 cursor-pointer '
								strokeWidth={1.8}
							/>
						</div>

						<div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer dark:bg-slate-700  ring-slate-600  custom-next'>
							<ChevronRight
								className='w-6 h-6 cursor-pointer'
								strokeWidth={1.8}
							/>
						</div>
					</div>
				</div>
				<Swiper
					slidesPerView={4}
					modules={[Navigation]}
					spaceBetween={8}
					className='mt-7  '
					navigation={{
						nextEl: '.custom-next',
						prevEl: '.custom-prev',
					}}
					cssMode={true}
				>
					{products.slice(10, 20).map((product, index) => {
						return (
							<SwiperSlide key={product.id}>
								<Link href={`/product/${product.id}`}>
									<Card className='rounded-sm h-[350px] mt-2 dark:bg-slate-900 flex flex-col justify-between'>
										<CardHeader>
											<CardDescription className='flex items-center gap-1'>
												Categorie
											</CardDescription>
											<CardTitle className='text-lg font-semibold text-blue-600  mb-0'>
												{product.name}
											</CardTitle>
										</CardHeader>
										<CardContent className='flex items-center justify-center h-[200px'>
											<article className=' flex items-center'>
												<Image
													src={product.image}
													width={100}
													height={100}
													alt={product.name}
													title={product.name}
													loading='lazy'
													className='w-[90%] h-[90%] object-contain'
												/>
											</article>
										</CardContent>
										<CardFooter className='px-3  justify-between  items-center'>
											<span className='text-xl'>
												{formatPrice(product.price, currency)}
											</span>
											<Button
												aria-label='add to cart'
												size={'icon'}
												className='rounded-full'
											>
												<ShoppingCart className='w-6 h-6' strokeWidth={1.5} />
											</Button>
										</CardFooter>
									</Card>
								</Link>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
			{/* users testimonials */}
			<UserTestimonial />

			<Pricing />

			<section className='py-8'>
				<div className='container  gap-2 border-y border-solid border-gray-200 grid grid-cols-6 py-4 dark:border-slate-800'>
					{BrandsImages.map((img) => {
						return <Braind key={img.id} image={img} />;
					})}
				</div>
			</section>
			<section className='py-8 '>
				<div className='container w-full flex gap-4'>
					<div className='flex flex-col gap-2 w-1/4'>
						<h4 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
							Guides and articles
						</h4>
						<p className='leading-7 [&:not(:first-child)]:mt-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							optio alias minus omnis enim fugit nemo officiis ullam nihil
							commodi?
						</p>
						<Button size='sm' className='rounded w-fit' variant='outline'>
							<span>Read more</span>
							<ArrowRight
								className='w-4 h-4 ml-1 leading-6'
								strokeWidth={1.3}
							/>
						</Button>
					</div>
					<div className='w-3/4 relative'>
						<Swiper
							className='w-full'
							slidesPerView={3}
							spaceBetween={8}
							modules={[Pagination]}
							pagination={{
								clickable: true,
								el: '.custom-bullets-aded',
							}}
						>
							<SwiperSlide>
								<ReacentProduct image='/article-1.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<ReacentProduct image='/article-2.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<ReacentProduct image='/article-3.jpg' />
							</SwiperSlide>
						</Swiper>
						<div className='custom-bullets-aded absolute -bottom-5 left-1/2  z-10 w-fit flex items-center gap-[3px]  cursor-pointer'></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
