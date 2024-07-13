import { activity } from '@/utils/data';
import Image from 'next/image';

export default function ActivityList() {
  return (
    <section className="my-20 flex w-screen flex-col px-20">
      <h1 className="text-dark mb-20 text-center text-6xl font-semibold">
        Kumpulan Kegiatan Sekolah
      </h1>
      <div className="mb-20 flex w-full flex-wrap justify-between gap-8">
        {activity.map((item, index) => (
          <div className="h-[430px] w-[370px]" key={index}>
            <Image
              src={`/activities/ActivityList${index + 1}.png`}
              alt="Logo"
              width={500}
              height={500}
              className="mb-6 h-[320px] w-full rounded-lg object-cover"
            />
            <div className="flex flex-col gap-y-2">
              <p className="poppins text-dark text-2xl font-medium">
                {item.title}
              </p>
              <p className="poppins text-light text-base font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-light poppins text-2xl">
          Menampilkan 9 Dari 21 Data
        </p>
        <div className="flex gap-6">
          <p className="text-light poppins text-2xl">Halaman</p>
          <p className="text-light poppins text-2xl">{'<'}</p>
          <p className="text-pink poppins text-2xl">1</p>
          <p className="text-light poppins text-2xl">2</p>
          <p className="text-light poppins text-2xl">3</p>
          <p className="text-light poppins text-2xl">{'>'}</p>
        </div>
      </div>
    </section>
  );
}
