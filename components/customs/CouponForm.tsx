// coupons form
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const CouponForm = () => {
  return (
    <div className='rounded-lg bg-myprimary p-4 text-sm tracking-wider w-full'>
      <h3 className='text-lg font-bold text-white'>Coupon code</h3>
      <p className='mt-4 text-white tracking-wide text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        molestias.
      </p>
      <div className='mt-4 grid grid-cols-3 gap-3'>
        <Input className='col-span-2' type='text' placeholder='Coupon code' />
        <Button className=' w-full col-span-1'>Apply</Button>
      </div>
    </div>
  );
};

export default CouponForm;
