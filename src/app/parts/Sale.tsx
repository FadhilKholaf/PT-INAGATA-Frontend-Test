import Image from 'next/image';
import Link from 'next/link';

export default function Sale() {
  return (
    <section className="flex h-fit w-screen items-center px-4 lg:px-20">
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h1 className="text-4xl font-semibold text-gray lg:text-6xl">
            Dapatkan Penawaran Menarik
          </h1>
          <p className="poppins text-justify text-gray lg:text-xl">
            kami membuka pendaftaran baru tahun ajaran 2022. segera daftarkan
            anak anda disekolah kami dapatkan penawaran menarik
          </p>
          <Link
            href="/kontak"
            className="poppins flex h-12 w-fit items-center rounded-full bg-pink px-12 py-3 text-base font-semibold tracking-wide text-white lg:mt-8"
          >
            Lihat Detail
          </Link>
        </div>
        <Image
          src="/Sale-Image.png"
          alt="Sale Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
