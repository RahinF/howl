'use client';

import CardBase from '@/components/CardBase';
import IconButton from '@/components/IconButton';
import { CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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

  const commentLength = !!!form.getValues('comment').length;
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
          <CardContent className="flex justify-between gap-3 items-center pt-6">
            <IconButton
              onClick={fileSelectOnClick}
              aria-label="select file"
            >
              <PhotoIcon
                className="h-6 w-6 text-white"
                aria-hidden
                focusable="false"
              />
            </IconButton>

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="flex-1 flex flex-col items-center space-y-0">
                  <FormControl>
                    <Input
                      placeholder="What's going on?"
                      className="border-none bg-[#282D4A] text-white"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem className="hidden">
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

            <IconButton
              type="submit"
              aria-label="create post"
              disabled={commentLength}
            >
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
