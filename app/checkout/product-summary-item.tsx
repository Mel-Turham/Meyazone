import Image from 'next/image';
import React from 'react';

const ProductSummaryItem = () => {
  return (
    <div className='flex  gap-4'>
      <div className='w-16 h-auto bg-slate-900 rounded-lg p-2'>
        <Image
          src={'/product-1.png'}
          alt='default product'
          loading='lazy'
          width={200}
          height={200}
          className='w-full h-full object-cover'
        />
      </div>
      {/* middel */}
      <div className='flex flex-col gap-2 text-sm'>
        <p>Men Black Slim Fit T-shirt</p>
        <p>
          Size: <span>M</span>
        </p>
      </div>
      {/* end */}
      <div className='flex flex-col items-end gap-2 text-sm'>
        <p>$83.00</p>
        <p>Q. {1}</p>
      </div>
    </div>
  );
};

export default ProductSummaryItem;
