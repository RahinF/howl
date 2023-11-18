import Avatar from '@/components/Avatar';
import Image from 'next/image';
import Timeago from 'react-timeago';

interface Props {
  post: Post;
}

const RecentActivityCard = ({ post }: Props) => {
  return (
    <div data-testid="recent-activity-card">
      <div className="flex gap-1 items-center">
        <Avatar
          className="h-8 w-8 mr-2"
          src={post.author.avatar}
          username={post.author.username}
        />
        <p className="text-sm font-medium leading-none text-white">
          {post.author.username}
        </p>
        <span className="font-black text-muted-foreground">·</span>
        <p className="text-xs text-muted-foreground">
          <Timeago
            data-testid="date"
            date={post._createdAt}
          />
        </p>
      </div>
      <div className="w-full">
        {post.mainImage ? (
          <div className="rounded-lg mt-4">
            <Image
              src={post.mainImage}
              alt=""
              width={260}
              height={200}
              className="h-auto w-full rounded-[inherit]"
            />
          </div>
        ) : (
          <p className="mt-2 text-sm text-white line-clamp-2">{post.body}</p>
        )}
      </div>
    </div>
  );
};

export default RecentActivityCard;
