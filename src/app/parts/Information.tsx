import Image from 'next/image';
import Link from 'next/link';

export default function Information() {
  return (
    <section className="flex w-screen flex-col gap-y-16 px-20">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-dark text-6xl font-semibold">Information</h1>
        <Link href="/berita" className="poppins text-pink text-2xl font-medium">
          Lihat Semua
        </Link>
      </div>
      <div className="flex justify-between">
        <Link href="/berita/Kegiatan Belajar Mengajar Offline Dimulai">
          <div className="flex h-[522px] w-[408px] flex-col gap-4">
            <Image
              src="/Activity1.png"
              alt="Information"
              width={500}
              height={500}
              className="mb-2 h-[320px] rounded-3xl object-cover"
            />
            <p className="poppins z-[1] flex w-fit items-center rounded-full bg-[#732F9D] px-4 py-2 text-xs font-medium tracking-wide text-white">
              Pengumuman
            </p>
            <div className="flex flex-col gap-y-2">
              <p className="poppins text-gray text-xl font-medium">
                Kegiatan Belajar Mengajar Offline Dimulai
              </p>
              <p className="poppins text-light text-base font-medium">
                Kegiatan yang adakan saat siswa selesai melakuakan studi sekolah
              </p>
            </div>
          </div>
        </Link>
        <Link href="/berita/Penambilan Raport Semester Ganjil">
          <div className="flex h-[522px] w-[408px] flex-col gap-4">
            <Image
              src="/Activity2.png"
              alt="Information"
              width={500}
              height={500}
              className="mb-2 h-[320px] rounded-3xl object-cover"
            />
            <p className="poppins z-[1] flex w-fit items-center rounded-full bg-[#732F9D] px-4 py-2 text-xs font-medium tracking-wide text-white">
              Pengumuman
            </p>
            <div className="flex flex-col gap-y-2">
              <p className="poppins text-gray text-xl font-medium">
                Penambilan Raport Semester Ganjil
              </p>
              <p className="poppins text-light text-base font-medium">
                Kegiatan yang adakan saat siswa selesai melakuakan studi sekolah
              </p>
            </div>
          </div>
        </Link>
        <Link href="/berita/Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun">
          <div className="flex h-[522px] w-[408px] flex-col gap-4">
            <Image
              src="/Activity4.png"
              alt="Information"
              width={500}
              height={500}
              className="mb-2 h-[320px] rounded-3xl object-cover"
            />
            <p className="poppins z-[1] flex w-fit items-center rounded-full bg-[#FF6F6F] px-4 py-2 text-xs font-medium tracking-wide text-white">
              Berita
            </p>
            <div className="flex flex-col gap-y-2">
              <p className="poppins text-gray text-xl font-medium">
                Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun
              </p>
              <p className="poppins text-light text-base font-medium">
                Kegiatan yang adakan saat siswa selesai melakuakan studi sekolah
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
