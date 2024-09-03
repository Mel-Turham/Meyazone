import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Eye, Heart, Repeat, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Home = () => {
	return (
		<>
			<section className='w-full h-[calc(100dvh-10.9rem)] flex items-center justify-end bg-white text-gray-500'>
				<div className='w-[70%] items-center flex h-full justify-between'>
					<div className='w-6/12'>
						<p className='scroll-m-20 text-xl font-semibold uppercase tracking-tight text-sky-400'>
							Shop to get what you love
						</p>
						<h2 className='scroll-m-20 text-4xl font-thin leading-loose uppercase lg:text-5xl mb-10 mt-5'>
							Timepieces that make a statement
							<br />
							up to
							<span className='font-black ml-2'>40% off</span>
						</h2>
						<Button
							className='bg-[#EF7C1A] font-normal text-lg hover:bg-[#A54B17] text-black hover:text-white capitalize transition-all duration-300 ease-in-out w-52'
							size='lg'
						>
							Start buying
						</Button>
					</div>
					<div className='w-6/12 h-full '>
						<Image
							src='/Sounddevice.webp'
							alt='Sounddevice'
							title=''
							loading='lazy'
							width={500}
							height={300}
							className='object-cover h-full w-full'
						/>
					</div>
				</div>
			</section>
			<section className='container py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<Card className='dark:bg-slate-900 rounded-none py-4 cursor-pointer bg-gray-50 hover:dark:bg-slate-800 transition-all duration-300 ease-in-out shadow-sm dark:shadow-none hover:scale-105 group'>
					<CardContent className='flex  mb-0 pb-0  gap-8'>
						<div className='w-5/12 h-full '>
							<Image
								src='/laptop.webp'
								alt='laptop'
								loading='lazy'
								width={250}
								height={250}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-7/12 '>
							<CardTitle className='font-normal capitalize space-y-1'>
								<p>Tablets smartphones</p>
								<div className='flex items-center'>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
								</div>
							</CardTitle>
						</div>
					</CardContent>
					<div className='flex items-center justify-end px-10 text-[#EF7C1A] font-semibold my-2'>
						$99.0
					</div>
					<CardFooter className='pb-0 flex items-center justify-between pt-2'>
						<div className='flex items-center justify-center gap-3 '>
							<Heart
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
							<Repeat
								className='w-5 h-5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 '
								strokeWidth={1.5}
							/>
							<Eye
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
						</div>
						<Button size='sm' className='rounded' variant='outline'>
							<span>Add to cart</span>
							<ArrowRight className='w-5 h-5 ml-2 ' strokeWidth={1} />
						</Button>
					</CardFooter>
				</Card>
				<Card className='dark:bg-slate-900 rounded-none py-4 cursor-pointer bg-gray-50 hover:dark:bg-slate-800 transition-all duration-300 ease-in-out shadow-sm dark:shadow-none hover:scale-105 group'>
					<CardContent className='flex  mb-0 pb-0  gap-8'>
						<div className='w-5/12 h-full '>
							<Image
								src='/laptop.webp'
								alt='laptop'
								loading='lazy'
								width={250}
								height={250}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-7/12 '>
							<CardTitle className='font-normal capitalize space-y-1'>
								<p>Tablets smartphones</p>
								<div className='flex items-center'>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
								</div>
							</CardTitle>
						</div>
					</CardContent>
					<div className='flex items-center justify-end px-10 text-[#EF7C1A] font-semibold my-2'>
						$99.0
					</div>
					<CardFooter className='pb-0 flex items-center justify-between pt-2'>
						<div className='flex items-center justify-center gap-3 '>
							<Heart
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
							<Repeat
								className='w-5 h-5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 '
								strokeWidth={1.5}
							/>
							<Eye
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
						</div>
						<Button size='sm' className='rounded' variant='outline'>
							<span>Add to cart</span>
							<ArrowRight className='w-5 h-5 ml-2 ' strokeWidth={1} />
						</Button>
					</CardFooter>
				</Card>
				<Card className='dark:bg-slate-900 rounded-none py-4 cursor-pointer bg-gray-50 hover:dark:bg-slate-800 transition-all duration-300 ease-in-out shadow-sm dark:shadow-none hover:scale-105 group'>
					<CardContent className='flex  mb-0 pb-0  gap-8'>
						<div className='w-5/12 h-full '>
							<Image
								src='/laptop.webp'
								alt='laptop'
								loading='lazy'
								width={250}
								height={250}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-7/12 '>
							<CardTitle className='font-normal capitalize space-y-1'>
								<p>Tablets smartphones</p>
								<div className='flex items-center'>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
									<Star
										className='w-4 h-4'
										fill='#EF7C1A'
										stroke='none'
										strokeWidth={1.5}
									/>
								</div>
							</CardTitle>
						</div>
					</CardContent>
					<div className='flex items-center justify-end px-10 text-[#EF7C1A] font-semibold my-2'>
						$99.0
					</div>
					<CardFooter className='pb-0 flex items-center justify-between pt-2'>
						<div className='flex items-center justify-center gap-3 '>
							<Heart
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
							<Repeat
								className='w-5 h-5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 '
								strokeWidth={1.5}
							/>
							<Eye
								className='w-5 h-5  opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0'
								strokeWidth={1.5}
							/>
						</div>
						<Button size='sm' className='rounded' variant='outline'>
							<span>Add to cart</span>
							<ArrowRight className='w-5 h-5 ml-2 ' strokeWidth={1} />
						</Button>
					</CardFooter>
				</Card>
			</section>
		</>
	);
};

export default Home;
