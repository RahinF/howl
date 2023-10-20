import Avatar from '@/components/Avatar';
import Timeago from 'react-timeago';

interface Props {
  comment: PostComment;
}

const CommentCard = ({ comment }: Props) => {
  const { content, date, user } = comment;
  return (
    <div data-testid="comment-card">
      <div className="py-6 flex gap-3">
        <Avatar
          username={user.username}
          src={user.image}
        />

        <div>
          <div className="flex gap-2 items-center">
            <span className="text-white font-semibold">{user.username}</span>
            <span className="font-black text-muted-foreground">·</span>
            <Timeago
              className="text-sm text-muted-foreground"
              data-testid="comment-date"
              date={date}
            />
          </div>
          <p className="text-white">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
