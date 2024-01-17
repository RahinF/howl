import IconButton from '@/components/IconButton';
import Tooltip from '@/components/Tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

export default function OptionsButton() {
  return (
    <DropdownMenu>
      <Tooltip label="Options">
        <DropdownMenuTrigger asChild>
          <IconButton
            data-testid="options-button"
            aria-label="options button"
          >
            <EllipsisVerticalIcon
              className="h-6 w-6 text-white"
              aria-hidden
              focusable="false"
            />
          </IconButton>
        </DropdownMenuTrigger>
      </Tooltip>
      <DropdownMenuContent className="w-auto bg-[#141627] py-2 text-white border-none">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer px-4">
            <PencilIcon className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer px-4">
            <TrashIcon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

OptionsButton;
