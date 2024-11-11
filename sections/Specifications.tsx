import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TabSinguelProduct from '@/components/customs/TabSinguelProduct';
type Specification = {
  name: string;
  value: string;
};
const specifications: Specification[] = [
  { name: 'Brand', value: 'TechPro' },
  { name: 'Model', value: 'TP-2000' },
  { name: 'Screen Size', value: '15.6 inches' },
  { name: 'Processor', value: 'Intel Core i7-11800H' },
  { name: 'RAM', value: '16GB DDR4' },
  { name: 'Storage', value: '512GB NVMe SSD' },
  { name: 'Graphics', value: 'NVIDIA GeForce RTX 3060 6GB' },
  { name: 'Operating System', value: 'Windows 11 Home' },
  { name: 'Battery Life', value: 'Up to 8 hours' },
  { name: 'Weight', value: '4.5 lbs (2.04 kg)' },
];
const Specifications = () => {
  return (
    <section className='py-8' id='specification'>
      <div className='container'>
        <TabSinguelProduct activeLink='specification' />
        <div className='overflow-x-auto'>
          <Table className='mt-10'>
            <TableHeader>
              <TableRow>
                <TableHead className='w-1/3 md:w-1/4'>Specification</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specifications.map((spec) => (
                <TableRow key={spec.name}>
                  <TableCell className='font-medium'>{spec.name}</TableCell>
                  <TableCell>{spec.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className='overflow-x-auto mt-10'>
          <h3 className='text-2xl'>Technical Specifications</h3>
          <Table className='mt-2'>
            <TableHeader>
              <TableRow>
                <TableHead className='w-1/3 md:w-1/4'>Specification</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specifications.map((spec) => (
                <TableRow key={spec.name}>
                  <TableCell className='font-medium'>{spec.name}</TableCell>
                  <TableCell>{spec.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
