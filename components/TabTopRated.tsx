import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

type Categories = {
	name: string[];
};

type Description = {
	desc: string[];
};

type Props = {
	id: number;
	name: string;
	image: StaticImageData | string;
	price: number;
	category: Categories;
	decription: Description;
};

const TabTopRated = ({ tabTopRated }: { tabTopRated: Props[] }) => {
	return (
		<>
			{tabTopRated.map((product, index) => {
				return (
					<motion.article
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: index * 0.8 + 1,
							ease: 'easeIn',
							stiffness: 80,
							mass: 0.5,
							type: 'spring',
							delay: index * 0.3,
						}}
						key={product.id}
						className='h-full w-full overflow-hidden cursor-pointer'
					>
						<Card className='rounded pb-1 w-full h-full overflow-hidden flex flex-col justify-between'>
							<CardHeader className='px-3'>
								<CardDescription className='flex items-center gap-2'>
									{product.category?.name.map((categories, index) => {
										return (
											<span className='text-xs mb-0.5 ' key={index}>
												{categories}
											</span>
										);
									})}
								</CardDescription>
								<CardTitle className='text-sm font-semibold text-blue-600  mb-0'>
									{product.name}
								</CardTitle>
							</CardHeader>
							<CardContent className='h-[220px] px-3 mt-0 '>
								<Image
									src={product.image}
									alt={product.name}
									width={300}
									height={300}
									className='w-full h-full object-cover'
									loading='lazy'
								/>
							</CardContent>
							<CardFooter className='px-3  justify-between  items-center'>
								<span className='text-xl'>${product.price}</span>
								<Button
									aria-label='add to cart'
									size={'icon'}
									className='rounded-full'
								>
									<ShoppingCart className='w-6 h-6' strokeWidth={1.5} />
								</Button>
							</CardFooter>
						</Card>
					</motion.article>
				);
			})}
		</>
	);
};

export default TabTopRated;
