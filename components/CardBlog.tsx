import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardBlog = () => {
	return (
		<Card className='border-none'>
			<CardContent className='min-h-[2rem] cursor-pointer group p-0 relative overflow-hidden rounded-xl'>
				<Image
					src={'/article-2.jpg'}
					alt=''
					height={400}
					width={400}
					className='w-full h-full object-cover'
				/>
				<div className='absolute top-0 left-0 w-full transition duration-300 ease-in-out h-full group-hover:bg-black/50'></div>
				<div className='absolute -top-10 -right-14 w-[130px] h-[130px] bg-myprimary flex items-center justify-center flex-col rounded-full'>
					<span className='relative right-4 top-6 text-base font-medium'>
						11
					</span>
					<span className='relative right-4 top-6 text-xl font-semibold'>
						July
					</span>
				</div>
			</CardContent>
			<CardFooter className='p-0 pt-8 flex-col  items-start space-y-3'>
				<div className='flex items-center gap-2 uppercase '>
					<h4 className='text-sm font-semibold cursor-pointer'>
						Technologie /
					</h4>
					<CardDescription className='cursor-pointer'>
						by James Taylor
					</CardDescription>
				</div>
				<CardTitle className='font-black tracking-wide mt-2 mb-4'>
					What Can Communities Do to Help Themselves?
				</CardTitle>
				<p className='text-gray-600 dark:text-gray-400 leading-7 line-clamp-2 text-sm text-pretty'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
					asperiores nulla aperiam harum quo vel quia consequatur soluta libero
					doloribus eum fugit ullam, eaque nisi odio excepturi quis dolorum ut
					repudiandae possimus aspernatur consequuntur in! Sed minima, vero esse
					recusandae officia laborum. Rerum id nihil quas asperiores corporis
					laudantium, velit itaque reprehenderit a non, temporibus, ab magnam at
					aspernatur quibusdam similique veniam beatae ipsum dolore. Incidunt
					qui ab accusamus similique exercitationem veritatis et veniam
					consectetur ducimus numquam soluta quidem illo tempore corporis quo
					tempora labore iste, laudantium dignissimos, hic omnis vitae
					blanditiis provident nam. Tenetur atque natus debitis iste architecto!
				</p>
				<Link href={'/blog/3'}>
					<Button variant={'link'}>View more</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};

export default CardBlog;
