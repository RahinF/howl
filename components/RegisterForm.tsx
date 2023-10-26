import CardBase from '@/components/CardBase';
import CardBaseContainer from '@/components/CardBaseContainer';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CardProvider } from '@/context/CardContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z
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

interface Props {
  register: ({
    email,
    password,
    username,
    confirmPassword,
  }: RegisterFormValues) => Promise<void>;
}

export default function RegisterForm({ register }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    register({ ...values });

    console.log(values);
  }

  return (
    <CardProvider>
      <CardBaseContainer className="flex items-center justify-center h-screen">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-md w-full"
          >
            <CardBase className="pt-10 pb-6">
              <CardHeader>
                <CardTitle className="text-white">
                  Lorem, ipsum dolor.
                </CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Username</FormLabel>
                      <FormControl>
                        <Input
                          className="border-none bg-[#282D4A] text-white"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage role="alert" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="border-none bg-[#282D4A] text-white"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage role="alert" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="border-none bg-[#282D4A] text-white"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage role="alert" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="border-none bg-[#282D4A] text-white"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage role="alert" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="mt-6 bg-[#282D4A] duration-500 self-center w-24"
                >
                  Register
                </Button>
              </CardContent>
            </CardBase>
          </form>
        </Form>
      </CardBaseContainer>
    </CardProvider>
  );
}
