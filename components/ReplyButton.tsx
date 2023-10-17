import IconButton from '@/components/IconButton';
import Tooltip from '@/components/Tooltip';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CardProvider } from '@/context/CardContext';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ReplyForm from './ReplyForm';

interface Props {
  replyTo: Post;
}

const ReplyButton = ({ replyTo }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const addComment = () => {};

  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <Tooltip label="Reply">
        <IconButton>
          <DialogTrigger asChild>
            <ArrowUturnLeftIcon
              className="h-6 w-6 text-white"
              aria-hidden
              focusable="false"
            />
          </DialogTrigger>
        </IconButton>
      </Tooltip>

      <DialogContent className="">
        <CardProvider>
          <AnimatePresence mode="wait">
            <motion.div
              key={open.toString()}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
            >
              <ReplyForm
                addComment={addComment}
                closeDialog={closeDialog}
                replyTo={replyTo}
              />
            </motion.div>
          </AnimatePresence>
        </CardProvider>
      </DialogContent>
    </Dialog>
  );
};

export default ReplyButton;
