import { information } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Article({ params }: { params: { title: string } }) {
  return (
    <main className="flex flex-col gap-32 overflow-hidden">
      <div className="bg-purple absolute z-0 h-screen w-screen"></div>
      <div className="z-10 flex w-screen flex-col gap-y-4 px-20 pt-40">
        <h1 className="h-16 text-6xl font-bold tracking-wide text-white">
          {params.title.split('%20').join(' ')}
        </h1>
        <p className="poppins mb-6 text-3xl text-white">12 Desember 2020</p>
        <Image
          src="/informations/Belajar-Offline.png"
          alt="Belajar-Offline"
          width={500}
          height={500}
          className="mb-6 h-[70vh] w-full rounded-lg object-cover"
        />
        <p className="poppins text-dark mb-6 text-xl">
          Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali
          belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas
          saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat
          anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama
          ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih
          banyak menghabiskan waktu di depan layar gawainya bukan hanya untuk
          belajar namun juga untuk bermain game. Belum lagi harus menemani dan
          membantu anak-anak belajar sementara pekerjaan di rumah tidaklah
          sedikit.
        </p>
        <p className="poppins text-dark mb-6 text-xl">
          Namun perlahan demi perlahan sejak Oktober lalu, beberapa sekolah di
          Indonesia sudah mulai menerapkan Pembelajaran Tatap Muka atau PTM
          namun secara terbatas termasuk di Purwakarta kota saya tercinta.
          Seminggu sekali anak-anak bersekolah tentunya dengan pembatasan jarak
          ataupun waktu belajar yang mengalami pengurangan.
        </p>
        <p className="poppins text-dark mb-6 text-xl">
          Sekolah tempat saya mengabdi yaitu SMPN 8 Purwakarta baru di Januari
          tahun 2022 ini akan mulai melaksanakan pembelajaran tatap muka secara
          terbatas setelah memenuhi persyaratan yang ditentukan oleh Pemerintah
          Daerah dalam hal ini Dinas Pendidikan yang beberapa syaratnya antara
          lain tersedianya fasilitas kesehatan, siswa-siswi serta civitas
          sekolah yang sudah di vaksin dan beberapa persyaratan lainnya.
        </p>
        <p className="poppins text-dark mb-6 text-xl">
          Karenanya untuk mewujudkan mimpi para siswa yang ingin kembali belajar
          di sekolah, di hari Jumat tanggal 7 Januari 2022 diselenggarakan
          kegiatan gotong royong membersihkan sekolah yang dilaksanakan oleh
          perwakilan orang tua siswa, perwakilan siswa, perwakilan OSIS dan
          tentunya dilaksanakan juga oleh segenap civitas sekolah baik itu Guru
          maupun Staff Tata Usaha.
        </p>
        <p className="poppins text-dark mb-6 text-xl">
          Kegiatan gotong royong membersihkan sekolah tersebut diadakan agar
          ketika anak kembali ke kelasnya, kelasnya sudah dalam keadaan bersih.
          Seperti yang dikatakan oleh perwakilan orang tua dari kelas 7 dan 9
          yang mengatakan alasan ikut gotong royong membersihkan kelas anaknya
          agar anaknya dapat belajar dengan nyaman dan sehat karena lingkungan
          kelas maupun sekolahnya yang bersih. Selain itu mengingat salah satu
          syarat bisa diadakan pembelajaran tatap muka adalah lingkungan
          pembelajaran yang bersih dan sehat.
        </p>
        <p className="poppins text-dark mb-16 text-xl">
          Selain membawa peralatan kebersihan masing-masing, ada pula orang tua
          yang membawa makanan untuk dikonsumsi setelah kelas selesai. Terjalin
          pula kerjasama yang baik antar orang tua padahal ada yang tidak kenal
          awalnya begitu juga anak-anak kelas 7 yang akhirnya bisa bertemu
          dengan teman kelasnya secara langsung setelah di semester ganjil ini
          hanya bertemu di pembelajaran online. Semuanya hadir demi mewujudkan
          pembelajaran tatap muka meskipun terbatas.
        </p>
        <p className="poppins text-light text-2xl">Bagikan Artikel</p>
        <div className="flex gap-4">
          <Image
            src="/Links.svg"
            alt="Twitter"
            width={500}
            height={500}
            className="h-12 w-12"
          />
          <Image
            src="/Whatsapp.svg"
            alt="Twitter"
            width={500}
            height={500}
            className="h-12 w-12"
          />
          <Image
            src="/Facebook.svg"
            alt="Twitter"
            width={500}
            height={500}
            className="h-12 w-12"
          />
        </div>
        <div className="mt-20 flex flex-col">
          <h1 className="text-dark h-16 text-5xl font-bold">Artikel Lainnya</h1>
          <div className="mt-10 flex w-full justify-between">
            {information.slice(0, 3).map((item, index) => (
              <Link href={`/berita/${item.title}`} key={index}>
                <div className="h-[500px] w-[370px]" key={index}>
                  <Image
                    src={`/informations/${item.image}`}
                    alt="Logo"
                    width={500}
                    height={500}
                    className="mb-6 h-[320px] w-full rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-y-2">
                    <p className="poppins text-light text-xl font-medium">
                      {item.date}
                    </p>
                    <p className="poppins text-dark text-2xl font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
