import { NavLink } from '@/types';
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
    { icon: ArrowTrendingUpIcon, href: '/', label: 'Trending' },
    { icon: UsersIcon, href: '/', label: 'Following' },
    { icon: MusicalNoteIcon, href: '/', label: 'Music' },
    { icon: PuzzlePieceIcon, href: '/', label: 'Gaming' },
    { icon: NewspaperIcon, href: '/', label: 'News' },
    { icon: TrophyIcon, href: '/', label: 'Sports' },
  ],
  auth: [
    { icon: ArrowRightOnRectangleIcon, href: '/login', label: 'Login' },
    { icon: UserGroupIcon, href: '/register', label: 'Register' },
  ],
} satisfies Record<string, NavLink[]>;

export default links;
