import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ReacentProduct = () => {
	return (
		<Card className='rounded'>
			<CardContent className='relative p-0'>
				<Image
					src='/GoldPhone.webp'
					alt='image'
					loading='lazy'
					width={300}
					height={300}
					className='w-full h-full object-cover'
				/>
				<div className='absolute top-4 left-2 bg-red-600 flex flex-col px-4 py-1 rounded text-white'>
					<span className='text-xl font-bold'>02</span>
					<span className='text-sm font-semibold'>oct</span>
				</div>
			</CardContent>
			<CardFooter className='flex-col gap-2 items-start px-4 pb-2'>
				<div className='space-y-2'>
					<CardDescription>New</CardDescription>
					<CardTitle className='text-sm font-light'>
						The number of new cars sold over 20 years
					</CardTitle>
				</div>
				<Button size='sm' className='rounded' variant='outline'>
					<span>Read more</span>
					<ArrowRight className='w-4 h-4 ml-1 leading-6' strokeWidth={1.3} />
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ReacentProduct;