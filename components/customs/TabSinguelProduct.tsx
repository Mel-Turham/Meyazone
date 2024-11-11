import Link from 'next/link';
import React from 'react';

const LinksNavigations = [
	{
		idTab: 1,
		link: 'Accessories',
		section: 'accessories',
	},
	{
		idTab: 2,
		link: 'Description',
		section: 'description',
	},
	{
		idTab: 3,
		link: 'Specification',
		section: 'specification',
	},
	{
		idTab: 4,
		link: 'Reviews',
		section: 'reviews',
	},
	{
		idTab: 5,
		link: 'More Products',
		section: 'moreproducts',
	},
];

const TabSinguelProduct = ({ activeLink }: { activeLink: string }) => {
	return (
		<div className='w-full flex items-center justify-center border-b border-solid '>
			<nav className=''>
				<ul className='flex items-center justify-center gap-10'>
					{LinksNavigations.map((link) => (
						<Link
							className={`text-lg pb-3 relative hover:opacity-100 transition-opacity duration-200 ease-in-out ${
								activeLink === link.section
									? 'before:absolute before:w-full before:h-[2px] before:rounded-lg before:bottom-0 before:left-0 before:bg-myprimary font-bold opacity-100 after:absolute after:-bottom-1 after:w-2 after:h-1 after:rounded-b-2xl after:left-1/2 after:-translate-x-1/2 after:bg-myprimary '
									: 'opacity-65'
							}`}
							href={`#${link.section}`}
							key={link.idTab}
						>
							{link.link}
						</Link>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default TabSinguelProduct;
