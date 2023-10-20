import Avatar from '@/components/Avatar';
import Image from 'next/image';
import ReactTimeago from 'react-timeago';

interface Props {
  post: Post;
}

const RecentActivityCard = ({ post }: Props) => {
  const { content, date, user, image } = post;

  return (
    <div data-testid="recent-activity-card">
      <div className="flex gap-1 items-center">
        <Avatar
          className="h-8 w-8 mr-2"
          src={user.image}
          username={user.username}
        />
        <p className="text-sm font-medium leading-none text-white">
          {user.username}
        </p>
        <span className="font-black text-muted-foreground">·</span>
        <p className="text-xs text-muted-foreground">
          <ReactTimeago
            data-testid="date"
            date={date}
          />
        </p>
      </div>
      <div className="w-full">
        {image ? (
          <div className="rounded-lg mt-4">
            <Image
              src={image}
              alt=""
              width={260}
              height={200}
              className="h-auto w-full rounded-[inherit]"
            />
          </div>
        ) : (
          <p className="mt-2 text-sm text-white line-clamp-2">{content}</p>
        )}
      </div>
    </div>
  );
};

export default RecentActivityCard;
