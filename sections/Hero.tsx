import Image from 'next/image';
import React from 'react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
		image: '/Sounddevice.webp',
		alt: 'Sounddevice',
	},
	{
		title: 'Shop to get what you love',
		subtitle: 'Timepieces that make a statement',
		discount: '40% off',
		image: '/Smartphones.webp',
		alt: 'Smartphones',
	},
	{
		title: 'The new standard',
		subtitle: 'under favorable smartwatches',
		price: '749',
		image: '/smartwatches-resized.webp',
		alt: 'smartwatches',
	},
];

// Composant pour le contenu de chaque slide
const SlideContent = ({ slide, index }: { slide: Slide; index: number }) => (
	<div className='flex w-full h-full justify-between'>
		<div className='w-6/12 h-full flex flex-col justify-center'>
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
				className='scroll-m-20 text-4xl font-light leading-loose uppercase lg:text-5xl mb-10 mt-5'
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
					src={slide.image}
					alt={slide.alt}
					title=''
					loading='lazy'
					width={400}
					height={350}
					className='object-cover w-full h-full object-top'
				/>
			</motion.div>
		</div>
	</div>
);

const Hero = () => {
	return (
		<section
			className='w-full h-[calc(100dvh-10.9rem)] flex items-center justify-end text-slate-800
		overflow-hidden relative dark:text-white'
		>
			<div className='w-[70%] items-center flex h-full justify-between relative'>
				<Swiper
					className='h-full w-full'
					effect={'fade'}
					autoplay
					modules={[Pagination, Autoplay, EffectFade]}
					slidesPerView={1}
					pagination={{ clickable: true, el: '.heroBullets' }}
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index} className='bg-white dark:bg-slate-950'>
							<SlideContent slide={slide} index={index} />
						</SwiperSlide>
					))}
				</Swiper>

				<div className='heroBullets absolute left-0 bottom-4 z-[2] max-w-fit flex items-center gap-0.5'></div>
			</div>
		</section>
	);
};

export default Hero;
