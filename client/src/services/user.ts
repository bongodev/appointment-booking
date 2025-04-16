import http from '@/config/http';

export const updateUser = ({
  name,
  mobile,
  email,
  userId,
}: {
  name: string;
  mobile: string;
  email: string;
  userId: string;
}) =>
  http.put(`/api/users/${userId}`, {
    name,
    mobile,
    email,
    userId,
  });
