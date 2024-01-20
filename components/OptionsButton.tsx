import CardBase from '@/components/CardBase';
import CardBaseContainer from '@/components/CardBaseContainer';
import IconButton from '@/components/IconButton';
import Tooltip from '@/components/Tooltip';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CardProvider } from '@/context/CardContext';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';

interface Dialog {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

export default function OptionsButton() {
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);

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
          <DropdownMenuItem
            className="cursor-pointer px-4"
            onClick={() => setOpenEditDialog(true)}
          >
            <PencilIcon className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          {/* start */}

          <DropdownMenuItem
            className="cursor-pointer px-4"
            onClick={() => setOpenDeleteDialog(true)}
          >
            <TrashIcon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>

          {/* end */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
      {/* eddit poist skeleton to include this button */}
      {/* add multpe dialog  */}
      {/* fix dialog border color */}
      {/* add edit, delete function */}
      <Dialog
        open={openEditDialog}
        onOpenChange={setOpenEditDialog}
      >
        <DialogContent>
          <CardProvider>
            <CardBaseContainer>
              <CardBase className="pt-10 pb-6">edit post dialog</CardBase>
            </CardBaseContainer>
          </CardProvider>
        </DialogContent>
      </Dialog>

      <EditDialog
        open={openEditDialog}
        onOpenChange={setOpenEditDialog}
      />

      <DeleteDialog
        open={openDeleteDialog}
        onOpenChange={setOpenDeleteDialog}
      />
    </DropdownMenu>
  );
}

function EditDialog({ open, onOpenChange }: Dialog) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <CardProvider>
          <AnimatePresence mode="wait">
            <motion.div
              key={open.toString()}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
            >
              <CardBaseContainer>
                <CardBase className="pt-10 pb-6">edit post dialog</CardBase>
              </CardBaseContainer>
            </motion.div>
          </AnimatePresence>
        </CardProvider>
      </DialogContent>
    </Dialog>
  );
}

function DeleteDialog({ open, onOpenChange }: Dialog) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <CardProvider>
          <CardBaseContainer>
            <CardBase className="pt-10 pb-6">delte post dialog</CardBase>
          </CardBaseContainer>
        </CardProvider>
      </DialogContent>
    </Dialog>
  );
}
