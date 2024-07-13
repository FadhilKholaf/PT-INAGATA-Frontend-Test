import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <section className="bg-purple flex h-screen w-screen items-center justify-between px-20 text-white">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-6xl font-bold">
          Tuntut Ilmu Untuk Masa Depan Yang Cerah
        </h1>
        <p className="poppins text-justify text-xl">
          jelajahi semua pengetahuan dan ilmu bermanfaat yang berguna untuk
          kehidupan anda kedepannya agar lebih bermanfaat dalam hidup anda dan
          orang lain
        </p>
        <Link
          href="/kontak"
          className="bg-pink poppins mt-8 flex h-12 w-fit items-center rounded-full px-12 py-3 text-base font-semibold tracking-wide"
        >
          Mulai Belajar
        </Link>
      </div>
      <Image
        src="/Landing-Image.png"
        alt="Landing Image"
        width={500}
        height={500}
        className="h-full w-auto pt-24"
      />
    </section>
  );
}
