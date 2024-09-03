'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Contact = () => {
	const variantFadeUp = {
		hidden: {
			opacity: 0,
			scaleY: 0,
		},
		show: {
			opacity: 1,
			scaleY: 1,
		},
	};
	return (
		<div className='container py-8'>
			<motion.h1
				variants={variantFadeUp}
				animate={'show'}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'
			>
				The Joke Tax Chronicles
			</motion.h1>
			<motion.p
				initial={{ y: '20%', opacity: 0 }}
				animate={{ y: '0', opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className='leading-7 [&:not(:first-child)]:mt-6'
			>
				Once upon a time, in a far-off land, there was a very lazy king who
				spent all day lounging on his throne. One day, his advisors came to him
				with a problem: the kingdom was running out of money.
			</motion.p>
			<h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
				The King&apos;s Plan
			</h2>
			<Link href='/'>Back home</Link>
		</div>
	);
};

export default Contact;
