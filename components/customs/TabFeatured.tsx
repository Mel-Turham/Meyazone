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
import Image from 'next/image';
import { motion } from 'framer-motion';
import formatPrice from '@/utils/formatPrice';
import { useCurrencyStore } from '@/store/useCurrencyStore';
import React from 'react';
import Link from 'next/link';

interface Props {
	id: number;
	name: string;
	image: string;
	price: number;
	oldPrice?: number;
	stock: number;
	details: string;
}

const TabFeatured = ({
	tabFeaturedProducts,
}: {
	tabFeaturedProducts: Props[];
}) => {
	const { currency } = useCurrencyStore();

	return (
		<>
			{tabFeaturedProducts.map((product, index) => {
				return (
					<Link href={`/product/${product.id}`} key={product.id}>
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
							className='h-full w-full overflow-hidden cursor-pointer'
						>
							<Card className='rounded dark:bg-slate-900 pb-1 w-full h-full overflow-hidden flex flex-col justify-between'>
								<CardHeader className='px-3'>
									<CardDescription className='flex items-center gap-2'>
										categorie
									</CardDescription>
									<CardTitle className='text-sm font-semibold text-blue-600  mb-0'>
										{product.name}
									</CardTitle>
								</CardHeader>
								<CardContent className='h-[220px] px-3 mt-0 '>
									<Image
										src={product.image}
										alt={product.name}
										width={100}
										height={100}
										className='w-full h-full object-contain'
										loading='lazy'
									/>
								</CardContent>
								<CardFooter className='px-3  justify-between  items-center'>
									<span className='text-xl'>
										{formatPrice(product.price, currency)}
									</span>
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
					</Link>
				);
			})}
		</>
	);
};

export default TabFeatured;
