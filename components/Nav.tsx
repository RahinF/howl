import { navLinks } from '@/app/constants';
import Link from 'next/link';

interface Props {}

const Nav = ({}: Props) => {
  return (
    <nav className="sticky top-0 h-[70vh] xl:w-[240px] w-full flex items-center">
      <span className="w-full relative">
        <div className="gradient1 w-full h-full absolute top-0 left-0" />
        <div className="gradient2 w-full h-full absolute top-0 left-0" />
        <div className="h-[50vh] overflow-y-scroll hide-scrollbar">
          <div className="flex flex-col gap-4 backdrop-blur-3xl">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex gap-6 items-center p-4 group"
              >
                <link.icon
                  data-testid={`${link.label.toLowerCase()} icon`}
                  className="h-8 w-8 text-muted-foreground group-hover:text-white transition duration-300"
                />
                <span className="uppercase text-muted-foreground tracking-widest text-sm font-semibold hidden xl:block group-hover:text-white transition duration-300">
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
