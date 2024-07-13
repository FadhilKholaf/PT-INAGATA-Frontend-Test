import cn from '@/utils/cn';
import Image from 'next/image';

export default function Benefit({ tentang }: { tentang?: boolean }) {
  return (
    <section
      className={cn('-bottom-36 w-screen px-20', {
        absolute: !tentang
      })}
    >
      {tentang && (
        <h1 className="text-center text-6xl font-semibold text-[#444444]">
          Keunggulan Sekolah Kami
        </h1>
      )}
      <div
        className={cn(
          'mt-20 flex h-fit w-full items-center justify-between rounded-3xl bg-white',
          {
            'mt-0 h-72 px-12 shadow-lg shadow-black/5': !tentang
          }
        )}
      >
        <div className="flex h-fit flex-col items-center justify-center gap-4">
          <Image
            src="/icons/Book.svg"
            alt="Book"
            width={500}
            height={500}
            className="h-20 w-20"
          />
          <p className="text-gray poppins text-center text-xl">
            Menggunakan Kurikulum Terbaru
          </p>
        </div>
        <div className="flex h-fit flex-col items-center justify-center gap-4">
          <Image
            src="/icons/Clock.svg"
            alt="Clock"
            width={500}
            height={500}
            className="h-20 w-20"
          />
          <p className="text-gray poppins text-center text-xl">
            Efektifitas Waktu Saat Belajar Disekolah
          </p>
        </div>
        <div className="flex h-fit flex-col items-center justify-center gap-4">
          <Image
            src="/icons/Pen.svg"
            alt="Pen"
            width={500}
            height={500}
            className="h-20 w-20"
          />
          <p className="text-gray poppins text-center text-xl">
            Penyaluran Bakat dan Minat Siswa
          </p>
        </div>
        <div className="flex h-fit flex-col items-center justify-center gap-4">
          <Image
            src="/icons/Stats.svg"
            alt="Stats"
            width={500}
            height={500}
            className="h-20 w-20"
          />
          <p className="text-gray poppins text-center text-xl">
            Mengawasi Tumbuh Kembang
          </p>
        </div>
      </div>
    </section>
  );
}
