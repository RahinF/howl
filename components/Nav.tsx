'use client';

import { navLinks } from '@/app/constants';
import LogoutButton from '@/components/LogoutButton';
import NavLink from '@/components/NavLink';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Nav() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 h-screen xl:w-[240px] w-full flex items-center">
      <Link
        className="p-4 absolute top-4"
        href="/"
      >
        <picture>
          <source
            srcSet={`logo-no-background.svg`}
            media="(min-width: 1280px)"
            width={150}
            height={40}
          />
          <img
            src={`logo-no-text.svg`}
            alt={'howl logo'}
            width={40}
            height={40}
          />
        </picture>
      </Link>
      <div className="w-full relative">
        <div className="gradient-1 w-full h-full absolute top-0 left-0" />
        <div className="gradient-2 w-full h-full absolute top-0 left-0" />
        <div className="max-h-[480px] h-full overflow-y-scroll hide-scrollbar">
          <ul className="flex flex-col gap-2 backdrop-blur-3xl">
            {navLinks.categories.map((link, index) => (
              <NavLink
                key={index}
                {...link}
              />
            ))}
            {!session &&
              navLinks.auth.map((link, index) => (
                <NavLink
                  key={index}
                  {...link}
                />
              ))}
            {session && <LogoutButton />}
          </ul>
        </div>
      </div>
    </nav>
  );
}
