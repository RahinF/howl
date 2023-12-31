'use client';

import CardBase from '@/components/CardBase';
import { ComboboxForm } from '@/components/ComboboxForm';
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
import { AddPost } from '@/requests/post';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  comment: z.string().min(1).max(250),
  file: z.custom<File>((v) => v instanceof File).optional(),
  category: z.string({
    required_error: 'Please select a category.',
  }),
});

export type FormSchema = z.infer<typeof formSchema>;

interface Props {
  addPost: AddPost;
}

const AddPostForm = ({ addPost }: Props) => {
  const { data: session } = useSession();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addPost,
    onSettled: async () => {
      form.reset();
      return await queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const inputFileRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  });

  const noComment = !!!form.getValues('comment').length;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate({ values, userId: session?.user?.id });
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

  const removeFileOnClick = () => {
    form.resetField('file');
  };

  const selectedFile = form.getValues('file');

  const [filePreview, setFilePreview] = useState<string>('');

  useEffect(() => {
    if (!selectedFile) return;
    const objectUrl = URL.createObjectURL(selectedFile);
    setFilePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardBase>
          <CardContent className="pt-6">
            {selectedFile && (
              <div className="rounded-lg relative">
                <Image
                  src={filePreview}
                  alt="file preview"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="rounded-[inherit] w-full h-auto"
                />

                <IconButton
                  className="absolute right-3 top-10"
                  onClick={removeFileOnClick}
                  aria-label="remove file"
                >
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden
                    focusable="false"
                  />
                </IconButton>
              </div>
            )}

            <ComboboxForm form={form} />

            <div className="flex justify-between gap-3 items-center pt-6">
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
                disabled={noComment}
              >
                <PaperAirplaneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden
                  focusable="false"
                />
              </IconButton>
            </div>
          </CardContent>
        </CardBase>
      </form>
    </Form>
  );
};

export default AddPostForm;
