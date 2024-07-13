import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export default function Description({ tentang }: { tentang?: boolean }) {
  return (
    <section
      className={cn('flex h-screen w-screen items-center px-20', {
        'pt-36': !tentang
      })}
    >
      <div className="flex items-center justify-between gap-x-10">
        <Image
          src="/Description-Image.png"
          alt="Description Image"
          width={500}
          height={500}
        />
        <div className="flex flex-col gap-8">
          <h1 className="text-gray text-6xl font-semibold">
            Sekolah Alam Insan Mulia Berkarya
          </h1>
          <p className="poppins text-gray text-xl">
            Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu
            anak mengembangkan bakat dan kemampuannya. Dengan memberikan
            kurikulum terbaik agar anak bisa memilih minatnya dan fokus
            mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989
            dan terus berkembang
          </p>
          {!tentang && (
            <Link
              href="/kontak"
              className="bg-pink poppins mt-8 flex h-12 w-fit items-center rounded-full px-12 py-3 text-base font-semibold tracking-wide text-white"
            >
              Mulai Belajar
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
