import React from 'react';

import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import PaginationProducts from '@/components/PaginationProducts';
import { getAllProducts } from '@/utils/getProducts';

const categoriesData = [
	{
		id: 1,
		name: 'Mobile & Laptops',
	},
	{
		id: 2,
		name: 'Gaming Entertainment',
	},
	{
		id: 3,
		name: 'Image & Video',
	},
	{
		id: 4,
		name: 'Vehicles',
	},
	{
		id: 5,
		name: 'Furnitures',
	},
	{
		id: 6,
		name: 'Sport',
	},
	{
		id: 7,
		name: 'Food & Drinks',
	},
	{
		id: 8,
		name: 'Fashion Accessories',
	},
	{
		id: 9,
		name: 'Toilet & Sanitation',
	},
	{
		id: 10,
		name: 'Makeup Corner',
	},
	{
		id: 11,
		name: 'Baby Items',
	},
];

const ShopPage = () => {
	const products = getAllProducts();
	return (
		<section className='py-8 dark:bg-slate-950 bg-gray-200/25'>
			<div className=' space-y-6'>
				{/* header */}
				<header className='shadow-sm  py-12  dark:bg-slate-900 bg-gray-200/25'>
					<div className=' space-y-4 container'>
						<h1 className='text-3xl font-bold'>Shop</h1>
						<p className='mt-1 text-lg text-gray-500'>
							We&apos;re here to help and answer any question you might have.
						</p>
					</div>
				</header>
				<div className='w-full flex gap-2 container'>
					{/* side */}
					<aside className='lg:w-3/12 bg-white shadow-sm  dark:bg-slate-900 rounded space-y-5 divide-y'>
						{/* categories */}
						<div className='space-y-8 py-6 px-4'>
							<h4 className='text-lg'>Product categories</h4>
							{categoriesData.map((item) => (
								<div
									key={item.id}
									className='flex group items-center transition w-full justify-between'
								>
									<div className=' flex items-center gap-4'>
										<Checkbox id={item.name} value={item.name} />
										<Label
											htmlFor={item.name}
											className='text-slate-400 group-hover:text-white '
										>
											{item.name}
										</Label>
									</div>
									<Plus className='w-4 h-4 text-gray-400 group-hover:text-white' />
								</div>
							))}
						</div>
						{/* range price */}
						<div className='space-y-8 py-6 px-4'>
							<h4 className='text-lg'>Price Range</h4>
							<Slider />
							<p>Price: $0 - $100</p>
						</div>
						{/* brains */}
						<div className='space-y-8 py-6 px-4'>
							<h4 className='text-lg'>Brands</h4>
							{[
								'Apple',
								'Samsung',
								'Walton',
								'Oneplus',
								'Vivo',
								'Oppo',
								'Xiomi',
								'Others',
							].map((brand, index) => (
								<div
									key={index}
									className='flex group items-center transition gap-4'
								>
									<Checkbox id={brand} value={brand} />
									<Label
										className='text-slate-400 group-hover:text-white'
										htmlFor={brand}
									>
										{brand}
									</Label>
								</div>
							))}
						</div>
						{/* Storage */}
						<div className='space-y-8 py-6 px-4'>
							<h4 className='text-lg'>Storages</h4>
							<div className='grid grid-cols-3 gap-2'>
								{['64GB', '128GB', '256GB', '512GB', '1024GB', '1T'].map(
									(storage, index) => (
										<div
											className='border border-solid text-sm text-center py-1 cursor-pointer rounded hover:bg-slate-950  transition'
											key={index}
										>
											{storage}
										</div>
									),
								)}
							</div>
						</div>

						{/* Size  */}
						{/* brains */}
						<div className='space-y-8 py-6 px-4'>
							<h4 className='text-lg'>Sizes</h4>
							{['S', 'M', 'XL', 'XXL', 'Slime Fit'].map((size, index) => (
								<div
									key={index}
									className='flex group items-center transition gap-4'
								>
									<Checkbox id={size} value={size} />
									<Label
										className='text-slate-400 group-hover:text-white'
										htmlFor={size}
									>
										{size}
									</Label>
								</div>
							))}
						</div>
					</aside>
					{/* main */}
					<main className='lg:w-9/12  dark:bg-slate-900 space-y-2 '>
						{/* top */}
						<div className=' py-2 px-2'>
							<div className='w-full flex px-4 py-5 bg-white shadow-sm dark:bg-slate-950 items-center justify-between'>
								<div>Showing 1–16 of 66 results</div>
								<div>Sort by: Default</div>
							</div>
						</div>

						{/* products container  */}
						<div className='min-h-[100dvh] overflow-hidden'>
							<PaginationProducts products={products} />
						</div>
					</main>
				</div>
			</div>
		</section>
	);
};

export default ShopPage;
