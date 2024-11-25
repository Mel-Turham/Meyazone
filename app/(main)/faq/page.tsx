'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearch } from '@/hooks/useSearch';
import { SearchBar } from './SearchBar';
import { FAQAccordion } from './faq-accordion';

const faqData = [
  {
    question: 'How do I create an account?',
    answer:
      "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your details and follow the prompts to complete the registration process.",
    category: 'Account',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. The available options will be displayed during checkout.',
    category: 'Payments',
  },
  {
    question: 'How can I track my order?',
    answer:
      "Once your order is shipped, you'll receive a confirmation email with a tracking number. You can use this number on our 'Order Tracking' page or the courier's website to track your package.",
    category: 'Orders',
  },
  {
    question: 'What is your return policy?',
    answer:
      "We offer a 30-day return policy for most items. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please check our Returns page for more details.",
    category: 'Returns',
  },
  {
    question: 'How can I become a seller on your marketplace?',
    answer:
      "To become a seller, go to our 'Sell on Our Marketplace' page and click on 'Apply Now'. You'll need to provide some information about your business and agree to our seller terms. Our team will review your application and get back to you within 3-5 business days.",
    category: 'Selling',
  },
];

export default function FAQPage() {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(faqData);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(faqData.map((item) => item.category)));

  const displayedItems = selectedCategory
    ? filteredItems.filter((item) => item.category === selectedCategory)
    : filteredItems;

  return (
    <div className='min-h-screen  py-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='container'
      >
        <h1 className='text-4xl font-bold text-center text-primary mb-8'>
          Frequently Asked Questions
        </h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className='mb-8 flex flex-wrap justify-center gap-2'>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedCategory === null
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FAQAccordion items={displayedItems} />
        </motion.div>

        {displayedItems.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center text-gray-600 mt-8'
          >
            No FAQs found. Try adjusting your search or category filter.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
