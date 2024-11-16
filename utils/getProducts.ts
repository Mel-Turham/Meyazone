import { categories } from '@/db';

export interface ProductInterface {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  stock?: number;
  details: string;
}

export function getAllProducts(): ProductInterface[] {
  return categories.flatMap((category) =>
    category.subCategories.flatMap((subCategory) =>
      subCategory.products.map(
        ({
          id,
          name,
          image,
          price,
          oldPrice,
          stock,
          details,
          specifications,
          subImages,
        }) => ({
          id,
          name,
          image,
          price,
          oldPrice,
          stock,
          details,
          specifications,
          subImages,
        })
      )
    )
  );
}
