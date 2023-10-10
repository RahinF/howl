'use client';

import CardBase from '@/components/CardBase';
import IconButton from '@/components/IconButton';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { ChangeEvent, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';

const formSchema = z.object({
  comment: z.string().min(1).max(250),
  file: z.custom<File>((v) => v instanceof File).optional(),
});

interface Props {}

const MessageBox = ({}: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const fileSelectOnClick = () => {
    inputFileRef.current?.click();
  };

  const onFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: (...event: any[]) => void,
  ) => {
    const files = event.target.files;
    if (files) {
      onChange(files[0]);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardBase>
          <CardHeader className="pb-2">
            <CardTitle className="mb-4 text-white text-lg">
              Tell the world what&apos;s happening!
            </CardTitle>
          </CardHeader>

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type your message here."
                    className="border-none bg-[#282D4A] text-white"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="file"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...field}
                    ref={inputFileRef}
                    onChange={(event) => {
                      onFileChange(event, onChange);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <CardContent className="flex justify-between gap-3 items-center">
            <IconButton onClick={fileSelectOnClick}>
              <PhotoIcon
                className="h-6 w-6 text-white"
                aria-hidden
                focusable="false"
              />
            </IconButton>

            <IconButton type="submit">
              <PaperAirplaneIcon
                className="h-6 w-6 text-white"
                aria-hidden
                focusable="false"
              />
            </IconButton>
          </CardContent>
        </CardBase>
      </form>
    </Form>
  );
};

export default MessageBox;
