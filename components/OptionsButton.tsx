import CardBase from '@/components/CardBase';
import CardBaseContainer from '@/components/CardBaseContainer';
import IconButton from '@/components/IconButton';
import Tooltip from '@/components/Tooltip';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { CardProvider } from '@/context/CardContext';
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface Dialog {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

interface Props {
  post: Post;
}

export default function OptionsButton({ post }: Props) {
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);

  return (
    <DropdownMenu>
      <Tooltip label="Options">
        <DropdownMenuTrigger asChild>
          <IconButton
            data-testid="options-button"
            aria-label="options button"
          >
            <EllipsisVerticalIcon
              className="h-6 w-6 text-white"
              aria-hidden
              focusable="false"
            />
          </IconButton>
        </DropdownMenuTrigger>
      </Tooltip>
      <DropdownMenuContent className="w-auto bg-[#141627] py-2 text-white border-none">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer px-4"
            onClick={() => setOpenEditDialog(true)}
          >
            <PencilIcon className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          {/* start */}

          <DropdownMenuItem
            className="cursor-pointer px-4"
            onClick={() => setOpenDeleteDialog(true)}
          >
            <TrashIcon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>

          {/* end */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
      {/* eddit poist skeleton to include this button */}
      {/* add multpe dialog  */}
      {/* fix dialog border color */}
      {/* add edit, delete function */}

      <EditPostDialog
        open={openEditDialog}
        onOpenChange={setOpenEditDialog}
        post={post}
      />

      <DeletePostDialog
        open={openDeleteDialog}
        onOpenChange={setOpenDeleteDialog}
        post={post}
      />
    </DropdownMenu>
  );
}

interface EditDialog extends Dialog {
  post: Post;
}

const formSchema = z.object({
  comment: z.string().min(1, { message: 'Comment is required.' }),
});

function EditPostDialog({ open, onOpenChange, post }: EditDialog) {
  const closeDialog = () => onOpenChange(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: post.body,
    },
    mode: 'all',
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {}

  const noCommentLength = !!!form.getValues('comment').length;
  const sameText = post.body?.trim() === form.getValues('comment').trim();

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <CardProvider>
          <AnimatePresence mode="wait">
            <motion.div
              key={open.toString()}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
            >
              <CardBaseContainer>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardBase className="pt-10 pb-6">
                      <IconButton
                        className="absolute right-5 top-5"
                        onClick={() => onOpenChange(false)}
                        aria-label="close"
                      >
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden
                          focusable="false"
                        />
                      </IconButton>
                      <CardHeader>
                        <CardTitle className="text-white">Edit Post</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-8">
                        {post.mainImage && (
                          <div className="rounded-lg">
                            <Image
                              src={post.mainImage}
                              alt={`${post._id}'s image`}
                              width={644}
                              height={483}
                              className="rounded-[inherit]"
                            />
                          </div>
                        )}
                        <FormField
                          control={form.control}
                          name="comment"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea
                                  placeholder="Post your comment"
                                  className="border-none bg-[#282D4A] text-white resize-none"
                                  {...field}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-4 self-end">
                          <Button
                            type="button"
                            className="bg-[#282D4A] duration-500 w-24"
                            aria-label="update post"
                            disabled={sameText || noCommentLength}
                          >
                            Update
                          </Button>
                          <Button
                            type="button"
                            className="bg-[#282D4A] duration-500 w-24"
                            onClick={closeDialog}
                            aria-label="close"
                          >
                            Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </CardBase>
                  </form>
                </Form>
              </CardBaseContainer>
            </motion.div>
          </AnimatePresence>
        </CardProvider>
      </DialogContent>
    </Dialog>
  );
}

function DeletePostDialog({ open, onOpenChange, post }: EditDialog) {
  const closeDialog = () => onOpenChange(false);
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <CardProvider>
          <CardBaseContainer>
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
              <CardHeader>
                <CardTitle className="text-white">Delete Post</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-8">
                <p className="text-white">
                  This will delete this post permanently. Are you sure?
                </p>

                <div className="flex gap-4 self-end">
                  <Button
                    type="button"
                    className="bg-rose-500 hover:bg-red-800 duration-500 w-24"
                    aria-label="confirm delete post"
                  >
                    Delete
                  </Button>
                  <Button
                    type="button"
                    className="bg-[#282D4A] duration-500 w-24"
                    onClick={closeDialog}
                    aria-label="close"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </CardBase>
          </CardBaseContainer>
        </CardProvider>
      </DialogContent>
    </Dialog>
  );
}
