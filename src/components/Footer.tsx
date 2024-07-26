import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-44 flex w-screen flex-col gap-y-16 px-4 lg:px-20">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex w-full flex-col gap-y-6 lg:w-[488px]">
          <Image
            src="/Inagata.svg"
            alt="Inagata"
            width={500}
            height={500}
            className="h-16 w-fit"
          />
          <p className="poppins text-xl text-gray lg:pr-4">
            Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk
            kehidupan yang lebih bermanfaat
          </p>
          <div className="flex gap-4">
            <Image
              src="/Twitter.svg"
              alt="Twitter"
              width={500}
              height={500}
              className="h-9 w-9"
            />
            <Image
              src="/Facebook.svg"
              alt="Twitter"
              width={500}
              height={500}
              className="h-9 w-9"
            />
            <Image
              src="/Instagram.svg"
              alt="Twitter"
              width={500}
              height={500}
              className="h-9 w-9"
            />
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col justify-between gap-y-8 lg:mt-0 lg:w-[676px] lg:flex-row">
          <div className="flex flex-col gap-y-5">
            <p className="poppins text-2xl font-semibold text-gray">
              Informasi
            </p>
            <Link href="/berita" className="poppins text-xl text-light">
              Artikel
            </Link>
            <Link href="/galeri" className="poppins text-xl text-light">
              Galeri
            </Link>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="poppins text-2xl font-semibold text-gray">Tentang</p>
            <Link href="/kontak" className="poppins text-xl text-light">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="poppins text-xl text-light">
              Hubungi Kami
            </Link>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="poppins text-2xl font-semibold text-gray">
              Kantor Kami
            </p>
            <p className="poppins w-[250px] text-xl text-light">
              Indonesia Unamed road RT 01 RW 02 Surabaya
            </p>
          </div>
        </div>
      </div>
      <span className="absolute bottom-[88px] left-0 h-0.5 w-screen bg-[#D3D7DF]"></span>
      <div className="text poppins relative w-full py-8 text-center text-dark">
        Copyright © 2021. All rights reserved.
      </div>
    </footer>
  );
}
