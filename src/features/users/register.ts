import { useRegister } from './useRegister';

export type RegisterArgs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmationPassword: string;
};

export function userRegister(args: RegisterArgs) {
  const { register } = useRegister();
  return register(args);
}
