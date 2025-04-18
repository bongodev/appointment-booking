import { appConfig } from '@/config';
import http from '@/config/http';
import { useQuery } from '@tanstack/react-query';

const CURRENT_USER_QUERY_KEY = 'currentUser';

export const useCurrentUser = () => {
  const fetchCurrentUser = async () => {
    try {
      const { data } = await http.get('/api/users/current-user');
      return data;
    } catch (error) {
      localStorage.removeItem(appConfig.AUTH.ACCESS_TOKEN_KEY);
      localStorage.removeItem(appConfig.AUTH.REFRESH_TOKEN_KEY);
      throw error;
    }
  };

  const currentUserQuery = useQuery({
    queryKey: [CURRENT_USER_QUERY_KEY],
    queryFn: () => fetchCurrentUser(),
    retry: false,
    staleTime: 1000 * 15 * 60,
    enabled: Boolean(localStorage.getItem(appConfig.AUTH.ACCESS_TOKEN_KEY)),
  });

  return {
    currentUser: currentUserQuery.data,
    isAuthenticated: Boolean(currentUserQuery.data),
    isLoading: currentUserQuery.isLoading,
    error: currentUserQuery.error,
    refetch: currentUserQuery.refetch,
  };
};
