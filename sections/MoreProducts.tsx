import TabSinguelProduct from '@/components/TabSinguelProduct';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const randomImages = [
	'/product-3.png',
	'/product-4.png',
	'/product-8.png',
	'/product-10.png',
	'/product-30.png',
	'/product-21.png',
	'/product-18.png',
	'/product-1.png',
];
const MoreProducts = () => {
	return (
		<section className='pt-8' id='moreproducts'>
			<div className='contianer space-y-10'>
				<TabSinguelProduct activeLink='moreproducts' />
				<div className='grid grid-cols-4 w-full mt-9 gap-2'>
					{randomImages.map((img, index) => {
						return (
							<Card key={index} className='rounded'>
								<CardHeader>
									<CardDescription>Categorie</CardDescription>
									<CardTitle className='text-sm font-semibold'>
										Ultra Wireless S50 Headphones S50 with{' '}
									</CardTitle>
									<CardContent className='p-0'>
										<article className='h-[200px] w-full relative'>
											<Image
												src={img}
												alt=''
												width={150}
												height={300}
												className='object-contain aspect-square w-[80%] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2'
											/>
										</article>
									</CardContent>
								</CardHeader>
								<CardFooter className='font-semibold justify-between text-lg'>
									<span>$350.00</span>
									<Button size={'icon'} className='rounded-full'>
										<ShoppingCart className='w-5 h-5 ' />
									</Button>
								</CardFooter>
							</Card>
						);
					})}
				</div>
				<Button>
					<span>See more</span>
					<ChevronRight className='w-5 h-5' />
				</Button>
			</div>
		</section>
	);
};

export default MoreProducts;
