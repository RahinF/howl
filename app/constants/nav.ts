import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavLink {
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  href: string;
  label: string;
}

import {
  ArrowRightOnRectangleIcon,
  ArrowTrendingUpIcon,
  HomeIcon,
  MusicalNoteIcon,
  NewspaperIcon,
  PuzzlePieceIcon,
  TrophyIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const links = {
  categories: [
    { icon: HomeIcon, href: '/', label: 'Home' },
    { icon: ArrowTrendingUpIcon, href: '/trending', label: 'Trending' },
    { icon: UsersIcon, href: '/', label: 'Following' },
    { icon: MusicalNoteIcon, href: '/music', label: 'Music' },
    { icon: PuzzlePieceIcon, href: '/gaming', label: 'Gaming' },
    { icon: NewspaperIcon, href: '/news', label: 'News' },
    { icon: TrophyIcon, href: '/sports', label: 'Sports' },
  ],
  auth: [
    { icon: ArrowRightOnRectangleIcon, href: '/login', label: 'Login' },
    { icon: UserGroupIcon, href: '/register', label: 'Register' },
  ],
} satisfies Record<string, NavLink[]>;

export default links;
