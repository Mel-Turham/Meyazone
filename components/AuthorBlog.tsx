import React from 'react';
import Image from 'next/image';
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from 'lucide-react';
import Link from 'next/link';
const AuthorBlog = () => {
	return (
		<div className='  mx-auto rounded-lg p-4 relative bg-myprimary flex flex-col items-center gap-4'>
			<div className='absolute w-36 h-36 top-3 left-1 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
			<div className='absolute w-20 h-20 top-10 right-0 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
			<div className='absolute w-20 h-20 top-10 left-1/2 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
			<div className='absolute w-20 h-20 bottom-20 left-0 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
			<div className='absolute w-20 h-20 bottom-20 right-20 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
			<div className='absolute w-20 h-20 bottom-0 right-0 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
			<Image
				src={'/user-7.jpg'}
				alt='author'
				width={300}
				height={300}
				className='w-[200px] aspect-square rounded-full object-cover relative'
			/>
			<h3 className='text-xl font-semibold tracking-wider mt-4'>
				William Atsano
			</h3>
			<p className='text-sm text-center leading-7'>
				Hi! I`m an authtor of this blog. Read our post - be in trend!
			</p>
			<div className='flex items-center justify-center gap-5'>
				<Link href={''}>
					<TwitterIcon className='hover:-translate-y-2 transition-all duration-300 ease-in-out' />
				</Link>
				<Link href={''}>
					<FacebookIcon className='hover:-translate-y-2 transition-all duration-300 ease-in-out' />
				</Link>
				<Link href={''}>
					<LinkedinIcon className='hover:-translate-y-2 transition-all duration-300 ease-in-out' />
				</Link>
				<Link href={''}>
					<InstagramIcon className='hover:-translate-y-2 transition-all duration-300 ease-in-out' />
				</Link>
			</div>
		</div>
	);
};

export default AuthorBlog;
