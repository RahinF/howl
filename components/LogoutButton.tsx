'use client';

import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      className="flex gap-6 items-center p-4 group"
      onClick={() => signOut()}
    >
      <ArrowLeftOnRectangleIcon
        data-testid="logout-icon"
        className="h-8 w-8 text-muted-foreground group-hover:text-white transition duration-300"
        aria-hidden
        focusable="false"
      />

      <span className="uppercase text-muted-foreground tracking-widest text-sm font-semibold hidden xl:block group-hover:text-white transition duration-300">
        logout
      </span>
    </button>
  );
}
