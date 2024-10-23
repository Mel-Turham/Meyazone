import Image from 'next/image';
import React, { ReactNode } from 'react';

const AdminLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='grid grid-cols-12'>
			<aside className='col-span-3 min-h-screen dark:bg-slate-900 px-8'>
				<div>
					<Image
						src={'/logo-white.png'}
						alt='log meyazone'
						width={300}
						height={200}
						loading='lazy'
						className='w-[130px] object-contain aspect-square'
					/>
				</div>
			</aside>
			<div className='col-span-9'>
				<header className='dark:bg-slate-900 py-8 px-6'>hearder</header>
				<main className='px-6 py-8'>{children}</main>
			</div>
		</div>
	);
};

export default AdminLayout;
