import CardBase from '@/components/CardBase';
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  quantity: number;
}

export default function PostsSkeleton({ quantity }: Props) {
  return (
    <>
      {[...Array(quantity)].map((_, index) => (
        <CardBase
          key={index}
          className="sm:p-4"
        >
          <CardHeader className="flex-row gap-4 items-center space-y-0">
            <Skeleton className="h-12 w-12 rounded-full" />

            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-40" />
            </div>
          </CardHeader>

          <CardContent className="gap-2 flex flex-col">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-1/2" />
          </CardContent>

          <CardFooter className="justify-between">
            <div className="flex gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
            <Skeleton className="h-12 w-12 rounded-full" />
          </CardFooter>
        </CardBase>
      ))}
    </>
  );
}
