import http from '@/config/http';

export const updateProfile = ({
  city,
  country,
  zipCode,
  userId,
}: {
  city: string;
  country: string;
  zipCode: string;
  userId: string;
}) =>
  http.put(`/api/user-profile/${userId}`, {
    address: {
      city,
      country,
      zipCode,
    },
  });
