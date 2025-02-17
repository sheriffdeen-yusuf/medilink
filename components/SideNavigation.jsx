'use client';
import { CalendarDaysIcon, HomeIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import SignOutButton from './SignOutButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'Home',
    href: '/account',
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'Results',
    href: '/account/results',
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'Take Assessment',
    href: '/account/profile',
    icon: <BookOpenIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block border-r border-primary-900 max-h-[85vh]">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-slate-600 hover:text-slate-100 transition-colors flex items-center gap-4 font-semibold text-sky-700 ${
                pathname === link.href ? 'bg-sky-100 ' : ''
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
