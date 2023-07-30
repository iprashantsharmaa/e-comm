import React, { useMemo } from 'react';
import ProductCard from '../ProductCard/index';
import { useGetProducts } from '../../hooks/useGetProducts';
import LoadingSkeleton from '../ProductCard/LoadingSkeleton';

type Props = {
  category: string;
  searchQuery: string;
};

export default function Products({
  category,
  searchQuery,
}: Props) {
  const {
    data: products = [],
    isLoading,
  } = useGetProducts({
    category: category === 'All categories' ? '' : category,
    searchQuery,
  });

  const title = useMemo(
    () => (category === 'All categories' ? 'Men and Women fashion' : category),
    [category],
  );

  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center space-y-10 flex-1 pt-4 pb-8">
      <span className="text-4xl font-bold capitalize">{title}</span>
      {!isLoading && !products.length && (
        <p className="text-base font-semibold text-center">No Products Found</p>
      )}
      <div className="px-32 grid justify-items-center content-center grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
        {isLoading && (
          <LoadingSkeleton />
        )}
        {!isLoading && products.map(({
          id,
          title,
          price,
          image,
        }) => (
          <ProductCard
            key={id}
            itemName={title}
            price={price}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}
