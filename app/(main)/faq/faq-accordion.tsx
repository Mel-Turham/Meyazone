import { FAQItem } from './faq-item';

interface FAQAccordionProps {
  items: Array<{
    question: string;
    answer: string;
    category: string;
  }>;
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className='space-y-4'>
      {items.map((item, index) => (
        <FAQItem key={index} {...item} />
      ))}
    </div>
  );
}
