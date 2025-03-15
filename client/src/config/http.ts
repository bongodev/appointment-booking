import axios from 'axios';
import { appConfig } from '.';
import { authServices } from '@/services';

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-type': 'application/json',
  },
});

http.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(appConfig.AUTH.ACCESS_TOKEN_KEY);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log('Token expired!!');
    if (error.response.status === 401 && !error.config._retry) {
      const refreshToken = localStorage.getItem(
        appConfig.AUTH.REFRESH_TOKEN_KEY
      );
      if (!refreshToken) {
        window.location.replace('/login');
        return;
      }
      try {
        const { accessToken } = await authServices.tokenLogin(refreshToken);
        if (!accessToken) {
          window.location.replace('/login');
          return;
        }
        // localStorage.setItem(appConfig.AUTH.ACCESS_TOKEN_KEY, accessToken);
        error.config.headers.Authorization = `Bearer ${accessToken}`;
        return axios(error.config);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        window.location.replace('/login');
      }
    }
  }
);

export default http;
