import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const userInformation = {
	name: 'Sarah',
	email: 'rafiqulislamsuvobd@gmail.com',
	phone: +237699838117,
	city: 'Douala cameroun',
	zip: 4040,
};

const { name, email, phone, city, zip } = userInformation;
const DashbordPage = () => {
	return (
		<div className='flex flex-col justify-between'>
			<div className=' flex justify-between'>
				<div className='space-y-1'>
					<span>Hello, Sara</span>
					<h2 className='text-2xl font-bold'>Welcome to your Profile</h2>
				</div>
				<Image
					src={'/user-1.jpg'}
					alt='user'
					loading='lazy'
					width={150}
					height={150}
					className='w-[60px] h-[60px] rounded-full object-cover'
				/>
			</div>
			<div className='grid grid-cols-3 mt-10 gap-5'>
				<div className='p-5 rounded-sm shadow-md bg-slate-700'>
					<span className='w-12 h-12 rounded bg-myprimary p-2 flex items-center justify-center'>
						<ShoppingCart absoluteStrokeWidth />
					</span>
					<div className='flex flex-col gap-2 mt-5'>
						<span className='text-xl font-medium'>New Orders</span>
						<span className='text-4xl font-bold'>656</span>
					</div>
				</div>
				<div className='p-5 rounded-sm shadow-md bg-slate-700'>
					<span className='w-12 h-12 rounded bg-myprimary p-2 flex items-center justify-center'>
						<ShoppingCart absoluteStrokeWidth />
					</span>
					<div className='flex flex-col gap-2 mt-5'>
						<span className='text-xl font-medium'>New Orders</span>
						<span className='text-4xl font-bold'>656</span>
					</div>
				</div>
				<div className='p-5 rounded-sm shadow-md bg-slate-700'>
					<span className='w-12 h-12 rounded bg-myprimary p-2 flex items-center justify-center'>
						<ShoppingCart absoluteStrokeWidth />
					</span>
					<div className='flex flex-col gap-2 mt-5'>
						<span className='text-xl font-medium'>New Orders</span>
						<span className='text-4xl font-bold'>656</span>
					</div>
				</div>
			</div>
			<div className='min-h-[60vh] flex items-center'>
				<div className='flex justify-between w-full gap-3 h-full'>
					<div className='h-full w-6/12 p-5 rounded-sm bg-slate-700 space-y-4'>
						<h3 className='text-2xl font-medium'>Parsonal Informations</h3>
						<div className='space-y-5'>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>Name:</span>
								<span>{name}</span>
							</div>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>Email:</span>
								<span>{email}</span>
							</div>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>Phone:</span>
								<span>{phone}</span>
							</div>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>City:</span>
								<span>{city}</span>
							</div>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>zip:</span>{' '}
								<span>{zip}</span>
							</div>
						</div>
					</div>
					<div className='h-full w-6/12 p-5 rounded-sm bg-slate-700 space-y-4'>
						<h3 className='text-2xl font-medium'>Shop Informations</h3>
						<div className='space-y-5'>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>Name:</span>
								<span>{name}</span>
							</div>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>Email:</span>
								<span>{email}</span>
							</div>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>Phone:</span>
								<span>{phone}</span>
							</div>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>City:</span>
								<span>{city}</span>
							</div>
							<div className='flex items-center'>
								<span className='w-3/12 text-lg text-gray-400'>zip:</span>{' '}
								<span>{zip}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashbordPage;
