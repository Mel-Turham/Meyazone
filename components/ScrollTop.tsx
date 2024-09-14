'use client';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const scrollVariant = {
	hidden: {
		x: 20,
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
		const handleScrollWindow = () => {
			if (window.scrollY > ValueY) {
				setIsInView(true);
			} else {
				setIsInView(false);
			}
		};

		window.addEventListener('scroll', handleScrollWindow);

		return () => {
			window.removeEventListener('scroll', handleScrollWindow);
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
				className='fixed bottom-2 right-3 z-10 '
			>
				<Button size='icon' onClick={goToTop} className='animate-bounce'>
					<ChevronUp className='w-6 h-6' strokeWidth={1.5} />
				</Button>
			</motion.div>
		</>
	);
};

export default ScrollTop;
