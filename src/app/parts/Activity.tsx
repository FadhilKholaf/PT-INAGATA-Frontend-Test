import Image from 'next/image';
import ActivityBackground from './components/ActivityBackground';
import Link from 'next/link';

export default function Activity() {
  return (
    <section className="flex h-screen w-screen items-center justify-center px-20 text-white">
      <div className="relative flex w-full flex-col gap-y-16 overflow-hidden rounded-3xl bg-[#30005F] p-16">
        <ActivityBackground />
        <div className="z-10 flex items-center justify-between">
          <h1 className="text-5xl font-semibold">Kumpulan Kegiatan Sekolah</h1>
          <Link href="/galeri" className="poppins text-xl font-medium">
            Lihat Semua
          </Link>
        </div>
        <div className="z-10 flex justify-between">
          <Link href="/galeri">
            <div className="relative h-[400px] w-[350px] overflow-hidden rounded-2xl">
              <Image
                src="/Activity1.png"
                alt="Activity"
                width={500}
                height={500}
                className="h-full object-cover"
              />
              <div className="bg-purple absolute bottom-0 flex w-full items-center justify-between p-6">
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
            <div className="relative h-[400px] w-[350px] overflow-hidden rounded-2xl">
              <Image
                src="/Activity2.png"
                alt="Activity"
                width={500}
                height={500}
                className="h-full object-cover"
              />
              <div className="bg-purple absolute bottom-0 flex w-full items-center justify-between p-6">
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
            <div className="relative h-[400px] w-[350px] overflow-hidden rounded-2xl">
              <Image
                src="/Activity3.png"
                alt="Activity"
                width={500}
                height={500}
                className="h-full object-cover"
              />
              <div className="bg-purple absolute bottom-0 flex w-full items-center justify-between p-6">
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
