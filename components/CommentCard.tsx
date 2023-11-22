import Avatar from '@/components/Avatar';
import Timeago from 'react-timeago';

interface Props {
  comment: PostComment;
}

const CommentCard = ({ comment }: Props) => {
  return (
    <div
      className="py-6 flex gap-3"
      data-testid="comment-card"
    >
      <Avatar
        username={comment.author.username}
        src={comment.author.avatar}
      />

      <div>
        <div className="flex gap-2 items-center">
          <span className="text-white font-semibold">
            {comment.author.username}
          </span>
          <span className="font-black text-muted-foreground">·</span>
          <Timeago
            className="text-sm text-muted-foreground"
            data-testid="comment-date"
            date={comment._createdAt}
          />
        </div>
        <p className="text-white">{comment.body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
