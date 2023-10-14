import IconButton from '@/components/IconButton';
import Tooltip from '@/components/Tooltip';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

interface Props {
  showComments: boolean;
  toggleComments: () => void;
}

const CommentButton = ({ showComments, toggleComments }: Props) => {
  const label = [showComments ? 'Hide' : 'Show', 'comments'].join(' ');

  return (
    <Tooltip label={label}>
      <IconButton
        onClick={toggleComments}
        aria-expanded={showComments}
        aria-label={label}
      >
        <ChatBubbleOvalLeftIcon
          className="h-6 w-6 text-white"
          aria-hidden
          focusable="false"
        />
      </IconButton>
    </Tooltip>
  );
};

export default CommentButton;
