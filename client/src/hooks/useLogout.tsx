import { appConfig } from '@/config';
import { useNavigate } from 'react-router';

export const useLogout = () => {
  const navigate = useNavigate();
  return () => {
    localStorage.removeItem(appConfig.AUTH.ACCESS_TOKEN_KEY);
    localStorage.removeItem(appConfig.AUTH.REFRESH_TOKEN_KEY);
    navigate('/login');
  };
};
