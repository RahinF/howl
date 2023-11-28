import { Loader2 } from 'lucide-react';

export default function Spinner() {
  return (
    <div className="py-4 grid place-items-center">
      <div className="flex gap-2 items-center">
        <Loader2 className="h-4 w-4 animate-spin text-white" />
        <span className="text-white text-sm">Loading...</span>
      </div>
    </div>
  );
}
