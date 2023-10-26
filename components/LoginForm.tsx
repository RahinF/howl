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
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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

  const [loading, setLoading] = useState<boolean>(false);
  const [serverError, setserverError] = useState<string>('');

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      setLoading(true);
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
        setserverError(response?.error);
      }
    } catch (error) {
    } finally {
      setLoading(false);
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
                <CardDescription
                  className={serverError && 'text-destructive'}
                  {...(serverError && { role: 'alert' })}
                >
                  {serverError ? serverError : 'Lorem ipsum dolor sit amet.'}
                </CardDescription>
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
                  className="mt-6 bg-[#282D4A] duration-500 self-center w-36"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? 'Please wait' : 'Login'}
                </Button>
              </CardContent>
            </CardBase>
          </form>
        </Form>
      </CardBaseContainer>
    </CardProvider>
  );
}
