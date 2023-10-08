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

interface Props {}

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

const Nav = ({}: Props) => {
  return (
    <nav className="sticky top-0 h-[70vh] xl:w-[308px] flex items-center">
      <span className="w-full relative">
        <div className="gradient1 w-full h-full absolute top-0 left-0" />
        <div className="gradient2 w-full h-full absolute top-0 left-0" />
        <div className="h-[50vh] overflow-y-scroll hide-scrollbar">
          <div className="flex flex-col gap-4 backdrop-blur-3xl">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex gap-6 items-center p-4 group"
              >
                <link.icon className="h-8 w-8 text-muted-foreground group-hover:text-white transition duration-300" />
                <span className="uppercase text-muted-foreground tracking-widest text-sm font-semibold hidden sm:block group-hover:text-white transition duration-300">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </span>
    </nav>
  );
};

export default Nav;
