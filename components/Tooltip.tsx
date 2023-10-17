import {
  Tooltip as TooltipContainer,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  label: string;
}

const Tooltip = ({ children, label }: Props) => {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="bg-[#141627] text-white border-none">
          <p>{label}</p>
        </TooltipContent>
      </TooltipContainer>
    </TooltipProvider>
  );
};

export default Tooltip;
