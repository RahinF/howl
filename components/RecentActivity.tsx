'use client';

import CardBase from '@/components/CardBase';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactTimeago from 'react-timeago';

interface Props {}

const activity: { title: string; date: Date }[] = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    date: new Date('December 17, 2022 03:24:00'),
  },
  {
    title: 'Doloremque id autem vitae repudiandae!',
    date: new Date('December 17, 2021 03:24:00'),
  },
  {
    title: 'Omnis aliquam adipisci fugit ut!',
    date: new Date('December 17, 2020 03:24:00'),
  },
];

const RecentActivity = ({}: Props) => {
  return (
    <CardBase>
      <CardHeader>
        <CardTitle className="text-white text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {activity.map(({ title, date }, index) => (
          <div
            key={index}
            className="mb-4 flex gap-4 pb-4 last:mb-0 last:pb-0"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none text-white">
                {title}
              </p>
              <p className="text-sm text-muted-foreground">
                <ReactTimeago date={date} />
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </CardBase>
  );
};

export default RecentActivity;
