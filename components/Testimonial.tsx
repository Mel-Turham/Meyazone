import React, { memo } from 'react';
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
	userImage: string | StaticImageData;
	userFeedback: string;
}

const StarRating = memo(() => (
	<div className='flex items-center gap-0.5'>
		{[...Array(5)].map((_, index) => (
			<Star
				key={index}
				className='w-4 h-4 mt-0.5'
				fill='#ef7c1a'
				strokeWidth={0}
				aria-hidden='true'
			/>
		))}
	</div>
));

StarRating.displayName = 'StarRating';

const Testimonial: React.FC<{ user: UserProps }> = ({ user }) => {
	return (
		<Card className='rounded'>
			<CardHeader className='flex-row items-center gap-3'>
				<figure className='max-w-fit'>
					<Image
						src={user.userImage}
						alt={`Profile picture of ${user.userName}`}
						width={48}
						height={48}
						className='rounded-full object-cover object-center h-12 w-12 bg-gray-200'
						loading='lazy'
					/>
				</figure>
				<div>
					<CardDescription>{user.userName}</CardDescription>
					<StarRating />
				</div>
			</CardHeader>
			<CardContent className='leading-6 text-sm font-normal text-muted-foreground'>
				{user.userFeedback}
			</CardContent>
		</Card>
	);
};

export default memo(Testimonial);
