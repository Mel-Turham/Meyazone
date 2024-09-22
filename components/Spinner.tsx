'use client';
import { motion } from 'framer-motion';

interface LoaderProps {
	size?: number;
	color?: string;
}

export default function Spinner({
	size = 40,
	color = '#3498db',
}: LoaderProps = {}) {
	return (
		<div className='flex items-center justify-center'>
			<motion.div
				style={{
					width: size,
					height: size,
					border: `4px solid ${color}`,
					borderTop: `4px solid transparent`,
					borderRadius: '50%',
				}}
				animate={{ rotate: 360 }}
				transition={{
					duration: 1,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>
		</div>
	);
}
