import { PhotoIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Props {}

const Nav = ({}: Props) => {
  return (
    <nav className="sticky top-0 h-[70vh] xl:w-[308px] flex items-center">
      <span className="w-full">
        <div className="h-[50vh] gradient overflow-y-scroll hide-scrollbar">
          <div className="flex flex-col gap-4 backdrop-blur-3xl">
            {[...Array(100)].map((_, index) => (
              <Link
                key={index}
                href="/"
                className="flex gap-3 items-center p-4"
              >
                <PhotoIcon className="h-8 w-8 text-muted-foreground" />
                <span className="uppercase text-muted-foreground tracking-widest text-sm font-semibold hidden sm:block">
                  item {index + 1}
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
