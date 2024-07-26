import Image from 'next/image';
import Link from 'next/link';

export default function Information() {
  return (
    <section className="flex w-screen flex-col gap-y-16 px-4 lg:px-20">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-6xl font-semibold text-dark">Information</h1>
        <Link href="/berita" className="poppins text-2xl font-medium text-pink">
          Lihat Semua
        </Link>
      </div>
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <Link
          href="/berita/Kegiatan Belajar Mengajar Offline Dimulai"
          className="w-full"
        >
          <div className="flex h-[522px] w-full flex-col gap-4">
            <Image
              src="/Activity1.png"
              alt="Information"
              width={500}
              height={500}
              className="mb-2 h-[320px] w-full rounded-3xl object-cover"
            />
            <p className="poppins z-[1] flex w-fit items-center rounded-full bg-[#732F9D] px-4 py-2 text-xs font-medium tracking-wide text-white">
              Pengumuman
            </p>
            <div className="flex flex-col gap-y-2">
              <p className="poppins text-xl font-medium text-gray">
                Kegiatan Belajar Mengajar Offline Dimulai
              </p>
              <p className="poppins text-base font-medium text-light">
                Kegiatan yang adakan saat siswa selesai melakuakan studi sekolah
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/berita/Penambilan Raport Semester Ganjil"
          className="w-full"
        >
          <div className="flex h-[522px] w-full flex-col gap-4">
            <Image
              src="/Activity2.png"
              alt="Information"
              width={500}
              height={500}
              className="mb-2 h-[320px] w-full rounded-3xl object-cover"
            />
            <p className="poppins z-[1] flex w-fit items-center rounded-full bg-[#732F9D] px-4 py-2 text-xs font-medium tracking-wide text-white">
              Pengumuman
            </p>
            <div className="flex flex-col gap-y-2">
              <p className="poppins text-xl font-medium text-gray">
                Penambilan Raport Semester Ganjil
              </p>
              <p className="poppins text-base font-medium text-light">
                Kegiatan yang adakan saat siswa selesai melakuakan studi sekolah
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/berita/Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun"
          className="w-full"
        >
          <div className="flex h-[522px] w-full flex-col gap-4">
            <Image
              src="/Activity4.png"
              alt="Information"
              width={500}
              height={500}
              className="mb-2 h-[320px] w-full rounded-3xl object-cover"
            />
            <p className="poppins z-[1] flex w-fit items-center rounded-full bg-[#FF6F6F] px-4 py-2 text-xs font-medium tracking-wide text-white">
              Berita
            </p>
            <div className="flex flex-col gap-y-2">
              <p className="poppins text-xl font-medium text-gray">
                Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun
              </p>
              <p className="poppins text-base font-medium text-light">
                Kegiatan yang adakan saat siswa selesai melakuakan studi sekolah
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
