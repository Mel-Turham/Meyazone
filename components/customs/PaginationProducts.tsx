'use client';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import React, { useState } from 'react';
import { ProductInterface } from '@/utils/getProducts';
import { ShoppingCart } from 'lucide-react';
import { useCurrencyStore } from '@/store/useCurrencyStore';
import formatPrice from '@/utils/formatPrice';

type ProductsProps = {
	products: ProductInterface[];
};

const PaginationProducts = ({ products }: ProductsProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const { currency } = useCurrencyStore();
	const productPerPages = 12;
	// Calculer l'index des produits à afficher pour chaque page
	const indexDernierProduit = currentPage * productPerPages;
	const indexPremierProduit = indexDernierProduit - productPerPages;
	const produitsAffiches = products.slice(
		indexPremierProduit,
		indexDernierProduit,
	);
	console.log(produitsAffiches);
	// Calculer le nombre total de pages
	const nombreTotalPages = Math.ceil(products.length / productPerPages);

	return (
		<div className='py-2 px-2 space-y-3 flex flex-col  gap-6 justify-between'>
			<div className='grid grid-cols-3 gap-1 '>
				{produitsAffiches.map((product) => (
					<Link href={`product/${product.id}`} key={product.id}>
						<Card className='rounded'>
							<CardHeader>
								<CardDescription>Categorie</CardDescription>
								<CardTitle className='text-sm font-semibold'>
									{product.name}
								</CardTitle>
								<CardContent className='p-0'>
									<article className='h-[200px] w-full relative'>
										<Image
											src={product.image}
											alt={product.name}
											width={150}
											height={300}
											className='object-contain aspect-square w-[80%] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2'
										/>
									</article>
								</CardContent>
							</CardHeader>
							<CardFooter className=' justify-between'>
								<div className=' flex flex-col gap-1'>
									{product.oldPrice && (
										<span className='text-xs text-red-500 line-through'>
											{formatPrice(product?.oldPrice as number, currency)}
										</span>
									)}
									<span className='text-sm'>
										{formatPrice(product.price, currency)}
									</span>
								</div>
								<Button size={'icon'} className='rounded-full'>
									<ShoppingCart className='w-5 h-5 ' />
								</Button>
							</CardFooter>
						</Card>
					</Link>
				))}
			</div>
			{/* buttons naviagations  */}
			<div className='flex items-center gap-1 mb-auto justify-center'>
				<Button
					disabled={currentPage === 1 ? true : false}
					onClick={() => setCurrentPage((prev) => prev - 1)}
				>
					Prev
				</Button>
				<div className='flex gap-4 items-center'>
					{Array.from({ length: nombreTotalPages }, (_, index) => (
						<span
							onClick={() => setCurrentPage(index + 1)}
							className={` rounded-full p-4 h-7 w-7 cursor-pointer flex items-center justify-center ${
								currentPage === index + 1 ? 'bg-myprimary' : 'bg-myprimary/20 '
							}`}
							key={index}
						>
							{index + 1}
						</span>
					))}
				</div>

				<Button
					disabled={currentPage === nombreTotalPages ? true : false}
					onClick={() => setCurrentPage((prev) => prev + 1)}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default PaginationProducts;
