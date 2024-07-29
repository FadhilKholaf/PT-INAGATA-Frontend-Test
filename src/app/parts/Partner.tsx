import cn from '@/utils/cn';
import Image from 'next/image';

export default function Partner({ tentang }: { tentang?: boolean }) {
  return (
    <section
      className={cn('flex h-fit w-screen flex-col gap-y-16 px-4 lg:px-20', {
        'my-36': tentang
      })}
    >
      <div
        className={cn(
          'flex flex-col justify-between gap-4 lg:flex-row lg:gap-20',
          {
            'flex-col items-center gap-y-8': tentang
          }
        )}
      >
        <h1
          className={cn('text-4xl font-semibold text-dark lg:text-6xl', {
            'text-center': tentang
          })}
        >
          Partner Kerja Sama
        </h1>
        <p
          className={cn(
            'poppins w-full text-justify text-gray lg:w-3/4 lg:text-2xl',
            {
              'text-center': tentang
            }
          )}
        >
          {tentang
            ? 'Kami Bekerja sama dengan berbagai lembaga Diseluruh Indonesia untuk menyalurkan bakat siswa kami '
            : 'Kami Bekerja sama dengan berbagai lembaga dan perusahaan besardiseluruh Indonesia untuk menyalurkan bakat siswa kami. diharapakan dengan adanaya kerja sama ini siswa dapat meraih prestasi'}
        </p>
      </div>
      <div className="relative h-32 overflow-hidden">
        <div className="absolute left-0 flex w-full animate-autoSlide items-center justify-evenly lg:left-full">
          <Image
            src="/partners/DBL.svg"
            alt="DBL"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/Pertamina.svg"
            alt="Pertamina"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/PDB.svg"
            alt="PDB"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/Paku-Bumi.svg"
            alt="Paku-Bumi"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/TI.svg"
            alt="TI"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/DBL.svg"
            alt="DBL"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
        </div>
        <div className="absolute left-0 hidden w-full animate-autoSlide items-center justify-evenly lg:flex">
          <Image
            src="/partners/DBL.svg"
            alt="DBL"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/Pertamina.svg"
            alt="Pertamina"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/PDB.svg"
            alt="PDB"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/Paku-Bumi.svg"
            alt="Paku-Bumi"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/TI.svg"
            alt="TI"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
          <Image
            src="/partners/DBL.svg"
            alt="DBL"
            width={500}
            height={500}
            className="h-32 w-fit"
          />
        </div>
      </div>
    </section>
  );
}
