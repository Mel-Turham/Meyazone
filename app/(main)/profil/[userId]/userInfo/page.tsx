import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PenIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const UserInfoPage = () => {
	return (
		<form action='#' className='flex gap-9 pt-10 justify-between w-full'>
			<div className='space-y-10 w-8/12'>
				<div className='grid grid-cols-2 gap-3'>
					<div className='space-y-3'>
						<Label htmlFor='firstName'>First name</Label>
						<Input id='firstName' placeholder='Demo name' />
					</div>
					<div className='space-y-3'>
						<Label htmlFor='LastName'>Last name</Label>
						<Input id='LastName' placeholder='Demo name' />
					</div>
					<div className='space-y-3'>
						<Label htmlFor='email'>Email</Label>
						<Input id='email' type='email' placeholder='demoemail@gmail.com' />
					</div>
					<div className='space-y-3'>
						<Label htmlFor='phone'>Phone Number</Label>
						<Input id='phone' type='text' placeholder='+237 69.....' />
					</div>
				</div>
				<div className='space-y-3'>
					<Label htmlFor='country'>Country</Label>
					<Input type='text' id='country' placeholder='Country...' />
				</div>
				<div className='space-y-3'>
					<Label htmlFor='address'>Address</Label>
					<Input type='text' id='address' placeholder='Address...' />
				</div>
				<div className='grid grid-cols-2 gap-3'>
					<div className='space-y-3'>
						<Label htmlFor='TownCity'>Town / City</Label>
						<Input type='text' id='TownCity' placeholder='Town or City ...' />
					</div>
					<div className='space-y-3'>
						<Label htmlFor='postcodezip'>Postcode / ZIP</Label>
						<Input
							type='text'
							id='postcodezip'
							placeholder='Postcode / ZIP ...'
						/>
					</div>
				</div>
				<div className=' flex items-center gap-8'>
					<Button type='reset' size={'sm'} variant={'destructive'}>
						Cancel
					</Button>
					<Button type='submit' size={'lg'} className=' rounded-none'>
						Update profile
					</Button>
				</div>
			</div>
			<div className='w-4/12 space-y-2'>
				<div className='space-y-2'>
					<h3 className='flex items-center gap-2 text-xl font-semibold'>
						<span>Update Profile</span>
						<span className='w-8 h-8 bg-gray-500 flex items-center justify-center rounded-full'>
							?
						</span>
					</h3>
					<p className='text-sm'>
						Profile of at least <br /> Size300x300 Gifs work too. <br />
						Max 5mb.
					</p>
				</div>

				<div className='relative w-56 h-56 rounded-full'>
					<Label
						htmlFor='imgUrl'
						className='absolute bottom-9 h-10 w-10 rounded-full bg-myprimary text-slate-700 right-0 flex items-center justify-center cursor-pointer'
					>
						<PenIcon />
					</Label>
					<Input id='imgUrl' type='file' className='sr-only' />
					<Image
						src={'/user-1.jpg'}
						width={300}
						height={300}
						alt='userImage'
						loading='lazy'
						className='w-full h-full object-cover rounded-full'
					/>
				</div>
			</div>
		</form>
	);
};

export default UserInfoPage;
