'use client';

import { loginFormSchema } from '@/app/constants';
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
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (!response?.error) {
      router.push('/');
      router.refresh();
    }

    if (response?.error) {
      console.log(response?.error);
    }
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
                <Button
                  type="submit"
                  className="mt-6 bg-[#282D4A] duration-500 self-center w-24"
                >
                  Login
                </Button>
              </CardContent>
            </CardBase>
          </form>
        </Form>
      </CardBaseContainer>
    </CardProvider>
  );
}
