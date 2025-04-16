import { useMutation } from '@tanstack/react-query';
import { profileService } from '@/services';
export const useProfileUpdate = () => {
  const {
    mutate: updateProfile,
    isError,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: ({
      city,
      country,
      zipCode,
      userId,
    }: {
      city: string;
      country: string;
      zipCode: string;
      userId: string;
    }) => profileService.updateProfile({ city, country, zipCode, userId }),
  });

  return {
    updateProfile,
    isError,
    isSuccess,
    isPending,
  };
};
