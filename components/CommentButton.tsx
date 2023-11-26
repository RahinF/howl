import IconButton from '@/components/IconButton';
import Tooltip from '@/components/Tooltip';
import { Badge } from '@/components/ui/badge';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

interface Props {
  showComments: boolean;
  toggleComments: () => void;
  commentCount: number;
  isDisabled: boolean
}

const CommentButton = ({
  showComments,
  toggleComments,
  commentCount,
  isDisabled
}: Props) => {
  const label = [showComments ? 'Hide' : 'Show', 'comments'].join(' ');

  const commentCountText = commentCount > 99 ? '99' : commentCount;

  return (
    <Tooltip label={label}>
      <IconButton
        onClick={toggleComments}
        aria-expanded={showComments}
        aria-label={label}
        data-testid="comment-button"
        className="relative"
        disabled={isDisabled}
      >
        <Badge className="absolute -bottom-1 left-7">{commentCountText}</Badge>
        <ChatBubbleOvalLeftIcon
          data-testid="comment-button-icon"
          className="h-6 w-6 text-white"
          aria-hidden
          focusable="false"
        />
      </IconButton>
    </Tooltip>
  );
};

export default CommentButton;
