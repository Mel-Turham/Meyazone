import { useCurrencyStore } from '@/store/useCurrencyStore';
import ProductCard from './ProductCard';

interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  details: string;
}

const TabTopRated = ({ tabTopRated }: { tabTopRated: Props[] }) => {
  const { currency } = useCurrencyStore();
  return (
    <>
      {tabTopRated.map((product, index) => {
        return (
          <ProductCard
            key={index}
            id={product.id}
            orientation='vertical'
            name={product.name}
            image={product.image}
            details={product.details}
            oldPrice={product.oldPrice}
            price={product.price}
          />
        );
      })}
    </>
  );
};

export default TabTopRated;
