'use client';
import { Button } from '@/components/ui/button';

import React, { useState } from 'react';
import { ProductInterface } from '@/utils/getProducts';
import ProductCard from './ProductCard';

type ProductsProps = {
  products: ProductInterface[];
};

const PaginationProducts = ({ products }: ProductsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPages = 16;
  // Calculer l'index des produits à afficher pour chaque page
  const indexDernierProduit = currentPage * productPerPages;
  const indexPremierProduit = indexDernierProduit - productPerPages;
  const produitsAffiches = products.slice(
    indexPremierProduit,
    indexDernierProduit
  );
  // Calculer le nombre total de pages
  const nombreTotalPages = Math.ceil(products.length / productPerPages);

  return (
    <div className='py-4 px-2 space-y-3 flex flex-col  gap-3 justify-between'>
      <div className='grid grid-cols-2 gap-3 '>
        {produitsAffiches.map((product) => (
          <ProductCard
            orientation='horizontal'
            id={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
            details={product.details}
            oldPrice={product?.oldPrice}
          />
        ))}
      </div>
      {/* buttons naviagations  */}
      <div className='flex items-center gap-1 mb-auto justify-center'>
        <Button
          disabled={currentPage === 1 ? true : false}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <div className='flex gap-4 items-center'>
          {Array.from({ length: nombreTotalPages }, (_, index) => (
            <span
              onClick={() => setCurrentPage(index + 1)}
              className={` rounded-full p-4 h-7 w-7 cursor-pointer flex items-center justify-center ${
                currentPage === index + 1 ? 'bg-myprimary' : 'bg-myprimary/20 '
              }`}
              key={index}
            >
              {index + 1}
            </span>
          ))}
        </div>

        <Button
          disabled={currentPage === nombreTotalPages ? true : false}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PaginationProducts;
