import { useGoogleOAuthMutation } from '@/shared/api';

export const useAuthGoogle = () => {
  const [authMeGoogle] = useGoogleOAuthMutation();
};
