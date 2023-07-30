import { apiUrl } from '../utils/env';
import { Product } from '../types/products';

export const getAllCategories = async (): Promise<string[]> => (
  fetch(`${apiUrl}/categories`)
    .then((res) => res.json())
);

export const getAllProducts = async (category?: string): Promise<Product[]> => {
  const endPoint = category ? `${apiUrl}/category/${category}` : apiUrl;
  return fetch(`${endPoint}`)
    .then((res) => res.json());
};
