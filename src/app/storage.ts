import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useStorageQuery = (queryKey: string, initialData?: any) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [queryKey],
    queryFn: (): any | undefined => {
      return undefined;
    },
    cacheTime: Infinity,
    initialData: () => {
      // Check if we have anything in cache and return that, otherwise get initial data
      const cachedData = queryClient?.getQueryData<any | undefined>([queryKey]);
      if (cachedData) {
        return cachedData;
      }

      return initialData;
    },
  });

  const setData = (data: any) => {
    queryClient?.setQueryData([queryKey], () => data);
  };

  return { data, setData, isLoading, isError, error };
};
