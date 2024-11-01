'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  X,
  ChevronUp,
  ChevronDown,
  ShoppingCart,
  Tag,
  Truck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const features = [
  { name: 'Listings', icon: <Tag className='w-4 h-4 mr-2' /> },
  { name: 'Transaction Fees', icon: <ShoppingCart className='w-4 h-4 mr-2' /> },
  { name: 'Shipping Labels', icon: <Truck className='w-4 h-4 mr-2' /> },
  { name: 'Customer Support', icon: <Check className='w-4 h-4 mr-2' /> },
  { name: 'Analytics Dashboard', icon: <Check className='w-4 h-4 mr-2' /> },
  { name: 'Priority Placement', icon: <Check className='w-4 h-4 mr-2' /> },
  { name: 'Bulk Listing Tools', icon: <Check className='w-4 h-4 mr-2' /> },
  { name: 'API Access', icon: <Check className='w-4 h-4 mr-2' /> },
  { name: 'Custom Storefront', icon: <Check className='w-4 h-4 mr-2' /> },
  {
    name: 'Dedicated Account Manager',
    icon: <Check className='w-4 h-4 mr-2' />,
  },
];

const plans = [
  {
    name: 'Basic Seller',
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    featuresIncluded: 3,
    listingLimit: 'Up to 50',
    transactionFee: '5%',
    shippingLabels: 'Standard rates',
  },
  {
    name: 'Pro Seller',
    monthlyPrice: 29.99,
    yearlyPrice: 299.99,
    featuresIncluded: 6,
    listingLimit: 'Up to 500',
    transactionFee: '3%',
    shippingLabels: 'Discounted rates',
  },
  {
    name: 'Enterprise Seller',
    monthlyPrice: 99.99,
    yearlyPrice: 999.99,
    featuresIncluded: 10,
    listingLimit: 'Unlimited',
    transactionFee: '1%',
    shippingLabels: 'Best available rates',
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Pro Seller');
  const [expandedFeatures, setExpandedFeatures] = useState<string[]>([]);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredFeature(
        features[Math.floor(Math.random() * features.length)].name
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleFeatureExpansion = (planName: string) => {
    setExpandedFeatures((prev) =>
      prev.includes(planName)
        ? prev.filter((p) => p !== planName)
        : [...prev, planName]
    );
  };

  return (
    <section className='py-8'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-4xl font-bold text-center mb-8'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Seller Plan
        </motion.h2>
        <motion.div
          className='flex justify-center items-center mb-12'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Label htmlFor='pricing-toggle' className='mr-2 text-lg'>
            Monthly
          </Label>
          <Switch
            id='pricing-toggle'
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor='pricing-toggle' className='ml-2 text-lg'>
            Yearly (Save 20%)
          </Label>
        </motion.div>
        <div className='grid md:grid-cols-3 gap-8'>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative overflow-hidden ${
                  selectedPlan === plan.name
                    ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/50'
                    : ''
                }`}
              >
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    {plan.name}
                  </CardTitle>
                  <CardDescription>
                    <motion.span
                      className='text-4xl font-bold'
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                    {isYearly ? ' / year' : ' / month'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2'>
                    <motion.li
                      className='flex items-center'
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Tag className='text-blue-500 mr-2 h-5 w-5' />
                      Listings: {plan.listingLimit}
                    </motion.li>
                    <motion.li
                      className='flex items-center'
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <ShoppingCart className='text-blue-500 mr-2 h-5 w-5' />
                      Transaction Fee: {plan.transactionFee}
                    </motion.li>
                    <motion.li
                      className='flex items-center'
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Truck className='text-blue-500 mr-2 h-5 w-5' />
                      Shipping Labels: {plan.shippingLabels}
                    </motion.li>
                    {features
                      .slice(3, plan.featuresIncluded)
                      .map((feature, index) => (
                        <motion.li
                          key={feature.name}
                          className='flex items-center'
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: (index + 3) * 0.1,
                          }}
                        >
                          {feature.icon}
                          {feature.name}
                          {hoveredFeature === feature.name && (
                            <Badge
                              variant='secondary'
                              className='ml-2 animate-pulse'
                            >
                              Popular
                            </Badge>
                          )}
                        </motion.li>
                      ))}
                  </ul>
                  {expandedFeatures.includes(plan.name) && (
                    <AnimatePresence>
                      <motion.ul
                        className='space-y-2 mt-4'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {features
                          .slice(plan.featuresIncluded)
                          .map((feature, index) => (
                            <motion.li
                              key={feature.name}
                              className='flex items-center text-gray-400'
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <X className='text-red-500 mr-2 h-5 w-5' />
                              {feature.name}
                            </motion.li>
                          ))}
                      </motion.ul>
                    </AnimatePresence>
                  )}
                  <Button
                    variant='link'
                    onClick={() => toggleFeatureExpansion(plan.name)}
                    className='mt-4'
                  >
                    {expandedFeatures.includes(plan.name) ? (
                      <>
                        <ChevronUp className='mr-2 h-4 w-4' /> Hide features
                      </>
                    ) : (
                      <>
                        <ChevronDown className='mr-2 h-4 w-4' /> Show all
                        features
                      </>
                    )}
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button
                    className='w-full text-lg group'
                    variant={selectedPlan === plan.name ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    {selectedPlan === plan.name
                      ? 'Current Plan'
                      : 'Choose Plan'}
                    <motion.span
                      className='ml-2'
                      animate={{ rotate: selectedPlan === plan.name ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ShoppingCart className='h-5 w-5' />
                    </motion.span>
                  </Button>
                </CardFooter>
                {plan.name === 'Pro Seller' && (
                  <motion.div
                    className='absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-1 px-4 rounded-bl-lg font-semibold text-sm'
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Most Popular
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
