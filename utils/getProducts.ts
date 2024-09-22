import { categories } from '@/db';

export interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
	oldPrice?: number;
	stock: number;
	details: string;
}

export function getAllProducts(): Product[] {
	return categories.flatMap((category) =>
		category.subCategories.flatMap((subCategory) =>
			subCategory.products.map(
				({ id, name, image, price, oldPrice, stock, details }) => ({
					id,
					name,
					image,
					price,
					oldPrice,
					stock,
					details,
				}),
			),
		),
	);
}
