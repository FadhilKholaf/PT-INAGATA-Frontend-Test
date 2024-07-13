'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [path, setPath] = useState<string>();
  const pathname = usePathname();
  const pathnameSplit = pathname.split('/');

  useEffect(() => {
    if (!pathnameSplit[1]) {
      setPath('beranda');
    } else {
      setPath(pathnameSplit[1]);
    }
  }, [pathnameSplit]);

  return (
    <nav className="bg-purple fixed z-50 flex h-24 w-screen items-center justify-between px-20 text-white">
      <div className="flex items-center gap-2">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={500}
          height={500}
          className="w-8"
        />
        <p className="text-3xl font-bold">Schools</p>
      </div>
      <div className="flex items-center gap-10 text-xl font-medium tracking-wide">
        <Link href="/" className="poppins relative flex justify-center">
          Beranda
          {path === 'beranda' && (
            <span className="animate-scale absolute -bottom-1.5 h-0.5 w-10 rounded-full bg-white"></span>
          )}
        </Link>
        <Link href="/tentang" className="poppins relative flex justify-center">
          Tentang Kita
          {path === 'tentang' && (
            <span className="animate-scale absolute -bottom-1.5 h-0.5 w-10 rounded-full bg-white"></span>
          )}
        </Link>
        <Link href="/berita" className="poppins relative flex justify-center">
          Berita
          {path === 'berita' && (
            <span className="animate-scale absolute -bottom-1.5 h-0.5 w-10 rounded-full bg-white"></span>
          )}
        </Link>
        <Link href="/galeri" className="poppins relative flex justify-center">
          Galeri
          {path === 'galeri' && (
            <span className="animate-scale absolute -bottom-1.5 h-0.5 w-10 rounded-full bg-white"></span>
          )}
        </Link>
        <Link href="/kontak" className="poppins relative flex justify-center">
          Kontak
          {path === 'kontak' && (
            <span className="animate-scale absolute -bottom-1.5 h-0.5 w-10 rounded-full bg-white"></span>
          )}
        </Link>
      </div>
      <Link
        href="/kontak"
        className="bg-pink poppins flex h-12 items-center rounded-full px-12 py-3 text-base font-semibold tracking-wide"
      >
        PPOB
      </Link>
    </nav>
  );
}
