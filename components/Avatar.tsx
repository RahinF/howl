import {
  Avatar as AvatarBase,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { getInitials } from '@/lib/getInitials';

interface Props {
  src?: string;
  username: string;
  className?: string;
}

const Avatar = ({ src, username, className }: Props) => {
  const initials = getInitials({ name: username });

  return (
    <AvatarBase className={className}>
      <AvatarImage
        src={src}
        alt={`${username}' avatar`}
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </AvatarBase>
  );
};

export default Avatar;
