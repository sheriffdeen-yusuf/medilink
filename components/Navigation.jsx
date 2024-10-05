'use client';
import Link from 'next/link';
import { rolesRoute } from '@/constants/index';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isBrowser = () => typeof window !== 'undefined';
  const [data, setData] = useState();

  useEffect(() => {
    if (isBrowser()) {
      const data = JSON.parse(localStorage.getItem('medilinkUser')) || undefined;

      setData(data);
    } else setData(data);
  }, [pathname]);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-2 md:gap-16 items-center text-primary font-semibold">
        <li>
          <Link
            href="/health-tips"
            className=" text-sm md:text-xl hover:text-sky-800 transition-colors"
          >
            Public Area
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-sm md:text-xl hover:text-sky-800 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {data === undefined ? (
            <Link
              href="/account"
              className="text-sm md:text-xl hover:text-sky-800 transition-colors"
            >
              Account
            </Link>
          ) : (
            <Link
              href="/account"
              className="text-sm md:text-xl hover:text-sky-800 transition-colors flex items-center gap-4"
            >
              <div className="bg-slate-200  text-sm md:text-xl text-sky-700 rounded-full p-2 uppercase ">
                <h1 className="font-semibold">{data.firstName.slice(0, 2)}</h1>
              </div>
              <span>Account</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
