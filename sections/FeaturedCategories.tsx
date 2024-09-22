import Image from 'next/image';
import React from 'react';

type Props = {
	id: number;
	name: string;
	image: string;
};

interface SubCategories {
	subCategories: Props[];
}

const FeaturedCategories = ({ subCategories }: SubCategories) => {
	return (
		<div className='container'>
			<div className='flex items-center flex-col gap-2 justify-center mb-10'>
				<h2 className='scroll-m-20  text-3xl font-bold tracking-tight first:mt-0'>
					Featured categories
				</h2>
				<p className='leading-3 [&:not(:first-child)]:mt-6'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae
					ratione id esse facilis.
				</p>
			</div>
			<div className='flex items-center justify-center gap-10'>
				{subCategories.map((subCategory) => {
					return (
						<div
							key={subCategory.id}
							className='flex flex-col gap-1 items-center cursor-pointer group transition-all duration-300 ease-in-out'
						>
							<figure className='items-center flex justify-center dark:bg-slate-900 border-2 bg-gray-400/10 border-solid group-hover:border-myprimary transition-all duration-300 ease-in-out rounded-full w-[110px] h-[110px]'>
								<Image
									src={subCategory.image}
									width={80}
									height={80}
									alt={subCategory.name}
									loading='lazy'
									title={subCategory.name}
									className=' object-contain w-[80%] h-[80%] '
								/>
							</figure>
							<p className='text-xs text-center leading-6 tracking-wide dark:text-gray-300 group-hover:text-gray-500 transition-all duration-300 ease-in-out'>
								{subCategory.name}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FeaturedCategories;
