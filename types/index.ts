import { StaticImageData } from 'next/image';

type TabTypes = 'featured' | 'onsale' | 'toprated';
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

type UsersType = {
	userId: number;
	userName: string;
	userImage: StaticImageData | string;
	userFeedback: string;
};

type ImageType = {
	id: number;
	imageName: StaticImageData;
};

type Department = {
	id: number;
	name: string;
	bgImage?: string;
	megaMenu?: {
		id: number;
		categoryName: string;
		links: { id: number; label: string }[];
	}[];
};

// type category

type Specification = {
	[key: string]: string | number;
};

type Rating = {
	average: number;
	count: number;
};

type Product = {
	id: number;
	name: string;
	image: string;
	subImages?: string[];
	stock: number;
	oldPrice?: number;
	price: number;
	details: string;
	specifications?: Specification;
	createdAt: string;
	ratings: Rating;
};

type SubCategory = {
	id: number;
	name: string;
	image: string;
	products: Product[];
};

type Category = {
	id: number;
	name: string;
	image: string;
	subCategories: SubCategory[];
};

export {
	type ProductTypes,
	type TabTypes,
	type UsersType,
	type ImageType,
	type Department,
	type Category,
};
