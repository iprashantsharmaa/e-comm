import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAllProducts } from '../services/api';
import { Product } from '../types/products';
import { filterProducts } from '../utils/helper';

type Params = {
  searchQuery: string;
  category?: string;
}

export function useGetProducts({
  searchQuery,
  category,
}: Params): UseQueryResult<Product[], Error> {
  const queryResult = useQuery<Product[], Error>(
    ['products', category],
    () => getAllProducts(category),
    {
      select: (data: Product[]) => (searchQuery ? filterProducts(data, searchQuery) : data),
    },

  );

  return queryResult;
}
