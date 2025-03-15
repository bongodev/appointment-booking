import { appConfig } from '@/config';
import { authServices } from '@/services';

export default function useLogin() {
  const login = async (email: string, password: string) => {
    // TODO move login url to env

    const { accessToken, refreshToken } = await authServices.emailLogin({
      email,
      password,
    });

    localStorage.setItem(appConfig.AUTH.ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(appConfig.AUTH.REFRESH_TOKEN_KEY, refreshToken);
  };

  return {
    login,
  };
}
