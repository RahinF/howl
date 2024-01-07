import Avatar from '@/components/Avatar';
import CardBase from '@/components/CardBase';
import CardBaseContainer from '@/components/CardBaseContainer';
import IconButton from '@/components/IconButton';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface Props {
  closeDialog: () => void;
}

const formSchema = z.object({
  comment: z.string().min(1, { message: 'Comment is required.' }),
});

export default function UserPanelForm({ closeDialog }: Props) {
  const { data: session } = useSession();

  const user = session?.user!;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: user.name!,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <CardBaseContainer>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardBase className="pt-10 pb-6">
            <IconButton
              className="absolute right-5 top-5"
              onClick={closeDialog}
              aria-label="close"
            >
              <XMarkIcon
                className="h-6 w-6 text-white"
                aria-hidden
                focusable="false"
              />
            </IconButton>
            <CardHeader className="flex-col gap-4 items-center pb-2 space-y-0">
                <div className='relative'>

              <Avatar
                username={user.name!}
                src={user.image!}
                className="w-32 h-32"
                />
                <div className='bg-white h-8 w-8 rounded-full absolute bottom-2 -right-2'/>
                </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-white"></p>
              </div>
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Username</FormLabel>
                      <FormControl>
                        <Input
                          className="border-none bg-[#282D4A] text-white"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-[#282D4A] duration-500 self-end w-24"
                >
                  Update
                </Button>
              </div>
            </CardContent>
          </CardBase>
        </form>
      </Form>
    </CardBaseContainer>
  );
}
