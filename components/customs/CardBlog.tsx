import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BlogPost as BlogPostType } from '@/types';

const CardBlog = ({ id, title, description, tags, author }: BlogPostType) => {
  return (
    <Card className='border-none'>
      <CardContent className='min-h-[2rem] group cursor-pointer  p-0 relative overflow-hidden rounded-xl'>
        <Image
          src={'/article-2.jpg'}
          alt=''
          height={400}
          width={400}
          className='w-full h-full group-hover:scale-110 duration-300 ease-in-out object-cover'
        />

        <div className='absolute -top-10 -right-14 w-[130px] h-[130px] bg-myprimary flex items-center justify-center flex-col rounded-full'>
          <span className='relative right-4 top-6 text-base font-medium'>
            11
          </span>
          <span className='relative right-4 top-6 text-xl font-semibold'>
            July
          </span>
        </div>
      </CardContent>

      <CardFooter className='p-0 pt-8 flex-col  items-start space-y-3'>
        <div className='flex items-center gap-2 uppercase '>
          <h4 className='text-sm font-semibold cursor-pointer'>{tags[0]}</h4>
          <CardDescription className='cursor-pointer'>{author}</CardDescription>
        </div>
        <CardTitle className='font-black tracking-wide mt-2 mb-4'>
          {title}
        </CardTitle>
        <p className='text-gray-600 dark:text-gray-400 leading-7 line-clamp-2 text-sm text-pretty'>
          {description}
        </p>
        <Link href={`/blog/${id}`}>
          <Button variant={'link'}>View more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardBlog;
