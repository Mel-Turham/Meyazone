'use client';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const scrollVariant = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
	},
};
const ScrollTop = () => {
	const ValueY = 200;
	const [isInView, setIsInView] = useState<boolean>(false);

	useEffect(() => {
		const handleScrollY = () => {
			if (window.scrollY > ValueY) {
				setIsInView(true);
			} else {
				setIsInView(false);
			}
		};

		window.addEventListener('scroll', handleScrollY);
		return () => {
			window.removeEventListener('scroll', handleScrollY);
		};
	}, [isInView]);
	const goToTop = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<>
			<motion.div
				variants={scrollVariant}
				animate={isInView ? 'show' : 'hidden'}
				transition={{ duration: 0.3 }}
				className='fixed bottom-2 right-3 z-10 w-fit h-fit flex items-center justify-center'
			>
				<Button
					size='icon'
					onClick={goToTop}
					className='animate-bounce rounded-full'
				>
					<ChevronUp className='w-7 h-7' strokeWidth={2} />
				</Button>
			</motion.div>
		</>
	);
};

export default ScrollTop;
