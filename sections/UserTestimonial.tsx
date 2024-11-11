import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { users } from '@/db';
import Testimonial from '@/components/customs/Testimonial';

const UserTestimonial = () => {
  return (
    <section className='py-4 mt-5'>
      <div className='flex items-center flex-col  justify-center py-4 '>
        <h2 className='scroll-m-20  text-3xl font-bold tracking-tight first:mt-0'>
          What our customers think
        </h2>
        <p className='leading-3 [&:not(:first-child)]:mt-6'>
          Execellent 4.9 based on 22.181 reviews
        </p>
      </div>
      <div className='container relative'>
        <Swiper
          slidesPerView={4}
          spaceBetween={8}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 8000,
          }}
          cssMode
          loop={true}
          className='w-full mt-4'
        >
          {users.map((user) => {
            return (
              <SwiperSlide key={user.userId}>
                <Testimonial user={user} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default UserTestimonial;
