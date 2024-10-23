import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const RecentPostCard = () => {
	return (
		<Link href={'#'}>
			<Card className='relative font-serif rounded'>
				<CardHeader>
					<CardTitle>Find Your Next Course Faster: Search By Skill</CardTitle>
					<CardDescription> -james jackson</CardDescription>
					<CardContent className='px-1.5 space-y-4'>
						<div className='flex items-center gap-2 uppercase '>
							<h3 className='text-sm font-semibold cursor-pointer'>Smart/</h3>
							<CardDescription className='cursor-pointer'>
								by james jackson
							</CardDescription>
						</div>
						<h4 className='text-xl font-semibold'>
							Find Your Next Course Faster: Search By Skill
						</h4>
					</CardContent>
					<CardFooter className='px-2 pb-1 justify-between font-sans text-sm'>
						<Button size={'sm'} variant={'outline'}>
							View more
						</Button>
						<span>12/July/2024</span>
					</CardFooter>
				</CardHeader>
			</Card>
		</Link>
	);
};

export default RecentPostCard;
