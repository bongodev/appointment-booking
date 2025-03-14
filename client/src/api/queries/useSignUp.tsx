import { useMutation } from '@tanstack/react-query';

import http from '@/config/http';
import { SignupFormData } from '@/schema';

export const useSignUp = () => {
  const singupMutaiton = useMutation({
    mutationFn: (signUpPayload: SignupFormData) =>
      http.post('/api/signup', signUpPayload),
    onSuccess: () => {
      alert('Signup successful! Account created.');
    },
    onError: (error) => {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    },
  });

  return singupMutaiton;
};
