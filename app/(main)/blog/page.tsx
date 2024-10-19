'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import CardBlog from '@/components/CardBlog';
import AuthorBlog from '@/components/AuthorBlog';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

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
						{Array.from({ length: 10 }, (_, index) => {
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
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPage;
