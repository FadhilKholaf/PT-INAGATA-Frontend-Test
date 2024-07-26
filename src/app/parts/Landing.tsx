import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-between bg-purple px-4 pt-24 text-white lg:flex-row lg:px-20 lg:pt-0">
      <div className="z-10 flex flex-col gap-y-8 lg:w-1/2">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Tuntut Ilmu Untuk Masa Depan Yang Cerah
        </h1>
        <p className="poppins text-justify lg:text-xl">
          jelajahi semua pengetahuan dan ilmu bermanfaat yang berguna untuk
          kehidupan anda kedepannya agar lebih bermanfaat dalam hidup anda dan
          orang lain
        </p>
        <Link
          href="/kontak"
          className="poppins mt-8 flex h-12 w-fit items-center rounded-full bg-pink px-12 py-3 text-base font-semibold tracking-wide"
        >
          Mulai Belajar
        </Link>
      </div>
      <Image
        src="/Landing-Image.png"
        alt="Landing Image"
        width={500}
        height={500}
        className="right-20 h-full w-full object-cover md:w-auto lg:brightness-50 lg:absolute lg:h-5/6 lg:pt-24 xl:brightness-100"
      />
    </section>
  );
}
