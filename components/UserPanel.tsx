import Avatar from '@/components/Avatar';
import CardBase from '@/components/CardBase';
import IconButton from '@/components/IconButton';
import Tooltip from '@/components/Tooltip';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import { DefaultUser } from 'next-auth';
import { useSession } from 'next-auth/react';

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
  return (
    <Tooltip
      label="Settings"
      side="bottom"
    >
      <IconButton>
        <Cog8ToothIcon
          className="h-6 w-6 text-white"
          aria-hidden
          focusable="false"
        />
      </IconButton>
    </Tooltip>
  );
}
