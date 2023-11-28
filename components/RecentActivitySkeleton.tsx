'use client';

import CardBase from '@/components/CardBase';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  quantity: number;
}

export default function RecentActivitySkeleton({ quantity }: Props) {
  return (
    <CardBase>
      <CardHeader>
        <CardTitle className="text-white text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="mb-4 flex flex-col gap-8">
        {[...Array(quantity)].map((_, index) => (
          <div key={index}>
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
        ))}
      </CardContent>
    </CardBase>
  );
}
