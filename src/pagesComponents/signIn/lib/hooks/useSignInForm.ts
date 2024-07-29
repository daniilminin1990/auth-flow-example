import { useForm } from 'react-hook-form';

import { useLoginMutation } from '@/shared/api';
import { SignInSchemaType, signInSchema } from '@/shared/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

export const useSignInForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit
  } = useForm<SignInSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(signInSchema)
  });
  const router = useRouter();

  const [login] = useLoginMutation();
  const onSubmit = (data: SignInSchemaType) => {};

  return {
    control,
    errors,
    handleSubmit,
    isValid,
    onSubmit
  };
};
