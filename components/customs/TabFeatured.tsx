import formatPrice from '@/utils/formatPrice';
import { useCurrencyStore } from '@/store/useCurrencyStore';
import React from 'react';
import ProductCard from './ProductCard';

interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  details: string;
}

const TabFeatured = ({
  tabFeaturedProducts,
}: {
  tabFeaturedProducts: Props[];
}) => {
  // TODO: Add convert currency price
  const { currency } = useCurrencyStore();

  return (
    <>
      {tabFeaturedProducts.map((product, index) => {
        return (
          <ProductCard
            key={index}
            id={product.id}
            orientation='vertical'
            name={product.name}
            image={product.image}
            details={product.details}
            oldPrice={product.oldPrice}
            price={product.price}
          />
        );
      })}
    </>
  );
};

export default TabFeatured;
