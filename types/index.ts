import { StaticImageData } from 'next/image';

type Categories = {
	name: string[];
};

type Description = {
	desc: string[];
};

interface ProductTypes {
	id: number;
	name: string;
	image: StaticImageData | string;
	price: number;
	category: Categories;
	decription: Description;
}

export { type ProductTypes };