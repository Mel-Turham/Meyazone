import { useState, useMemo } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function useSearch(items: FAQItem[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return { searchTerm, setSearchTerm, filteredItems };
}
