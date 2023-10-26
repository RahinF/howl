import { z } from 'zod';

const loginFormSchema = z.object({
  email: z.string().min(1, { message: 'Email is required.' }).email({
    message: 'Please provide valid email address.',
  }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export default loginFormSchema;
