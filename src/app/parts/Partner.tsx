import cn from '@/utils/cn';
import Image from 'next/image';

export default function Partner({ tentang }: { tentang?: boolean }) {
  return (
    <section
      className={cn('flex h-fit w-screen flex-col gap-y-16 px-20', {
        'my-36': tentang
      })}
    >
      <div
        className={cn('flex justify-between gap-20', {
          'flex-col items-center gap-y-8': tentang
        })}
      >
        <h1
          className={cn('text-dark text-6xl font-semibold', {
            'text-center': tentang
          })}
        >
          Partner Kerja Sama
        </h1>
        <p
          className={cn('poppins text-gray w-3/4 text-2xl', {
            'text-center': tentang
          })}
        >
          {tentang
            ? 'Kami Bekerja sama dengan berbagai lembaga Diseluruh Indonesia untuk menyalurkan bakat siswa kami '
            : 'Kami Bekerja sama dengan berbagai lembaga dan perusahaan besardiseluruh Indonesia untuk menyalurkan bakat siswa kami. diharapakandengan adanaya kerja sama ini siswa dapat meraih prestasi'}
        </p>
      </div>
      <div className="flex items-center justify-between">
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
    </section>
  );
}
