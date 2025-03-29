import { appConfig } from "@/config";
import http from "@/config/http";
import { useQuery } from "@tanstack/react-query";

const CURRENT_USER_QUERY_KEY = 'currentUser'
export const useCurrenUser = () =>{
  const currentUserQuery = useQuery({
    queryKey : [CURRENT_USER_QUERY_KEY],
    queryFn : () => fetchCurrentUser(),
    retry: false,
    staleTime: 1000 * 5 * 60,
  });
  
  const fetchCurrentUser = async () =>{
      const accessToken = localStorage.getItem(appConfig.AUTH.ACCESS_TOKEN_KEY);
      if (!accessToken){
          return null;
        }
        const { data } = await http.get('/api/users/current-user');
        return data;
    }
    
    return currentUserQuery;

}

