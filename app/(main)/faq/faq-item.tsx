import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  category: string;
}

export function FAQItem({ question, answer, category }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className='border-b border-gray-200 py-4'
      initial={false}
      // animate={{
      //   backgroundColor: isOpen ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
      // }}
      transition={{ duration: 0.3 }}
    >
      <button
        className='flex justify-between items-center w-full text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-lg font-medium'>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className='w-5 h-5 text-primary' />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className='mt-2 text-gray-600'>{answer}</p>
            <span className='mt-2 inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full'>
              {category}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
