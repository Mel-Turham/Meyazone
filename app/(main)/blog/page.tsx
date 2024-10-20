'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import CardBlog from '@/components/CardBlog';
import AuthorBlog from '@/components/AuthorBlog';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import SibarTitle from '@/components/SibarTitle';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
	return (
		<>
			<section className='w-full h-[calc(100dvh-10.9rem)] article-hero bg-cover bg-no-repeat bg-left-top relative overflow-hidden'>
				<div className='relative z-[1] text-white container flex items-center justify-center flex-col h-full space-y-6'>
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-7xl font-bold capitalize'
					>
						Welcom to meyazone blog.
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className='max-w-3xl text-center text-base text-balance leading-relaxed font-normal'
					>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
						tempora minima tempore accusamus maiores rerum? Totam nulla ex
						libero enim?
					</motion.p>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8 }}
						className='flex items-center justify-center gap-2 font-medium
				'
					>
						<Link href={'/'} className='hover:underline'>
							Home
						</Link>
						/<span>Blog</span>
					</motion.div>
				</div>
				<div className='absolute left-0 top-0 w-full h-screen bg-black/65'></div>
			</section>

			<section className='py-16'>
				<div className='container grid grid-cols-6 gap-10'>
					<div className='col-span-4 space-y-7'>
						{Array.from({ length: 6 }, (_, index) => {
							return <CardBlog key={index} />;
						})}
					</div>
					<div className='col-span-2 flex flex-col items-center'>
						<AuthorBlog />
						<form
							action='#'
							className='flex items-center gap-3 border border-solid dark:border-slate-800 rounded-sm overflow-hidden p-1 w-full border-gray-200 mt-10'
						>
							<Input
								placeholder='Search...'
								aria-label='Search blogs'
								className='rounded-none w-3/4 ring-0 border-0 focus:outline-none'
							/>
							<button
								type='submit'
								aria-label='Subscribe'
								className='w-[50px] ml-auto flex items-center justify-center py-2 rounded-md bg-myprimary'
							>
								<Search className='w-5 h-5' strokeWidth={1.8} />
							</button>
						</form>
						<div className=' w-full mt-10 space-y-8'>
							<SibarTitle text='Categories' />
							<ul className='space-y-4 marker:text-myprimary list-disc ps-3'>
								{[
									'Businnes',
									'SEO',
									'Ecomerce',
									'Technologies',
									'Tendances',
									'conseils',
								].map((tag, index) => {
									return (
										<li
											key={index}
											className='capitalize cursor-pointer hover:text-myprimary ease-in-out transition duration-300 '
										>
											{tag}
										</li>
									);
								})}
							</ul>
						</div>
						<div className=' w-full mt-10 space-y-8'>
							<SibarTitle text='Recent Posts' />
							<div className='space-y-5'>
								{Array.from({ length: 3 }, (_, index) => (
									<div className='flex gap-6' key={index}>
										<Image
											src={'/article-1.jpg'}
											alt=''
											width={200}
											height={200}
											loading='lazy'
											className='w-20 h-20 bg-gray-400 rounded-md cursor-pointer'
										/>
										<div className='space-y-2 '>
											<h4 className='font-medium cursor-pointer hover:text-myprimary ease-in-out transition duration-300'>
												<p>What Can Communities</p>
												<p>Do to Help Themselves?</p>
											</h4>
											<p className='font-bold text-gray-400 tracking-wide'>
												July 11, 2019
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className=' w-full mt-10 space-y-8'>
							<SibarTitle text='Gallery' />
							<div className='grid grid-cols-3 gap-3'>
								{[
									'article-1.jpg',
									'article-2.jpg',
									'article-3.jpg',
									'article-1.jpg',
									'article-2.jpg',
									'article-3.jpg',
								].map((image, index) => (
									<Image
										key={index}
										src={`/${image}`}
										alt=''
										width={200}
										height={200}
										loading='lazy'
										className=' hover:opacity-70 transition duration-300 ease-in-out bg-gray-400 rounded-md cursor-pointer'
									/>
								))}
							</div>
						</div>

						<div className=' w-full mt-10 space-y-8 sticky top-0'>
							<SibarTitle text='Tags' />
							<ul className='flex flex-wrap  gap-4'>
								{[
									'Businnes',
									'C++',
									'Courses',
									'educations',
									'Guides',
									'Languages',
									'Marketings',
									'news',
									'Technology',
									'tips',
								].map((tag, index) => (
									<li
										key={index}
										className='border border-solid border-gray-400  px-4 py-1 rounded-sm text-center hover:bg-myprimary font-medium transition capitalize'
									>
										<Link href={'#'}>{tag}</Link>
									</li>
								))}
							</ul>

							<div className='w-full mt-6 bg-myprimary flex items-center justify-center flex-col rounded-lg py-8 relative'>
								<div className='absolute w-36 h-36 top-3 left-1 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
								<div className='absolute w-20 h-20 top-0 right-0 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
								<div className='absolute w-20 h-20 top-10 left-1/2 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
								<div className='absolute w-20 h-20 bottom-10 left-0 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
								<div className='absolute w-20 h-20 bottom-0 right-0 bg-red-50/10  rounded-full  shadow-white/20 shadow-inner'></div>
								<Image
									src={'/logo-dark.png'}
									alt=''
									loading='lazy'
									width={500}
									height={300}
									className='w-32 h-16 object-contain '
								/>
								<h4 className='text-lg max-w-[250px] text-center font-bold animate-pulse'>
									Start shop yourself to day in meyazone{' '}
								</h4>
								<Button size={'lg'} className='justify-self-end mt-8'>
									Start Now
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPage;
