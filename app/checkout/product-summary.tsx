import React from 'react';
import ProductSummaryItem from './product-summary-item';

const ProductsSummary = () => {
  return (
    <div className='py-6'>
      <div className='space-y-5'>
        {Array.from({ length: 3 }, (_, index) => (
          <ProductSummaryItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSummary;
