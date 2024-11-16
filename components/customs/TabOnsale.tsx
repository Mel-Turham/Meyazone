import React from 'react';
import { useCurrencyStore } from '@/store/useCurrencyStore';

import ProductCard from './ProductCard';

interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  details: string;
}

const TabOnsale = ({ tabOnSaleProducts }: { tabOnSaleProducts: Props[] }) => {
  const { currency } = useCurrencyStore();
  return (
    <>
      {tabOnSaleProducts.map((product, index) => {
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

export default TabOnsale;
