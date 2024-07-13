import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-44 flex w-screen flex-col gap-y-16 px-20">
      <div className="flex justify-between">
        <div className="flex w-[488px] flex-col gap-y-6">
          <Image
            src="/Inagata.svg"
            alt="Inagata"
            width={500}
            height={500}
            className="h-16 w-fit"
          />
          <p className="poppins text-gray pr-4 text-xl">
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
        <div className="flex w-[676px] justify-between">
          <div className="flex flex-col gap-y-5">
            <p className="poppins text-gray text-2xl font-semibold">
              Informasi
            </p>
            <Link href="/berita" className="text-light poppins text-xl">
              Artikel
            </Link>
            <Link href="/galeri" className="text-light poppins text-xl">
              Galeri
            </Link>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="poppins text-gray text-2xl font-semibold">Tentang</p>
            <Link href="/kontak" className="text-light poppins text-xl">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="text-light poppins text-xl">
              Hubungi Kami
            </Link>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="poppins text-gray text-2xl font-semibold">
              Kantor Kami
            </p>
            <p className="text-light poppins w-[250px] text-xl">
              Indonesia Unamed road RT 01 RW 02 Surabaya
            </p>
          </div>
        </div>
      </div>
      <span className="absolute bottom-[88px] left-0 h-0.5 w-screen bg-[#D3D7DF]"></span>
      <div className="text poppins text-dark relative w-full py-8 text-center">
        Copyright © 2021. All rights reserved.
      </div>
    </footer>
  );
}
