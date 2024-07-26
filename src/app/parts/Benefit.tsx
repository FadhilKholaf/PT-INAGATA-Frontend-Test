import cn from '@/utils/cn';
import Image from 'next/image';

export default function Benefit({ tentang }: { tentang?: boolean }) {
  return (
    <section
      className={cn('-bottom-36 w-screen px-4 lg:px-20', {
        'lg:absolute': !tentang
      })}
    >
      {tentang && (
        <h1 className="text-center text-6xl font-semibold text-[#444444]">
          Keunggulan Sekolah Kami
        </h1>
      )}
      <div
        className={cn(
          'mt-20 flex h-fit w-full flex-col items-center justify-between gap-y-8 rounded-3xl bg-white lg:flex-row',
          {
            'mt-0 shadow-black/5 lg:h-72 lg:px-12 lg:shadow-lg': !tentang
          }
        )}
      >
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4 rounded-3xl p-2 shadow-lg shadow-black/5 lg:w-auto lg:rounded-none lg:shadow-none">
          <Image
            src="/icons/Book.svg"
            alt="Book"
            width={500}
            height={500}
            className="h-20 w-20"
          />
          <p className="poppins text-center text-xl text-gray">
            Menggunakan Kurikulum Terbaru
          </p>
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4 rounded-3xl p-2 shadow-lg shadow-black/5 lg:w-auto lg:rounded-none lg:shadow-none">
          <Image
            src="/icons/Clock.svg"
            alt="Clock"
            width={500}
            height={500}
            className="h-20 w-20"
          />
          <p className="poppins text-center text-xl text-gray">
            Efektifitas Waktu Saat Belajar Disekolah
          </p>
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4 rounded-3xl p-2 shadow-lg shadow-black/5 lg:w-auto lg:rounded-none lg:shadow-none">
          <Image
            src="/icons/Pen.svg"
            alt="Pen"
            width={500}
            height={500}
            className="h-20 w-20"
          />
          <p className="poppins text-center text-xl text-gray">
            Penyaluran Bakat dan Minat Siswa
          </p>
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4 rounded-3xl p-2 shadow-lg shadow-black/5 lg:w-auto lg:rounded-none lg:shadow-none">
          <Image
            src="/icons/Stats.svg"
            alt="Stats"
            width={500}
            height={500}
            className="h-20 w-20"
          />
          <p className="poppins text-center text-xl text-gray">
            Mengawasi Tumbuh Kembang
          </p>
        </div>
      </div>
    </section>
  );
}
