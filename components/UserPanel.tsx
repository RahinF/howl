import Avatar from '@/components/Avatar';
import CardBase from '@/components/CardBase';
import IconButton from '@/components/IconButton';
import Tooltip from '@/components/Tooltip';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CardProvider } from '@/context/CardContext';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { DefaultUser } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import UserPanelForm from '@/components/UserPanelForm';

export default function UserPanel() {
  const { data: session } = useSession();

  return (
    <CardBase>
      <div className="p-6 text-white flex justify-between items-center">
        <UserDetail user={session?.user!} />
        <SettingsButton />
      </div>
    </CardBase>
  );
}

function UserDetail({ user }: { user: DefaultUser }) {
  const username = user?.name!;
  const email = user?.email!;
  const image = user?.image!;

  return (
    <div className="flex flex-row gap-4 items-center space-y-0">
      <Avatar
        username={username}
        src={image}
        className="h-12 w-12"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold tracking-tight text-white text-base">
          {username}
        </h3>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
    </div>
  );
}

function SettingsButton() {
  const [open, setOpen] = useState<boolean>(false);

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      // onOpenChange={setOpen}
    >
      <Tooltip
        label="Settings"
        side="bottom"
      >
        <IconButton aria-label="settings button">
          <DialogTrigger asChild>
            <Cog8ToothIcon
              className="h-6 w-6 text-white"
              aria-hidden
              focusable="false"
            />
          </DialogTrigger>
        </IconButton>
      </Tooltip>

      <DialogContent>
        <CardProvider>
          <AnimatePresence mode="wait">
            <motion.div
              key={open.toString()}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
            >
              <UserPanelForm closeDialog={closeDialog}/>
            </motion.div>
          </AnimatePresence>
        </CardProvider>
      </DialogContent>
    </Dialog>
  );
}
