import Image from 'next/image';
import React from 'react';
import { ImageType } from '@/types';

const Braind = ({ image }: { image: ImageType }) => {
	return (
		<Image
			src={image.imageName}
			alt='braind image'
			width={100}
			height={80}
			loading='lazy'
			className='w-52 h-12 object-contain'
		/>
	);
};

export default Braind;
