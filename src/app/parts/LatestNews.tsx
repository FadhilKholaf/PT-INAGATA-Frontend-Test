import Image from 'next/image';
import Link from 'next/link';

export default function LatestNews() {
  return (
    <section className="flex w-screen flex-col px-20">
      <h1 className="text-dark mb-10 text-6xl font-semibold">
        Informasi Terbaru
      </h1>
      <Image
        src="/informations/Belajar-Offline.png"
        alt="Belajar Offline"
        width={500}
        height={500}
        className="mb-6 h-[50vh] w-full rounded-lg object-cover"
      />
      <p className="poppins z-[1] mb-6 flex w-fit items-center rounded-full bg-[#732F9D] px-4 py-2 text-xs font-medium tracking-wide text-white">
        Pengumuman
      </p>
      <h1 className="poppins text-dark mb-4 text-4xl font-medium">
        Kegiatan Belajar Mengajar Offline Dimulai
      </h1>
      <p className="poppins text-light text-2xl">
        Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali
        belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya.
        begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya
        kembali ke aktivitas sekolah secara langsung. Orang tua selama ini
        banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih
        banyak menghabiskan waktu{' '}
        <Link
          href="/berita/Kegiatan Belajar Mengajar Offline Dimulai"
          className="text-pink"
        >
          Read More....
        </Link>
      </p>
    </section>
  );
}
