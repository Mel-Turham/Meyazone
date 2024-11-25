import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className='relative w-full max-w-xl mx-auto mb-8'>
      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
      <Input
        type='text'
        placeholder='Search FAQs...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='pl-10 pr-4 py-2 w-full rounded-full border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300'
      />
    </div>
  );
}
