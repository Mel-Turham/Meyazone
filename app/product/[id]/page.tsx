'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Repeat, ShoppingCart, Star } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Accessories from '@/sections/Accessorie';
import Description from '@/sections/Description';
import Specifications from '@/sections/Specifications';
import Reviews from '@/sections/Reviews';

const SingleProductPage = () => {
	const params = useParams();
	const { id } = params;
	return (
		<section className='py-8'>
			<div className='container flex gap-5'>
				{/* image product */}
				<div className='w-5/12 flex flex-col gap-5'>
					{/* default image */}
					<div className='w-full min-h-[22.5rem] dark:bg-slate-900 bg-gray-400/15 flex items-center justify-center rounded-sm'>
						<Image
							width={200}
							height={200}
							src='/product-63.png'
							alt='product'
							loading='lazy'
							title='product'
							className='w-[80%] aspect-square object-cover'
						/>
					</div>
					{/* subImge */}
					<div className='flex items-center justify-between gap-2'>
						<motion.div
							whileTap={{ scale: 1.2 }}
							transition={{ duration: 0.2, ease: 'anticipate', stiffness: 60 }}
							className='w-32 h-32 border border-solid rounded-sm cursor-pointer hover:border-myprimary transition-all duration-200 ease-in-out overflow-hidden flex items-center justify-center dark:bg-slate-900 bg-gray-400/15'
						>
							<Image
								src='/product-63.png'
								alt='product'
								loading='lazy'
								width={150}
								height={150}
								className='w-full aspect-square object-contain'
							/>
						</motion.div>
						<motion.div
							whileTap={{ scale: 1.2 }}
							transition={{ duration: 0.2, ease: 'anticipate', stiffness: 60 }}
							className='w-32 h-32 border border-solid rounded-sm cursor-pointer hover:border-myprimary transition-all duration-200 ease-in-out overflow-hidden flex items-center justify-center dark:bg-slate-900 bg-gray-400/15'
						>
							<Image
								src='/product-65.png'
								alt='product'
								loading='lazy'
								width={150}
								height={150}
								className='w-full aspect-square object-contain'
							/>
						</motion.div>
						<motion.div
							whileTap={{ scale: 1.2 }}
							transition={{ duration: 0.2, ease: 'anticipate', stiffness: 60 }}
							className='w-32 h-32 border border-solid rounded-sm cursor-pointer hover:border-myprimary transition-all duration-200 ease-in-out overflow-hidden flex items-center justify-center dark:bg-slate-900 bg-gray-400/15'
						>
							<Image
								src='/product-67.png'
								alt='product'
								loading='lazy'
								width={150}
								height={150}
								className='w-full aspect-square object-contain'
							/>
						</motion.div>
						<motion.div
							whileTap={{ scale: 1.2 }}
							transition={{ duration: 0.2, ease: 'anticipate', stiffness: 60 }}
							className='w-32 h-32 border border-solid rounded-sm cursor-pointer hover:border-myprimary transition-all duration-200 ease-in-out overflow-hidden flex items-center justify-center dark:bg-slate-900 bg-gray-400/15'
						>
							<Image
								src='/product-68.png'
								alt='product'
								loading='lazy'
								width={150}
								height={150}
								className='w-full aspect-square object-contain'
							/>
						</motion.div>
					</div>
				</div>
				{/* specifcation about product */}
				<div className='w-4/12 space-y-3'>
					<p className='text-slate-400 font-normal text-sm'>
						Accessories, Headphones
					</p>
					<h2 className='text-4xl font-bold leading-snug'>
						Ultra Wireless S50 Headphones S50 with Bluetooth
					</h2>
					<div className='flex items-center gap-2'>
						<div className='flex items-center justify-center'>
							{Array.from({ length: 5 }, (_, index) => {
								return (
									<Star
										key={index}
										className='w-5 h-5 fill-myprimary stroke-transparent'
									/>
								);
							})}
						</div>
						<span>(3 customer reviews)</span>
					</div>
					<Image
						src='/brain1.webp'
						alt='brand'
						className='w-[150px]  object-contain'
						loading='lazy'
						title='braind'
						width={50}
						height={50}
					/>
					<ul className='list-disc space-y-2 px-4 marker:text-myprimary'>
						{[
							'4.5 inch HD Touch Screen (1280 x 720)',
							'Android 4.4 KitKat OS',
							'1.4 GHz Quad Core™ Processor',
							'20 MP front and 28 megapixel CMOS rear camera',
						].map((specification, index) => {
							return (
								<li className='text-sm font-normal' key={index}>
									{specification}
								</li>
							);
						})}
					</ul>
					<p className='text-sm leading-6 '>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
						nostrum dignissimos reprehenderit exercitationem repellendus dolorum
						quis, magni soluta!
					</p>
				</div>
				{/* card price */}
				<div className='w-3/12'>
					<Card className='space-y-4 shadow w-full dark:bg-slate-900'>
						<CardHeader>
							<CardDescription>
								Availability:
								<span className='text-myprimary ml-2 font-bold'>
									27 in stock
								</span>
							</CardDescription>
							<Separator />
						</CardHeader>
						<CardContent className='space-y-5 flex flex-col'>
							<p className='text-4xl font-bold'>$350.00</p>
							<div className='space-y-2'>
								<Label
									htmlFor='quantity'
									className='underline underline-offset-4'
								>
									Quantity:
								</Label>
								<Input
									type='number'
									min={1}
									max={5}
									className='outline-none dark:bg-slate-900 dark:border-slate-500'
									id='quantity'
									name='quantity'
									placeholder='Quantity...'
								/>
							</div>
							<Button
								size={'lg'}
								className='flex items-center justify-center gap-3'
							>
								<ShoppingCart />
								<span className='text-lg font-medium'>Add to cart</span>
							</Button>
						</CardContent>
						<CardFooter className='flex items-center justify-between'>
							<div className='flex items-center justify-center gap-2'>
								<Heart className='w-4 h-4' strokeWidth={1.4} />
								<span className='text-xs'>Wishlist</span>
							</div>
							<div className='flex items-center justify-center gap-2'>
								<Repeat className='w-4 h-4' strokeWidth={1.4} />
								<span className='text-xs'>compare</span>
							</div>
						</CardFooter>
					</Card>
				</div>
			</div>
			{/* accessories sigle product page details product */}

			<section className='py-8 mt-10 dark:bg-slate-900 bg-gray-400/15'>
				<Accessories />
			</section>
			{/* Description single product page detail product */}
			<section className='py-8 mt-10 dark:bg-slate-900 bg-gray-400/15'>
				<Description />
			</section>

			{/* Specification sigle product page details product */}
			<section className='p-8 mt-10 dark:bg-slate-900 bg-gray-400/15'>
				<Specifications />
			</section>
			{/* Reviews sigle product page details product */}
			<section className='p-8 mt-10 dark:bg-slate-900 bg-gray-400/15'>
				<Reviews />
			</section>
		</section>
	);
};

export default SingleProductPage;
