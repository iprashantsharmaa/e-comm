import { Product } from '../types/products';

export const filterProducts = (arr: Product[], searchQuery: string) => (
  arr.filter((item) => item?.title.toLowerCase().includes(searchQuery.toLowerCase()))
);
