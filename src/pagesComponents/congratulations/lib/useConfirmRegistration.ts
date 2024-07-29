import { useConfirmRegistrationMutation } from '@/shared/api';
import { useRouter } from 'next/router';

export const useConfirmRegistration = () => {
  const [confirmRegistration] = useConfirmRegistrationMutation();
  const router = useRouter();
  const { query } = router;
  const code = query.code; // Доступ к параметру "code" из URL

  return {};
};
