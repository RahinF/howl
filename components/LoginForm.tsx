'use client';
import CardBase from '@/components/CardBase';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';


import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import CardBaseContainer from './CardBaseContainer';

const formSchema = z.object({
  email: z.string().min(1, { message: 'Email is required.' }).email({
    message:
      'Please provide an email in the correct format e.g. john.doe@gmail.com',
  }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

interface Props {
  login: () => void;
}

const LoginForm = ({ login }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // await login(values.email, values.password)

    console.log(values);
  }

  return (
    <CardBaseContainer className="flex items-center justify-center h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md w-full"
        >
          <CardBase className='py-10'>
            <CardHeader>
              <CardTitle className="text-white">Login</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
            </CardHeader>

            <CardContent className='flex flex-col gap-4'>
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
                    
                    <FormMessage />
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
                   
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Login</Button>
            </CardContent>
          </CardBase>
        </form>
      </Form>
    </CardBaseContainer>
  );
};

export default LoginForm;
