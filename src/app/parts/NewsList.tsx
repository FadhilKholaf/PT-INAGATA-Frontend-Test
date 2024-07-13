'use client';

import cn from '@/utils/cn';
import { information } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NewsList() {
  const [search, setSearch] = useState<'SEMUA' | 'BERITA' | 'PENGUMUMAN'>(
    'SEMUA'
  );

  return (
    <section className="flex w-screen flex-col px-20">
      <div className="mb-10 flex gap-x-5">
        <p
          className="poppins text-dark group relative cursor-pointer py-2 text-2xl"
          onClick={() => setSearch('SEMUA')}
        >
          Semua
          <span
            className={cn(
              'bg-pink absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out',
              {
                'scale-x-100': search === 'SEMUA',
                'group-hover:origin-right group-hover:scale-100':
                  search !== 'SEMUA'
              }
            )}
          ></span>
        </p>
        <p
          className="poppins text-dark group relative cursor-pointer py-2 text-2xl"
          onClick={() => setSearch('BERITA')}
        >
          Berita
          <span
            className={cn(
              'bg-pink absolute bottom-0 left-0 h-0.5 w-full scale-x-0 rounded-full transition-transform duration-300 ease-out',
              {
                'scale-x-100': search === 'BERITA',
                'group-hover:scale-100': search !== 'BERITA'
              }
            )}
          ></span>
        </p>
        <p
          className="poppins text-dark group relative cursor-pointer py-2 text-2xl"
          onClick={() => setSearch('PENGUMUMAN')}
        >
          Pengumuman
          <span
            className={cn(
              'bg-pink absolute bottom-0 left-0 h-0.5 w-full origin-right scale-x-0 rounded-full transition-transform duration-300 ease-out',
              {
                'scale-x-100': search === 'PENGUMUMAN',
                'group-hover:origin-left group-hover:scale-100':
                  search !== 'PENGUMUMAN'
              }
            )}
          ></span>
        </p>
      </div>
      <div className="mb-20 flex w-full flex-wrap justify-between gap-8">
        {information.map((item, index) => {
          if (search !== 'SEMUA' && item.type === search) {
            return (
              <Link href={`/berita/${item.title}`} key={index}>
                <div className="h-[500px] w-[370px]">
                  <Image
                    src={`/informations/${item.image}`}
                    alt="Logo"
                    width={500}
                    height={500}
                    className="mb-6 h-[320px] w-full rounded-lg object-cover"
                  />
                  <p
                    className={cn(
                      'poppins z-[1] mb-6 flex w-fit items-center rounded-full px-4 py-2 text-xs font-medium tracking-wide text-white',
                      {
                        'bg-[#732F9D]': item.type === 'PENGUMUMAN',
                        'bg-[#FF6F6F]': item.type === 'BERITA'
                      }
                    )}
                  >
                    {item.type[0] + item.type.slice(1).toLowerCase()}
                  </p>
                  <div className="flex flex-col gap-y-2">
                    <p className="poppins text-light text-xl font-medium">
                      {item.date}
                    </p>
                    <p className="poppins text-dark text-2xl font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          }
          //
          if (search === 'SEMUA') {
            return (
              <Link href={`/berita/${item.title}`} key={index}>
                <div className="h-[500px] w-[370px]">
                  <Image
                    src={`/informations/${item.image}`}
                    alt="Logo"
                    width={500}
                    height={500}
                    className="mb-6 h-[320px] w-full rounded-lg object-cover"
                  />
                  <p
                    className={cn(
                      'poppins z-[1] mb-6 flex w-fit items-center rounded-full px-4 py-2 text-xs font-medium tracking-wide text-white',
                      {
                        'bg-[#732F9D]': item.type === 'PENGUMUMAN',
                        'bg-[#FF6F6F]': item.type === 'BERITA'
                      }
                    )}
                  >
                    {item.type[0] + item.type.slice(1).toLowerCase()}
                  </p>
                  <div className="flex flex-col gap-y-2">
                    <p className="poppins text-light text-xl font-medium">
                      {item.date}
                    </p>
                    <p className="poppins text-dark text-2xl font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-light poppins text-2xl">
          Menampilkan 9 Dari 21 Data
        </p>
        <div className="flex gap-6">
          <p className="text-light poppins text-2xl">Halaman</p>
          <p className="text-light poppins text-2xl">{'<'}</p>
          <p className="text-pink poppins text-2xl">1</p>
          <p className="text-light poppins text-2xl">2</p>
          <p className="text-light poppins text-2xl">3</p>
          <p className="text-light poppins text-2xl">{'>'}</p>
        </div>
      </div>
    </section>
  );
}
