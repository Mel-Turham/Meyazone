import Image from 'next/image';
import React from 'react';
import {
	Pagination,
	Autoplay,
	EffectFade,
	Grid,
	Navigation,
} from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
	return (
		<section className='w-full h-[calc(100dvh-10.9rem)] flex items-center justify-end text-gray-500 bg-white overflow-hidden relative dark:bg-black dark:text-gray-100'>
			<div className='w-[70%] items-center flex h-full justify-between relative'>
				<Swiper
					className='h-full'
					effect={'fade'}
					autoplay
					modules={[Pagination, Autoplay, EffectFade]}
					slidesPerView={1}
					pagination={{ clickable: true, el: '.heroBullets' }}
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
									className='scroll-m-20 text-4xl font-light leading-loose uppercase lg:text-5xl mb-10 mt-5'
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
										className='bg-myprimary font-normal text-lg hover:bg-myseconary text-black hover:text-white capitalize transition-all duration-300 ease-in-out w-52'
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
										width={400}
										height={200}
										className='object-contain w-full h-full object-top'
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
									className='scroll-m-20 text-4xl font-light leading-loose uppercase lg:text-5xl mb-10 mt-5'
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
										className='bg-myprimary font-normal text-lg hover:bg-myseconary text-black hover:text-white capitalize transition-all duration-300 ease-in-out w-52'
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
										width={400}
										height={350}
										className='object-cover w-full h-full object-top'
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
									<p className='text-base my-5 font-light'>
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

				<div className='heroBullets absolute left-0 bottom-4 z-20 max-w-fit flex items-center gap-0.5'></div>
			</div>
		</section>
	);
};

export default Hero;
