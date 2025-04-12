import { userProfileServices } from '@/services';
import { useMutation } from '@tanstack/react-query';

export const useProfileUpdate = () => {
  const {
    mutate: updateProfile,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: userProfileServices.userProfileUpdate,
  });

  return {
    updateProfile,
    isPending,
    isError,
    isSuccess,
  };
};
