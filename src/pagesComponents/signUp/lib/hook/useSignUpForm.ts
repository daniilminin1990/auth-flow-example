import { useForm } from 'react-hook-form';

import { useRegistrationMutation } from '@/shared/api';
import { SignUpSchemaType, signUpSchema } from '@/shared/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

export const useSignUpForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit
  } = useForm<SignUpSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema)
  });

  const [register] = useRegistrationMutation();
  const onSubmit = (data: SignUpSchemaType) => {};

  return {
    control,
    errors,
    handleSubmit,
    isValid,
    onSubmit
  };
};
