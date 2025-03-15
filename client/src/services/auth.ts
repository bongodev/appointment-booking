import axios from 'axios';

export const emailLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  axios
    .post('http://localhost:8000/api/auth/login', {
      email,
      password,
    })
    .then(({ data }) => data);

export const tokenLogin = (refreshToken: string) =>
  axios
    .post('http://localhost:8000/api/auth/login', {
      refreshToken,
    })
    .then(({ data }) => data);
