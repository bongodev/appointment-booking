import axios from 'axios';

export default function useLogin() {
  const login = async (email: string, password: string) => {
    // TODO move login url to env
    const { accessToken, refreshToken } = (
      await axios.post('http://localhost:8000/api/auth/login', {
        email,
        password,
      })
    ).data;

    localStorage.setItem('ap-access-token', accessToken);
    localStorage.setItem('ap-refresh-token', refreshToken);
  };

  return {
    login,
  };
}
