import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export default function Description({ tentang }: { tentang?: boolean }) {
  return (
    <section className="flex h-fit w-screen items-center px-4 lg:px-20">
      <div className="flex flex-col-reverse items-center justify-between gap-x-10 lg:flex-row">
        <Image
          src="/Description-Image.png"
          alt="Description Image"
          width={500}
          height={500}
          className="w-full lg:w-1/3"
        />
        <div className="flex w-full flex-col gap-4 lg:w-2/3 lg:gap-8">
          <h1 className="text-4xl font-semibold text-gray lg:text-6xl">
            Sekolah Alam Insan Mulia Berkarya
          </h1>
          <p className="poppins text-justify text-gray lg:text-xl">
            Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu
            anak mengembangkan bakat dan kemampuannya. Dengan memberikan
            kurikulum terbaik agar anak bisa memilih minatnya dan fokus
            mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989
            dan terus berkembang
          </p>
          {!tentang && (
            <Link
              href="/kontak"
              className="poppins flex h-12 w-fit items-center rounded-full bg-pink px-12 py-3 text-base font-semibold tracking-wide text-white lg:mt-8"
            >
              Mulai Belajar
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
