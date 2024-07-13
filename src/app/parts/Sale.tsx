import Image from 'next/image';
import Link from 'next/link';

export default function Sale() {
  return (
    <section className="flex h-fit w-screen items-center px-20">
      <div className="flex items-center justify-between gap-x-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-gray text-6xl font-semibold">
            Dapatkan Penawaran Menarik
          </h1>
          <p className="poppins text-gray text-xl">
            kami membuka pendaftaran baru tahun ajaran 2022. segera daftarkan
            anak anda disekolah kami dapatkan penawaran menarik
          </p>
          <Link
            href="/kontak"
            className="bg-pink poppins mt-8 flex h-12 w-fit items-center rounded-full px-12 py-3 text-base font-semibold tracking-wide text-white"
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
