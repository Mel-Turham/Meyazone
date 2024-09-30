import Image from 'next/image';
import React from 'react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import './hero.css';
type Slide = {
	title: string;
	subtitle: string;
	discount?: string;
	price?: string;
	image: string;
	alt: string;
};

// Définition des slides pour le carrousel
const slides = [
	{
		title: 'Shop to get what you love',
		subtitle: 'Timepieces that make a statement',
		discount: '40% off',
		image: '/product-28.png',
		alt: 'Sounddevice',
	},
	{
		title: 'Shop to get what you love',
		subtitle: 'Timepieces that make a statement',
		discount: '40% off',
		image: '/product-93.png',
		alt: 'Smartphones',
	},
	{
		title: 'The new standard',
		subtitle: 'under favorable smartwatches',
		price: '749',
		image: '/product-22.png',
		alt: 'smartwatches',
	},
];

// Composant pour le contenu de chaque slide
const SlideContent = ({ slide, index }: { slide: Slide; index: number }) => (
	<div className='flex w-full h-full justify-between'>
		<div className='w-7/12 h-full flex flex-col justify-center space-y-5'>
			<motion.p
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				className='scroll-m-20 text-xl font-semibold uppercase tracking-tight text-sky-400'
			>
				{slide.title}
			</motion.p>
			<motion.h2
				initial={{ opacity: 0, scale: 1.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.8, ease: 'easeInOut' }}
				className='scroll-m-20 font-light leading-7  uppercase lg:text-6xl'
			>
				{slide.subtitle}
				<br />
				{slide.discount && (
					<>
						up to
						<span className='font-black ml-2'>{slide.discount}</span>
					</>
				)}
				{slide.price && (
					<>
						<p className='text-sm mb-2 mt-3'>From</p>
						<p className='font-black mt-3'>
							<sup>$</sup>
							{slide.price}
							<sup>99</sup>
						</p>
					</>
				)}
			</motion.h2>
			<motion.div
				initial={{ y: '-50%', opacity: 0 }}
				animate={{ y: '0%', opacity: 1 }}
				transition={{ delay: 1, ease: 'linear' }}
			>
				<Button
					className='bg-myprimary font-normal text-sm hover:bg-myseconary text-black hover:text-white capitalize transition-all duration-300 ease-in-out w-52'
					size='lg'
				>
					Start buying
				</Button>
			</motion.div>
		</div>
		<div className='w-5/12 h-full relative overflow-hidden'>
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
					src={slide.image}
					alt={slide.alt}
					title=''
					loading='lazy'
					width={300}
					height={250}
					className='object-contain w-full h-full object-top'
				/>
			</motion.div>
		</div>
	</div>
);
// hero component
const Hero = () => {
	return (
		<div className='w-full container items-center flex h-full justify-between relative container-hero'>
			<Swiper
				className='h-full w-full'
				effect={'fade'}
				autoplay
				modules={[Pagination, Autoplay, EffectFade]}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index} className=''>
						<SlideContent slide={slide} index={index} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
