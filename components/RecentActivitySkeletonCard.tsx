import { Skeleton } from '@/components/ui/skeleton';

export default function RecentActivitySkeletonCard() {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <Skeleton className="h-8 w-8 mr-2 rounded-full" />

        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-3 w-20" />
      </div>
      <div className="w-full flex flex-col gap-2 mt-4">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
}
