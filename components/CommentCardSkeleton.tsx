import { Skeleton } from '@/components/ui/skeleton';

export default function CommentCardSkeleton() {
  return (
    <div data-testid="comment-card">
      <div className="py-6 flex gap-3">
        <Skeleton className="h-10 w-10 mr-2 rounded-full" />

        <div className="flex flex-col gap-3 flex-1">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-20" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
