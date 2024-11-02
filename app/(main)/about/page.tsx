'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Truck,
  Users,
  Star,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-background to-secondary/20'>
      <div className='container mx-auto px-4 py-12 max-w-5xl'>
        <motion.h1
          className='text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground'
          style={{ scale }}
          {...fadeInUp}
        >
          About Meyazone
        </motion.h1>

        <motion.section className='mb-16 text-center' {...fadeInUp}>
          <h2 className='text-3xl font-semibold mb-4'>
            Welcome to Our Community
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            At Meyazone, we're more than just a platform – we're a thriving
            ecosystem that connects customers, sellers, and drivers. Our
            marketplace is built on the foundation of mutual growth and success
            for all our users.
          </p>
        </motion.section>

        <motion.section className='mb-16' {...fadeInUp}>
          <div className='relative h-64 mb-8 rounded-xl overflow-hidden'>
            <Image
              src='/placeholder.svg?height=400&width=800'
              alt='Marketplace community'
              layout='fill'
              objectFit='cover'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center p-8'>
              <h2 className='text-3xl font-bold text-white max-w-md'>
                Our Mission: Simplifying Commerce for Everyone
              </h2>
            </div>
          </div>
          <p className='text-lg text-muted-foreground'>
            Whether you're a customer looking for the perfect product, a seller
            aiming to reach a wider audience, or a driver seeking flexible
            opportunities, we're here to make your experience seamless and
            rewarding.
          </p>
        </motion.section>

        <motion.section className='mb-16' {...fadeInUp}>
          <h2 className='text-3xl font-semibold mb-8 text-center'>
            Why Choose Meyazone?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                icon: Globe,
                title: 'Variety of Products',
                description:
                  'Access a wide range of products from diverse sellers.',
              },
              {
                icon: Lock,
                title: 'Secure Transactions',
                description:
                  'Shop with confidence knowing your transactions are protected.',
              },
              {
                icon: Truck,
                title: 'Fast & Efficient Delivery',
                description:
                  'Get your purchases quickly with our reliable delivery network.',
              },
              {
                icon: Users,
                title: 'Support for Sellers',
                description:
                  'Empower your business with our seller-friendly platform.',
              },
              {
                icon: Star,
                title: 'Customer Satisfaction',
                description: 'Your happiness is our top priority.',
              },
              {
                icon: Zap,
                title: 'Sustainability Commitment',
                description: 'Join us in our efforts for a greener future.',
              },
            ].map((item, index) => (
              <Card key={index} className='overflow-hidden group'>
                <CardContent className='p-6'>
                  <motion.div
                    className='mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <item.icon className='h-8 w-8 text-primary' />
                  </motion.div>
                  <h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
                  <p className='text-muted-foreground'>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section className='mb-16' {...fadeInUp}>
          <h2 className='text-3xl font-semibold mb-8 text-center'>
            A Growing Community
          </h2>
          <Tabs defaultValue='customers' className='w-full'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='customers'>Customers</TabsTrigger>
              <TabsTrigger value='sellers'>Sellers</TabsTrigger>
              <TabsTrigger value='drivers'>Drivers</TabsTrigger>
            </TabsList>
            <TabsContent value='customers' className='mt-4'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    For Our Valued Customers
                  </h3>
                  <p className='text-muted-foreground'>
                    Discover a world of products at your fingertips. Enjoy
                    secure shopping, fast delivery, and exceptional customer
                    service. Join our community of satisfied shoppers today!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value='sellers' className='mt-4'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    For Ambitious Sellers
                  </h3>
                  <p className='text-muted-foreground'>
                    Expand your reach and grow your business with our
                    seller-friendly platform. Benefit from our large customer
                    base, easy-to-use tools, and dedicated support.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value='drivers' className='mt-4'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    For Dedicated Drivers
                  </h3>
                  <p className='text-muted-foreground'>
                    Join our network of drivers and enjoy flexible
                    opportunities. Benefit from our user-friendly app, fair
                    compensation, and the chance to be part of a growing
                    community.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

        <motion.section className='mb-16' {...fadeInUp}>
          <h2 className='text-3xl font-semibold mb-8 text-center'>
            Our Values
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              {
                title: 'Trust',
                description:
                  'The foundation of every interaction on our platform.',
              },
              {
                title: 'Security',
                description:
                  'Protecting your data and transactions is our top priority.',
              },
              {
                title: 'Customer Satisfaction',
                description: 'Your happiness drives our innovation.',
              },
              {
                title: 'Continuous Innovation',
                description: "We're always evolving to serve you better.",
              },
            ].map((value, index) => (
              <Card key={index} className='overflow-hidden'>
                <CardContent className='p-6'>
                  <motion.div
                    className='flex items-center mb-4'
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className='h-6 w-6 text-primary mr-2' />
                    <h3 className='font-semibold text-lg'>{value.title}</h3>
                  </motion.div>
                  <p className='text-muted-foreground'>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section className='mb-16 text-center' {...fadeInUp}>
          <h2 className='text-3xl font-semibold mb-4'>Join Our Marketplace</h2>
          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Whether you're a customer, seller, or driver, there's a place for
            you in our community. Join us today and experience the future of
            commerce.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={'/shop'}
              className={` bg-gradient-to-r from-primary to-primary-foreground text-white  ${buttonVariants(
                { variant: 'default', size: 'lg' }
              )}`}
            >
              Shop now
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </motion.div>
        </motion.section>

        <motion.section className='text-center' {...fadeInUp}>
          <h2 className='text-3xl font-semibold mb-4'>Contact Us</h2>
          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Have questions? We're here to help. Reach out to our team anytime.
          </p>
          <Link
            href='/contact'
            className='text-primary hover:text-primary-foreground transition-colors duration-300 text-lg font-semibold'
          >
            Contact our support team
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
