import Link from 'next/link';
import { NavLink } from '@/types';

export default function NavLink(link: NavLink) {
  return (
    <li>
      <Link
        href={link.href}
        className="flex gap-6 items-center p-4 group"
      >
        <link.icon
          data-testid={`${link.label.toLowerCase()}-icon`}
          className="h-8 w-8 text-muted-foreground group-hover:text-white transition duration-300"
          aria-hidden
          focusable="false"
        />
        <span className="uppercase text-muted-foreground tracking-widest text-sm font-semibold hidden xl:block group-hover:text-white transition duration-300">
          {link.label}
        </span>
      </Link>
    </li>
  );
}
