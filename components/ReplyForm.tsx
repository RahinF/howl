import Avatar from '@/components/Avatar';
import CardBase from '@/components/CardBase';
import CardBaseContainer from '@/components/CardBaseContainer';
import IconButton from '@/components/IconButton';
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
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import TimeAgo from 'react-timeago';
import * as z from 'zod';

interface Props {
  addComment: () => void;
  closeDialog: () => void;
  replyTo: Post;
}

const formSchema = z.object({
  comment: z.string().min(1, { message: 'Comment is required.' }),
});

const ReplyForm = ({ addComment, closeDialog, replyTo }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addComment();

    console.log(values);
    closeDialog();
  }

  const commentLength = !!!form.getValues('comment').length;

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
            <CardHeader className="flex-row gap-4 items-center pb-2 space-y-0">
              <Avatar
                username={replyTo.author.username}
                src={replyTo.author.avatar}
                className="w-12 h-12"
              />

              <div className="flex flex-col">
                <CardTitle className="text-white text-base">
                  {replyTo.author.username}
                </CardTitle>

                <CardDescription>
                  <TimeAgo
                    data-testid="date"
                    date={replyTo._createdAt}
                  />
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-white">
                  {replyTo.body}
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Post your reply"
                          className="border-none bg-[#282D4A] text-white resize-none"
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
                  disabled={commentLength}
                >
                  Reply
                </Button>
              </div>
            </CardContent>
          </CardBase>
        </form>
      </Form>
    </CardBaseContainer>
  );
};

export default ReplyForm;
