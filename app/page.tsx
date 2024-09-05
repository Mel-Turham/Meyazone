'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { ArrowRight, Eye, Heart, Repeat, Star } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
// import Swiper core and required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Home = () => {
	return (
		<>
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
			<section className='container py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
				<div className='flex container'>
					<div></div>
					<div></div>
				</div>
			</section>
		</>
	);
};

export default Home;
