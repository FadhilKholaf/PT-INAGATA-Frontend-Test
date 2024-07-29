'use client';

import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const menus: { title: string; href: string }[] = [
  { title: 'Beranda', href: '/' },
  { title: 'Tentang Kita', href: '/tentang' },
  { title: 'Berita', href: '/berita' },
  { title: 'Galeri', href: '/galeri' },
  { title: 'Kontak', href: '/kontak' }
];

export default function Navbar() {
  const [path, setPath] = useState<string>();
  const [active, setActive] = useState<boolean>(false);
  const pathname = usePathname();
  const pathnameSplit = pathname.split('/');

  useEffect(() => {
    setPath(pathnameSplit[1]);
  }, [pathnameSplit]);

  return (
    <nav className="fixed z-50 flex h-24 w-screen items-center justify-between bg-purple px-4 text-white lg:px-20">
      <div className="flex items-center gap-2">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={500}
          height={500}
          className="z-10 w-8"
        />
        <p className="z-10 text-3xl font-bold">Schools</p>
      </div>
      <div
        className={cn(
          'absolute -top-[100vh] left-0 mt-24 flex w-full flex-col items-start gap-10 bg-purple p-4 text-xl font-medium tracking-wide transition-all duration-500 ease-in-out lg:static lg:mt-0 lg:w-auto lg:flex-row lg:items-center lg:bg-transparent lg:p-0',
          { '-top-0': active }
        )}
      >
        {menus &&
          menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              onClick={() => setActive(false)}
              className="poppins relative flex justify-center text-5xl font-medium lg:text-xl lg:font-normal"
            >
              {menu.title}
              {path === menu.href.split('/')[1] && (
                <span className="absolute -bottom-1.5 h-0.5 w-full animate-scale rounded-full bg-white lg:w-10"></span>
              )}
            </Link>
          ))}
        <Link
          href="/kontak"
          className="poppins flex h-12 items-center rounded-full bg-pink px-12 py-3 text-base font-semibold tracking-wide lg:hidden"
        >
          PPOB
        </Link>
      </div>
      <Link
        href="/kontak"
        className="poppins hidden h-12 items-center rounded-full bg-pink px-12 py-3 text-base font-semibold tracking-wide lg:flex"
      >
        PPOB
      </Link>
      <div
        className="relative z-10 h-10 w-10 lg:hidden"
        onClick={() => setActive(!active)}
      >
        <div
          className={cn(
            'absolute top-1/3 h-0.5 w-full bg-white transition-all duration-500 ease-out',
            {
              'top-1/2 rotate-45': active
            }
          )}
        ></div>
        <div
          className={cn(
            'absolute bottom-1/3 h-0.5 w-full bg-white transition-all duration-500 ease-out',
            {
              'bottom-1/2 -rotate-45': active
            }
          )}
        ></div>
      </div>
    </nav>
  );
}
