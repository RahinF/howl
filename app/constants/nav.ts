import {
  ArrowTrendingUpIcon,
  HomeIcon,
  MusicalNoteIcon,
  NewspaperIcon,
  PuzzlePieceIcon,
  TrophyIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

interface Link {
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  href: string;
  label: string;
}
const links: Link[] = [
  { icon: HomeIcon, href: '/', label: 'Home' },
  { icon: ArrowTrendingUpIcon, href: '/', label: 'Trending' },
  { icon: UsersIcon, href: '/', label: 'Following' },
  { icon: MusicalNoteIcon, href: '/', label: 'Music' },
  { icon: PuzzlePieceIcon, href: '/', label: 'Gaming' },
  { icon: NewspaperIcon, href: '/', label: 'News' },
  { icon: TrophyIcon, href: '/', label: 'Sports' },
];

export default links;
