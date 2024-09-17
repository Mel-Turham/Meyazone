import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { scaleUp } from '@/helpers/animation';
import { Navigation, Autoplay } from 'swiper/modules';
import { users } from '@/db';
import Testimonial from '@/components/Testimonial';

const UserTestimonial = () => {
	return (
		<section className='py-8'>
			<div className='flex items-center flex-col  justify-center py-4'>
				<motion.h2
					variants={scaleUp}
					initial='exit'
					whileInView='enter'
					className='scroll-m-20  text-3xl font-bold tracking-tight first:mt-0'
				>
					What our customers think
				</motion.h2>
				<p className='leading-3 [&:not(:first-child)]:mt-6'>
					Execellent 4.9 based on 22.181 reviews
				</p>
			</div>
			<div className='container relative'>
				<Swiper
					slidesPerView={4}
					spaceBetween={8}
					modules={[Navigation, Autoplay]}
					navigation={{
						nextEl: '.next-testim',
						prevEl: '.prev-testim',
					}}
					autoplay={{
						delay: 2000,
					}}
					className='w-full mt-4'
				>
					{users.map((user) => {
						return (
							<SwiperSlide key={user.userId}>
								<Testimonial user={user} />
							</SwiperSlide>
						);
					})}
				</Swiper>
				<button className='w-8 h-8 rounded-full absolute flex items-center justify-center dark:bg-slate-700  ring-slate-600 ring-1 prev-testim top-1/2 -translate-y-1/2 left-8 cursor-pointer'>
					<ChevronLeft className='w-5 h-5 ' strokeWidth={1.8} />
				</button>
				<button className='w-8 h-8 rounded-full p-1  flex absolute top-1/2 right-8 -translate-y-1/2 items-center justify-center dark:bg-slate-700  ring-slate-600 ring-1 next-testim cursor-pointer'>
					<ChevronRight className='w-5 h-5 ' strokeWidth={1.8} />
				</button>
			</div>
		</section>
	);
};

export default UserTestimonial;
