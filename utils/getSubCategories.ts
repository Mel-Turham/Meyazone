import { categories } from '@/db';

export interface SubCategory {
	id: number;
	name: string;
	image: string;
}

export function getSubCategories(): SubCategory[] {
	return categories.flatMap((category) =>
		category.subCategories.map((subCategory) => ({
			id: subCategory.id,
			name: subCategory.name,
			image: subCategory.image,
		})),
	);
}
