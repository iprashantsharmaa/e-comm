import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAllCategories } from '../services/api';

export function useGetAllCategories(): UseQueryResult<string[], Error> {
  const queryResult = useQuery<string[], Error>(
    ['categories'],
    getAllCategories,

  );

  return queryResult;
}
