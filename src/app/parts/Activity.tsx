import Image from 'next/image';
import ActivityBackground from './components/ActivityBackground';
import Link from 'next/link';

export default function Activity() {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center px-4 text-white lg:px-20">
      <div className="relative flex w-full flex-col gap-y-16 overflow-hidden rounded-3xl bg-[#30005F] p-2 lg:p-16">
        <ActivityBackground />
        <div className="z-10 flex items-center justify-between gap-x-4">
          <h1 className="text-3xl font-semibold lg:text-5xl">
            Kumpulan Kegiatan Sekolah
          </h1>
          <Link href="/galeri" className="poppins font-medium lg:text-xl">
            Lihat Semua
          </Link>
        </div>
        <div className="z-10 flex flex-col justify-between gap-4 lg:flex-row">
          <Link href="/galeri">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/Activity1.png"
                alt="Activity"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 flex w-full items-center justify-between bg-purple p-6">
                <p className="poppins text-2xl">Belajar Mengajar</p>
                <Image
                  src="/Arrow.svg"
                  alt="Arrow"
                  width={500}
                  height={500}
                  className="h-6 w-fit"
                />
              </div>
            </div>
          </Link>
          <Link href="/galeri">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/Activity2.png"
                alt="Activity"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 flex w-full items-center justify-between bg-purple p-6">
                <p className="poppins text-2xl">Sharing Session</p>
                <Image
                  src="/Arrow.svg"
                  alt="Arrow"
                  width={500}
                  height={500}
                  className="h-6 w-fit"
                />
              </div>
            </div>
          </Link>
          <Link href="/galeri">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/Activity3.png"
                alt="Activity"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 flex w-full items-center justify-between bg-purple p-6">
                <p className="poppins text-2xl">Kelulusan</p>
                <Image
                  src="/Arrow.svg"
                  alt="Arrow"
                  width={500}
                  height={500}
                  className="h-6 w-fit"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
