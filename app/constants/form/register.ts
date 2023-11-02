import { z } from 'zod';

const registerFormSchema = z
  .object({
    username: z.string().min(1, { message: 'Username is required.' }),
    email: z.string().min(1, { message: 'Email is required.' }).email({
      message: 'Please provide valid email address.',
    }),
    password: z
      .string()
      .min(8, { message: 'Password must have than 8 characters.' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password entered should match.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

export default registerFormSchema;
