import { useMutation } from '@tanstack/react-query';
import { userService } from '@/services';
export const useUserUpdate = () => {
  const {
    mutate: updateUser,
    isError,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: ({
      name,
      mobile,
      email,
      userId,
    }: {
      name: string;
      mobile: string;
      email: string;
      userId: string;
    }) => userService.updateUser({ name, mobile, email, userId }),
  });

  return {
    updateUser,
    isError,
    isSuccess,
    isPending,
  };
};
