import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
interface UserProps {
	userId: number;
	userName: string;
	userImage: StaticImageData | string;
	userFeetBack: string;
}
const Testimonial = ({ user }: { user: UserProps }) => {
	return (
		<Card className='rounded'>
			<CardHeader className='flex-row gap-3'>
				<figure>
					<Image
						src={user.userImage}
						alt={user.userName}
						loading='lazy'
						width={40}
						height={40}
						className='w-12 h-12 rounded-full object-cover bg-gray-200 text-white'
					/>
				</figure>
				<div>
					<CardDescription>{user.userName}</CardDescription>
					<div className='flex items-center gap-0.5'>
						{Array.from({ length: 5 }, (_, index) => {
							return (
								<Star
									key={index}
									className='w-4 h-4 mt-0.5'
									fill='#ef7c1a'
									strokeWidth={0}
								/>
							);
						})}
					</div>
				</div>
			</CardHeader>
			<CardContent className='leading-6 text-sm font-normal text-muted-foreground'>
				{user.userFeetBack}
			</CardContent>
		</Card>
	);
};

export default Testimonial;
